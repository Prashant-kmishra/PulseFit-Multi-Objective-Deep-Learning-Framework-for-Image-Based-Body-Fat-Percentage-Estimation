import Link from "next/link";
import { GlassCard } from "@/components/ui/GlassCard";
import { ArrowRight, Upload, Layers, Activity, FileText } from "lucide-react";

export default function Home() {
  return (
    <main className="relative flex flex-col items-center">


      {/* Hero */}
      <section className="flex-1 w-full max-w-5xl mx-auto px-6 py-20 flex flex-col items-center text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold text-dark tracking-tight mb-6">
          Point a camera at yourself. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-seagreen">
            Get AI-estimated body composition in 8 seconds.
          </span>
        </h1>
        <p className="text-xl text-muted max-w-2xl mb-12">
          A full CV pipeline: photo → silhouette segmentation → deep regression → clinically-validated formula.
        </p>
        
        <Link href="/predict">
          <button className="bg-primary hover:bg-deepblue text-white px-8 py-4 rounded-full font-bold text-lg flex items-center gap-2 transition-all shadow-[0_4px_14px_0_rgba(29,111,224,0.39)] hover:shadow-[0_6px_20px_rgba(29,111,224,0.23)] hover:-translate-y-1 cursor-pointer">
            Predict My Body Fat %
            <ArrowRight size={20} />
          </button>
        </Link>
      </section>

      {/* How it works */}
      <section className="w-full max-w-7xl mx-auto px-6 py-20 relative z-10">
        <h2 className="text-3xl font-bold text-center text-deepblue mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <GlassCard className="p-6 flex flex-col items-center text-center gap-4">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <Upload size={32} />
            </div>
            <h3 className="font-bold text-xl">1. Upload</h3>
            <p className="text-muted text-sm">Upload a full-body mirror selfie or photo.</p>
          </GlassCard>
          
          <GlassCard className="p-6 flex flex-col items-center text-center gap-4">
            <div className="w-16 h-16 rounded-full bg-seagreen/10 flex items-center justify-center text-seagreen">
              <Layers size={32} />
            </div>
            <h3 className="font-bold text-xl">2. Segment</h3>
            <p className="text-muted text-sm">DeepLabV3 extracts your clean silhouette.</p>
          </GlassCard>

          <GlassCard className="p-6 flex flex-col items-center text-center gap-4">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <Activity size={32} />
            </div>
            <h3 className="font-bold text-xl">3. Predict</h3>
            <p className="text-muted text-sm">EfficientNet regression estimates biometrics.</p>
          </GlassCard>

          <GlassCard className="p-6 flex flex-col items-center text-center gap-4">
            <div className="w-16 h-16 rounded-full bg-seagreen/10 flex items-center justify-center text-seagreen">
              <FileText size={32} />
            </div>
            <h3 className="font-bold text-xl">4. Analyze</h3>
            <p className="text-muted text-sm">Deurenberg formula calculates Body Fat %.</p>
          </GlassCard>
        </div>
      </section>

      {/* Validation */}
      <section className="w-full max-w-5xl mx-auto px-6 py-20 relative z-10">
        <GlassCard className="p-12 text-center">
          <h2 className="text-3xl font-bold text-deepblue mb-8">Why It&apos;s Accurate</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">±6.88 cm</div>
              <div className="text-muted">Height MAE</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-seagreen mb-2">±12.47 kg</div>
              <div className="text-muted">Weight MAE</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">±3.52</div>
              <div className="text-muted">BMI MAE</div>
            </div>
          </div>
          <p className="text-sm text-muted mt-8 opacity-70">
            * Validation metrics based on calibrated internal test set. See Explainability for details.
          </p>
        </GlassCard>
      </section>
    </main>
  );
}
