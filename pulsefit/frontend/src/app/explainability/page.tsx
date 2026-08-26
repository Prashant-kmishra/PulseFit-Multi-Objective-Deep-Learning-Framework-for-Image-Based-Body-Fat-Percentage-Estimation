import { GlassCard } from "@/components/ui/GlassCard";

export default function Explainability() {
  return (
    <main className="relative py-4 px-6 flex justify-center">
      <div className="max-w-4xl w-full relative z-10">
        
        <div className="text-center">
          <h1 className="text-4xl font-black tracking-tight text-deepblue mb-4">Inside the Model</h1>
          <p className="text-xl text-muted mb-12">Explainable AI for Body Composition Estimation</p>
        </div>

        <div className="space-y-12">
          {/* Architecture Flowchart */}
          <section>
            <h2 className="text-3xl font-black mb-8 text-deepblue text-center">Architecture Flowchart</h2>
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
                    <p className="text-sm text-muted">StandardScaler + Ridge Calibration (Rollback Baseline)</p>
                  </div>
                  <div className="w-16 h-16 rounded-full bg-white shadow-lg border-4 border-deepblue flex items-center justify-center text-deepblue font-bold text-xl relative">
                    5
                  </div>
                  <div className="flex-1 md:text-left text-center">
                    <h3 className="text-xl font-bold text-deepblue md:hidden">5. Calibration & Formula</h3>
                    <div className="p-4 bg-white/60 backdrop-blur-md rounded-2xl border border-white/50 shadow-[0_4px_20px_rgba(0,0,0,0.05)] inline-block w-full max-w-sm transition-transform hover:scale-105">
                      Inverse transforms applied, and 1D Ridge regression applied as a final calibrator to minimize overall MAE. Followed by the Deurenberg formula to calculate final Body Fat %.
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* Case Study */}
          <section>
            <h2 className="text-3xl font-black mb-8 text-deepblue text-center">Case Study: Edge Case Handling vs. Global Accuracy</h2>
            <div className="space-y-6">
              <GlassCard className="p-8 border-l-4 border-l-primary">
                <h3 className="text-xl font-bold mb-3">Observation: Regression to the Mean</h3>
                <p className="text-muted mb-4">Initial validation revealed systematic under-reporting for instances exceeding 100 kg. This is a classic symptom of regression to the mean; the regression network heavily penalized extreme variance during training, forcing predictions toward the dataset&#39;s median to minimize overall loss.</p>
                
                <h3 className="text-xl font-bold mb-3 mt-6">Experimentation: Piecewise Ensembling</h3>
                <p className="text-muted mb-4">To correct this bias, we engineered a piecewise <strong>Blended Calibrator</strong>. We applied a standard Ridge regression for predictions &lt; 65 kg, and an Isotonic regression for predictions &gt; 85 kg, smoothly interpolating the weights in the transitional zone. This successfully forced the model&#39;s dynamic range to stretch and capture edge-case weights.</p>
              </GlassCard>

              <GlassCard className="p-8 border-l-4 border-l-red-500 bg-red-500/5">
                <h3 className="text-xl font-bold text-red-600 mb-3">
                  Analysis: 2D Spatial Limits on Depth Estimation
                </h3>
                <p className="text-muted mb-4">Despite capturing extreme values, the overall Mean Absolute Error (MAE) worsened significantly. This exposes a hard limitation in predicting volumetric weight from 2D computer vision:</p>
                <ul className="list-disc pl-5 space-y-3 text-muted">
                  <li><strong>The Baseline (Original Ridge Model):</strong> The baseline achieved a ± 12.47 kg error. It mathematically learned a conservative boundary condition, maintaining predictions within a dense 60-100 kg cluster to minimize error across the 80% majority, even at the cost of failing on heavy outliers.</li>
                  <li><strong>The High-Variance Approach (Blended Model):</strong> By forcing the model to stretch its predictions up to 140+ kg, we encountered a dimensionality limit. A 2D CNN cannot reliably differentiate the physical depth of a 110 kg subject from a 140 kg subject based solely on silhouette width. Forcing these extreme predictions caused the variance to explode, degrading the <strong>overall average error by 34% (from ± 12.47 kg to ± 16.74 kg)</strong>.</li>
                </ul>
              </GlassCard>

              <GlassCard className="p-8 border-l-4 border-l-seagreen bg-seagreen/5">
                <h3 className="text-xl font-bold text-seagreen mb-3">
                  Engineering Trade-offs & Strategic Rollback
                </h3>
                <p className="text-muted mb-4">In a production environment, deploying an experimental feature that degrades global performance by 34% is unacceptable. The engineering decision was to prioritize the majority user base:</p>
                <blockquote className="border-l-2 border-seagreen/50 pl-4 py-2 italic text-muted">
                  &quot;I observed systematic under-reporting for heavyweights due to regression to the mean and engineered a piecewise blended calibrator to expand the dynamic range. However, validation testing revealed this degraded global MAE from 12.4 kg to 16.7 kg, primarily because 2D pixel density lacks the requisite depth data to support high-variance volumetric predictions. I made the data-driven decision to roll back to the Ridge baseline to protect the 80% majority, mitigating the edge-case through strict UI guardrails and photo guidelines instead.&quot;
                </blockquote>
                <div className="mt-4 text-seagreen font-bold">
                  Production Status: Running on the Ridge Baseline to preserve global accuracy.
                </div>
              </GlassCard>
            </div>
          </section>

          {/* Why two techniques */}
          <section>
            <h2 className="text-3xl font-black mb-8 text-deepblue text-center">Why two explainability techniques?</h2>
            <GlassCard className="p-8">
              <p className="mb-4">We use <strong>Grad-CAM</strong> for the deep CNN spatial reasoning, and <strong>exact Shapley/linear attribution</strong> for the closed-form formula.</p>
              <p className="text-muted">This is a deliberate engineering decision. Applying generic KernelSHAP to a CNN over raw pixels is computationally heavy and often the wrong tool for the job. Instead, we use Grad-CAM to visualize *where* the CNN is looking, and exact Shapley decomposition where the model is perfectly linear (the Deurenberg formula) to explain *how* the final number was calculated.</p>
            </GlassCard>
          </section>

          {/* Methodology */}
          <section>
            <h2 className="text-3xl font-black mb-8 text-deepblue text-center">Methodology & Training Details</h2>
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
