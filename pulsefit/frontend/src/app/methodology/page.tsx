import { GlassCard } from "@/components/ui/GlassCard";

export default function Methodology() {
  return (
    <main className="relative py-4 px-6 flex justify-center">
      <div className="max-w-4xl w-full relative z-10">
        
        <div className="text-center mb-12">
          <h1 className="text-4xl font-black tracking-tight text-deepblue mb-4">Limitations</h1>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            At PulseFit, we believe in radical transparency. Predicting clinical biometrics from standard 2D RGB images is a complex computer vision challenge. Below are the architectural constraints and our engineering mitigations.
          </p>
        </div>

        <div className="space-y-8">
          {/* Card 1 */}
          <GlassCard className="p-8">
            <h2 className="text-2xl font-bold text-deepblue mb-4">1. The Dimensionality Gap (2D vs. 3D)</h2>
            <div className="space-y-3 text-muted">
              <p><strong>The Challenge:</strong> CNNs lack LiDAR or depth-sensing capabilities. The model estimates body mass based primarily on 2D pixel density.</p>
              <p><strong>The Limitation:</strong> Distance from the camera, camera angle, and loose clothing (which inflates the segmented silhouette) can mathematically trick the network into predicting a higher mass.</p>
              <p><strong>The Mitigation:</strong> We enforce a strict <strong>Standard Operating Procedure (SOP)</strong> requiring full-body, form-fitting, straight-angle photos to standardize the geometric input.</p>
            </div>
          </GlassCard>

          {/* Card 2 */}
          <GlassCard className="p-8">
            <h2 className="text-2xl font-bold text-deepblue mb-4">2. The &quot;Squash&quot; Effect</h2>
            <div className="space-y-3 text-muted">
              <p><strong>The Challenge:</strong> Standard deep learning pipelines force images into square dimensions (e.g., 224x224 tensors). Naive resizing distorts human proportions, vertically &quot;squashing&quot; portraits and making users appear artificially wider.</p>
              <p><strong>The Mitigation:</strong> We engineered a custom <code>SquarePad</code> transformation pipeline. This dynamically pads the original image with negative space before resizing, preserving the user&#39;s exact physical aspect ratio during tensor scaling.</p>
            </div>
          </GlassCard>

          {/* Card 3 */}
          <GlassCard className="p-8">
            <h2 className="text-2xl font-bold text-deepblue mb-4">3. Variance Compression & Data Quality</h2>
            <div className="space-y-3 text-muted">
              <p><strong>The Challenge:</strong> Open-source biometric datasets suffer from self-reporting noise. Furthermore, regression algorithms mathematically penalize extreme outliers to minimize overall dataset loss, creating a &quot;ceiling effect&quot; that systematically under-reports heavyweight individuals.</p>
              <p><strong>The Mitigation:</strong> After A/B testing aggressive Isotonic calibrators (which degraded global accuracy by 34%), we made the executive decision to deploy a <strong>Ridge Calibrator</strong>. This protects the 80% majority while transparently acknowledging the margin of error for edge cases.</p>
            </div>
          </GlassCard>

          {/* Card 4 */}
          <GlassCard className="p-8 bg-gradient-to-br from-white/60 to-primary/5">
            <h2 className="text-2xl font-bold text-deepblue mb-4">4. Contextualizing the Accuracy</h2>
            <div className="flex gap-4 mb-4">
              <div className="px-3 py-1 bg-white/60 rounded-md font-mono text-sm border border-white/50 text-deepblue">Height: ± 6.88 cm</div>
              <div className="px-3 py-1 bg-white/60 rounded-md font-mono text-sm border border-white/50 text-deepblue">Weight: ± 12.47 kg</div>
              <div className="px-3 py-1 bg-white/60 rounded-md font-mono text-sm border border-white/50 text-deepblue">BMI: ± 3.52</div>
            </div>
            <p className="text-muted">
              <strong>Why this is a success:</strong> Predicting biological mass purely from pixels—without scales, tape measures, or depth sensors—is a highly volatile environment. Achieving a BMI variance of just ± 3.52 despite dataset noise and dimensionality loss demonstrates robust feature extraction and a rigorously calibrated data pipeline.
            </p>
          </GlassCard>

          {/* SOP */}
          <GlassCard className="p-8 border-t-4 border-t-seagreen">
            <h2 className="text-xl font-bold text-deepblue mb-4">Standard Operating Procedure (SOP)</h2>
            <p className="text-muted mb-4">To minimize algorithmic variance, users must adhere to the following input guidelines:</p>
            <ul className="list-disc pl-5 space-y-2 text-sm text-muted">
              <li><strong>Lighting:</strong> Bright, even lighting. Avoid heavy shadows that distort the body outline.</li>
              <li><strong>Clothing:</strong> Form-fitting athletic wear. Baggy clothes will be calculated as solid body mass.</li>
              <li><strong>Positioning:</strong> Stand straight, facing the camera or at a clean 90-degree profile.</li>
              <li><strong>Framing:</strong> Ensure the entire body from head to toe is visible within the frame.</li>
            </ul>
          </GlassCard>

        </div>
      </div>
    </main>
  );
}
