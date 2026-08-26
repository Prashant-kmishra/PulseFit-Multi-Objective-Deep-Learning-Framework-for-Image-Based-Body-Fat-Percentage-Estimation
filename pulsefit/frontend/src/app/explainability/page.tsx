import Link from "next/link";
import { GlassCard } from "@/components/ui/GlassCard";
import { ArrowLeft } from "lucide-react";

export default function Explainability() {
  return (
    <main className="relative py-4 px-6 flex justify-center">
      <div className="max-w-4xl w-full relative z-10">
        
        <h1 className="text-4xl font-black tracking-tight text-deepblue mb-4">Inside the Model</h1>
        <p className="text-xl text-muted mb-12">Explainable AI for Body Composition Estimation</p>

        <div className="space-y-12">
          {/* Architecture Flowchart */}
          <section>
            <h2 className="text-2xl font-bold mb-6 text-deepblue">Architecture Flowchart</h2>
            <div className="relative py-8">
              
              {/* Connecting Line */}
              <div className="absolute left-[50%] top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-seagreen to-deepblue -translate-x-1/2 opacity-20 z-0 hidden md:block" />

              <div className="flex flex-col gap-12 relative z-10">
                
                {/* Step 1 */}
                <div className="flex flex-col md:flex-row items-center gap-6 group">
                  <div className="flex-1 text-right hidden md:block">
                    <h3 className="text-xl font-bold text-primary">1. Raw Input</h3>
                    <p className="text-sm text-muted">User uploads a full-body mirror selfie.</p>
                  </div>
                  <div className="w-16 h-16 rounded-full bg-white shadow-lg border-4 border-primary flex items-center justify-center text-primary font-bold text-xl relative">
                    1
                  </div>
                  <div className="flex-1 md:text-left text-center">
                    <h3 className="text-xl font-bold text-primary md:hidden">1. Raw Input</h3>
                    <div className="p-4 bg-white/60 backdrop-blur-md rounded-2xl border border-white/50 shadow-[0_4px_20px_rgba(0,0,0,0.05)] inline-block w-full max-w-sm transition-transform hover:scale-105">
                      Input image undergoes basic MIME type validation.
                    </div>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex flex-col md:flex-row items-center gap-6 group">
                  <div className="flex-1 text-right hidden md:block">
                    <div className="p-4 bg-white/60 backdrop-blur-md rounded-2xl border border-white/50 shadow-[0_4px_20px_rgba(0,0,0,0.05)] inline-block w-full max-w-sm transition-transform hover:scale-105">
                      Extracts person-class mask and blacks out background noise.
                    </div>
                  </div>
                  <div className="w-16 h-16 rounded-full bg-white shadow-lg border-4 border-seagreen flex items-center justify-center text-seagreen font-bold text-xl relative">
                    2
                  </div>
                  <div className="flex-1 md:text-left text-center">
                    <h3 className="text-xl font-bold text-seagreen">2. DeepLabV3 Segmentation</h3>
                    <p className="text-sm text-muted">ResNet-101 Backbone</p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex flex-col md:flex-row items-center gap-6 group">
                  <div className="flex-1 text-right hidden md:block">
                    <h3 className="text-xl font-bold text-primary">3. Preprocessing</h3>
                    <p className="text-sm text-muted">SquarePad + Resize</p>
                  </div>
                  <div className="w-16 h-16 rounded-full bg-white shadow-lg border-4 border-primary flex items-center justify-center text-primary font-bold text-xl relative">
                    3
                  </div>
                  <div className="flex-1 md:text-left text-center">
                    <h3 className="text-xl font-bold text-primary md:hidden">3. Preprocessing</h3>
                    <div className="p-4 bg-white/60 backdrop-blur-md rounded-2xl border border-white/50 shadow-[0_4px_20px_rgba(0,0,0,0.05)] inline-block w-full max-w-sm transition-transform hover:scale-105">
                      <span className="font-bold text-red-500">Crucial:</span> Naive stretching corrupts body geometry and biases predictions. We pad it to square first.
                    </div>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="flex flex-col md:flex-row items-center gap-6 group">
                  <div className="flex-1 text-right hidden md:block">
                    <div className="p-4 bg-white/60 backdrop-blur-md rounded-2xl border border-white/50 shadow-[0_4px_20px_rgba(0,0,0,0.05)] inline-block w-full max-w-sm transition-transform hover:scale-105">
                      Shared 256-d FC layer splitting into two linear heads.
                    </div>
                  </div>
                  <div className="w-16 h-16 rounded-full bg-white shadow-lg border-4 border-seagreen flex items-center justify-center text-seagreen font-bold text-xl relative">
                    4
                  </div>
                  <div className="flex-1 md:text-left text-center">
                    <h3 className="text-xl font-bold text-seagreen">4. EfficientNet-B0 Regression</h3>
                    <p className="text-sm text-muted">Dual-head Output (Height/Weight)</p>
                  </div>
                </div>

                {/* Step 5 */}
                <div className="flex flex-col md:flex-row items-center gap-6 group">
                  <div className="flex-1 text-right hidden md:block">
                    <h3 className="text-xl font-bold text-deepblue">5. Calibration & Formula</h3>
                    <p className="text-sm text-muted">StandardScaler + Ridge Calibration</p>
                  </div>
                  <div className="w-16 h-16 rounded-full bg-white shadow-lg border-4 border-deepblue flex items-center justify-center text-deepblue font-bold text-xl relative">
                    5
                  </div>
                  <div className="flex-1 md:text-left text-center">
                    <h3 className="text-xl font-bold text-deepblue md:hidden">5. Calibration & Formula</h3>
                    <div className="p-4 bg-white/60 backdrop-blur-md rounded-2xl border border-white/50 shadow-[0_4px_20px_rgba(0,0,0,0.05)] inline-block w-full max-w-sm transition-transform hover:scale-105">
                      Inverse transforms applied, followed by the Deurenberg formula to calculate final Body Fat %.
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* Why two techniques */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Why two explainability techniques?</h2>
            <GlassCard className="p-8">
              <p className="mb-4">We use <strong>Grad-CAM</strong> for the deep CNN spatial reasoning, and <strong>exact Shapley/linear attribution</strong> for the closed-form formula.</p>
              <p className="text-muted">This is a deliberate engineering decision. Applying generic KernelSHAP to a CNN over raw pixels is computationally heavy and often the wrong tool for the job. Instead, we use Grad-CAM to visualize *where* the CNN is looking, and exact Shapley decomposition where the model is perfectly linear (the Deurenberg formula) to explain *how* the final number was calculated.</p>
            </GlassCard>
          </section>

          {/* Methodology */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Methodology & Training Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <GlassCard className="p-6">
                <h3 className="font-bold text-deepblue mb-2">Architecture</h3>
                <p className="text-sm text-muted">EfficientNet-B0 backbone with a shared 256-d fully connected layer, splitting into two regression heads for Height and Weight.</p>
              </GlassCard>
              <GlassCard className="p-6">
                <h3 className="font-bold text-deepblue mb-2">Hyperparameter Search</h3>
                <p className="text-sm text-muted">Optuna search over learning rate, weight decay, dropout, and loss-weighting penalty.</p>
              </GlassCard>
              <GlassCard className="p-6">
                <h3 className="font-bold text-deepblue mb-2">Training Regime</h3>
                <p className="text-sm text-muted">SmoothL1 loss with early stopping and mixed-precision training via PyTorch AMP.</p>
              </GlassCard>
              <GlassCard className="p-6">
                <h3 className="font-bold text-deepblue mb-2">Post-Processing</h3>
                <p className="text-sm text-muted">Ridge calibration step on validation data to shift predictions towards ground truth effectively.</p>
              </GlassCard>
            </div>
          </section>

          {/* Limitations */}
          <section>
            <GlassCard className="p-8 border-l-4 border-l-primary bg-primary/5">
              <h2 className="text-xl font-bold mb-2">Limitations & Honesty</h2>
              <p className="text-sm text-muted">
                The Deurenberg formula is an epidemiological estimate, not a DEXA scan. 
                Predictions heavily depend on photo quality, pose, and lighting. 
                This is a portfolio and research project, not a medical device. 
                Always consult a healthcare professional for actual medical advice.
              </p>
            </GlassCard>
          </section>
        </div>
      </div>
    </main>
  );
}
