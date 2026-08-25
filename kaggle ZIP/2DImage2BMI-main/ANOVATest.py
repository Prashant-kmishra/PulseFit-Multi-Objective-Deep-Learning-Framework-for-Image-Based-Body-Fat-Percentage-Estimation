import numpy as np
import sklearn.gaussian_process  # GPR
from sklearn.gaussian_process.kernels import Exponentiation, RationalQuadratic
from sklearn.svm import SVR
import json
import os
import re
from util import Resize
from torchvision import models, transforms
import torch
import torch.nn as nn
import cv2
import csv
from sklearn.metrics import mean_absolute_error

IMG_SIZE = 224
BATCH_SIZE = 1
IMG_MEAN = [0.485, 0.456, 0.406]
IMG_STD = [0.229, 0.224, 0.225]

# Check if CUDA is available, otherwise use CPU
DEVICE = torch.device("cuda:0" if torch.cuda.is_available() else "cpu")
print(f"Using device: {DEVICE}")

transform = transforms.Compose([
    transforms.ToPILImage(),
    Resize(IMG_SIZE),
    transforms.Pad(IMG_SIZE),
    transforms.CenterCrop(IMG_SIZE),
    transforms.ToTensor(),
    transforms.Normalize(IMG_MEAN, IMG_STD)
])


def get_sex_BMI(img_name):
    """
    Extract sex and BMI from image filename.
    Expected format: number_[F/M]_age_height_weight.extension
    """
    ret = re.match(r"\d+?_([FMfm])_(\d+?)_(\d+?)_(\d+).+", img_name)
    if ret:
        sex = 0 if (ret.group(1) == 'F' or ret.group(1) == 'f') else 1
        height = int(ret.group(3)) / 100000  # Convert to meters
        weight = int(ret.group(4)) / 100000  # Convert to kg
        BMI = weight / (height ** 2)
        return sex, BMI
    else:
        raise ValueError(f"Cannot parse filename: {img_name}")


def Stdm(x):
    Mean = np.mean(x, axis=0)
    Std = np.std(x, axis=0)
    return Mean, Std


def Test(BodyFeature):
    # Update paths for Windows environment
    base_path = r"e:\assignment (9th sem)\CAP II\Body Fat Analysis System\2DImage2BMI-main"
    Train_path = os.path.join(base_path, "datasets", "Image_train")
    Test_path = os.path.join(base_path, "datasets", "Image_test")
    
    # Check if directories exist
    if not os.path.exists(Train_path):
        print(f"Warning: Training path does not exist: {Train_path}")
        print("Please create the datasets/Image_train directory and add your training images")
        return
    
    if not os.path.exists(Test_path):
        print(f"Warning: Test path does not exist: {Test_path}")
        print("Please create the datasets/Image_test directory and add your test images")
        return
    
    TrainList = os.listdir(Train_path)
    TestList = os.listdir(Test_path)
    
    if not TrainList:
        print(f"Warning: No training images found in {Train_path}")
        return
    
    if not TestList:
        print(f"Warning: No test images found in {Test_path}")
        return
    x_train = []
    y_train = []
    x_test = []
    y_test = []
    x_train_vgg = []
    x_test_vgg = []
    VGG_NET = models.vgg16(pretrained=True).to(DEVICE)
    VGG_NET.classifier = nn.Sequential(*list(VGG_NET.classifier.children())[:-6])
    VGG_NET.eval()

    for img in TrainList:
        img_path = os.path.join(Train_path, img)
        data = cv2.imread(img_path, flags=1)[:, :, ::-1]
        data = torch.unsqueeze(transform(data), 0).to(DEVICE)
        data = torch.squeeze(VGG_NET(data).detach()).cpu().numpy()
        x_train_vgg.append(data)
        sex, BMI = get_sex_BMI(img)
        bf = BodyFeature[img]
        x_train.append(np.asarray([bf['WTR'], bf['WHdR'], bf['WHpR'], bf['HpHdR'], bf['Area']]))
        y_train.append(BMI)

    for img in TestList:
        img_path = os.path.join(Test_path, img)
        data = cv2.imread(img_path, flags=1)[:, :, ::-1]
        data = torch.unsqueeze(transform(data), 0).to(DEVICE)
        data = torch.squeeze(VGG_NET(data).detach()).cpu().numpy()
        x_test_vgg.append(data)
        sex, BMI = get_sex_BMI(img)
        bf = BodyFeature[img]
        x_test.append(np.asarray([bf['WTR'], bf['WHdR'], bf['WHpR'], bf['HpHdR'], bf['Area']]))
        y_test.append(BMI)

    Mean, Std = Stdm(x_train)
    x_train = (x_train - Mean) / Std
    x_test = (x_test - Mean) / Std

    svr = SVR(kernel='rbf')
    svr_vgg = SVR(kernel='rbf')
    KN = Exponentiation(RationalQuadratic(), exponent=2)
    gpr = sklearn.gaussian_process.GaussianProcessRegressor(kernel=KN, alpha=1e-3)

    regressors = [svr, gpr, svr_vgg]
    y_pred = [[], [], []]
    
    # Update output CSV path for Windows
    output_csv_path = os.path.join(base_path, "results", "SVRGPRVGG.csv")
    os.makedirs(os.path.dirname(output_csv_path), exist_ok=True)
    
    with open(output_csv_path, 'a+', newline='') as fp:
        writer = csv.writer(fp)
        for i, reg in enumerate(regressors):
            if i != 2:
                reg.fit(x_train, y_train)
                y_pred[i] = reg.predict(x_test)
                print("MAE:", mean_absolute_error(y_test, y_pred[i]))
            else:
                reg.fit(x_train_vgg, y_train)
                y_pred[i] = reg.predict(x_test_vgg)
                print("MAE:", mean_absolute_error(y_test, y_pred[i]))
            writer.writerow(y_pred[i])


if __name__ == '__main__':
    # Update JSON file path for Windows
    base_path = r"e:\assignment (9th sem)\CAP II\Body Fat Analysis System\2DImage2BMI-main"
    json_file_path = os.path.join(base_path, "BdyFeature.json")
    
    if not os.path.exists(json_file_path):
        print(f"Error: Body feature JSON file not found: {json_file_path}")
        print("Please ensure the BdyFeature.json file exists in the project directory")
        exit(1)
    
    try:
        with open(json_file_path) as f:
            BodyFeature = json.load(f)
            Test(BodyFeature)
    except Exception as e:
        print(f"Error loading or processing data: {e}")
