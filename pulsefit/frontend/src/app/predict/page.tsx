"use client";

import { useState } from "react";
import { useDropzone } from "react-dropzone";
import { GlassCard } from "@/components/ui/GlassCard";
import Link from "next/link";
import { ArrowLeft, Loader2, Image as ImageIcon } from "lucide-react";

export default function Predict() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [age, setAge] = useState<number>(25);
  const [gender, setGender] = useState<string>("Male");
  
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: { "image/*": [] },
    maxFiles: 1,
    onDrop: (acceptedFiles) => {
      const selected = acceptedFiles[0];
      setFile(selected);
      setPreview(URL.createObjectURL(selected));
    },
  });

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!file) {
      setError("Please upload an image.");
      return;
    }
    if (age < 18 || age > 90) {
      setError("Age must be between 18 and 90 inclusive.");
      return;
    }

    setLoading(true);
    const formData = new FormData();
    formData.append("image", file);
    formData.append("age", age.toString());
    formData.append("gender", gender);

    try {
      const res = await fetch("/api/predict", {
        method: "POST",
        body: formData,
      });
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.detail || "Prediction failed");
      }
      const data = await res.json();
      setResult(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="relative py-4 px-6 flex justify-center">
      <div className="max-w-4xl w-full relative z-10">
        
        <h1 className="text-4xl font-black tracking-tight text-deepblue mb-8">Analyze Body Composition</h1>

        {!result ? (
          <GlassCard className="p-8">
            <form onSubmit={onSubmit} className="flex flex-col gap-6">
              
              <div className="bg-white/40 p-4 rounded-2xl border border-white/50 mb-2">
                <h3 className="font-bold text-deepblue mb-3 text-center">Photo Guidelines</h3>
                <img src="/upload-guide.png" alt="Upload guide showing correct and incorrect photos" className="w-full rounded-xl shadow-sm border border-white/30" />
              </div>

              <div 
                {...getRootProps()} 
                className={`border-2 border-dashed rounded-2xl p-10 flex flex-col items-center justify-center text-center cursor-pointer transition-colors ${
                  isDragActive ? "border-primary bg-primary/5" : "border-muted/30 hover:border-primary/50"
                }`}
              >
                <input {...getInputProps()} />
                {preview ? (
                  <img src={preview} alt="Preview" className="h-64 object-contain rounded-lg shadow-md" />
                ) : (
                  <>
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                      <ImageIcon size={32} />
                    </div>
                    <p className="text-lg font-medium">Drag & drop your photo here</p>
                    <p className="text-muted text-sm mt-2">Full-body mirror photo, good lighting, form-fitting clothing works best.</p>
                    <p className="text-red-500/80 text-xs mt-2 font-bold">WARNING: Avoid stretched/cropped photos — distorted proportions distort the prediction.</p>
                  </>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="font-semibold text-sm">Age</label>
                  <input 
                    type="number" 
                    value={age} 
                    onChange={e => setAge(parseInt(e.target.value))}
                    className="p-3 rounded-xl bg-white/50 border border-white/40 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-semibold text-sm">Gender</label>
                  <select 
                    value={gender} 
                    onChange={e => setGender(e.target.value)}
                    className="p-3 rounded-xl bg-white/50 border border-white/40 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
              </div>

              {error && <div className="text-red-500 bg-red-500/10 p-4 rounded-xl text-sm">{error}</div>}

              <button 
                type="submit" 
                disabled={loading}
                className="bg-primary hover:bg-deepblue text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? <Loader2 className="animate-spin" /> : "Run Pipeline"}
              </button>
            </form>
          </GlassCard>
        ) : (
          <div className="flex flex-col gap-8">
            <GlassCard className="p-8">
              <h2 className="text-2xl font-bold mb-6">Results Dashboard</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col items-center justify-center p-6 bg-white/40 rounded-2xl border border-white/30">
                  <div className="text-6xl font-black font-mono text-primary mb-2">
                    {result.metrics.body_fat_pct}%
                  </div>
                  <div className="text-lg font-bold text-deepblue">Body Fat</div>
                  <div className="inline-block mt-2 px-3 py-1 rounded-full text-xs font-bold bg-primary/10 text-primary">
                    {result.metrics.body_fat_category}
                  </div>
                </div>

                <div className="flex flex-col items-center justify-center p-6 bg-white/40 rounded-2xl border border-white/30">
                  <div className="text-6xl font-black font-mono text-seagreen mb-2">
                    {result.metrics.bmi}
                  </div>
                  <div className="text-lg font-bold text-deepblue">BMI</div>
                  <div className="inline-block mt-2 px-3 py-1 rounded-full text-xs font-bold bg-seagreen/10 text-seagreen">
                    {result.metrics.bmi_category}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="p-4 bg-white/40 rounded-xl text-center">
                  <div className="text-sm text-muted">Height</div>
                  <div className="font-mono text-xl font-bold">{result.metrics.height_cm} cm</div>
                </div>
                <div className="p-4 bg-white/40 rounded-xl text-center">
                  <div className="text-sm text-muted">Weight</div>
                  <div className="font-mono text-xl font-bold">{result.metrics.weight_kg} kg</div>
                </div>
              </div>
            </GlassCard>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <GlassCard className="p-8">
                <h3 className="text-xl font-bold mb-4">Scanned Photo</h3>
                <img 
                  src={`data:image/jpeg;base64,${result.silhouette_base64}`} 
                  alt="Scanned Photo" 
                  className="w-full rounded-lg shadow-sm bg-black/5 object-contain max-h-[500px]"
                />
              </GlassCard>

              <GlassCard className="p-8">
                <h3 className="text-xl font-bold mb-4">Recommendations</h3>
                <p className="text-sm text-muted mb-4">{result.recommendation.summary}</p>
                
                <div className="mb-4">
                  <h4 className="font-bold text-sm text-deepblue mb-2">Diet</h4>
                  <ul className="list-disc pl-5 text-sm text-dark/80 space-y-1">
                    {result.recommendation.diet.map((d: string, i: number) => <li key={i}>{d}</li>)}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-bold text-sm text-deepblue mb-2">Exercise</h4>
                  <ul className="list-disc pl-5 text-sm text-dark/80 space-y-1">
                    {result.recommendation.exercise.map((e: string, i: number) => <li key={i}>{e}</li>)}
                  </ul>
                </div>

                <div className="text-xs text-muted italic border-t border-white/30 pt-4">
                  {result.recommendation.disclaimer}
                </div>
              </GlassCard>
            </div>

            <div className="flex justify-center mt-4">
              <Link href="/explainability">
                <button className="bg-transparent border border-primary text-primary hover:bg-primary/5 px-6 py-3 rounded-full font-bold transition-all cursor-pointer">
                  See how this prediction was made
                </button>
              </Link>
              <button 
                onClick={() => setResult(null)} 
                className="ml-4 bg-muted/10 text-muted hover:bg-muted/20 px-6 py-3 rounded-full font-bold transition-all cursor-pointer"
              >
                New Prediction
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
