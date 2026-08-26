"use client";

import { useState } from "react";
import { GlassCard } from "@/components/ui/GlassCard";
import { Mail, Globe, Download, X } from "lucide-react";

export default function Contact() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <main className="relative py-4 px-6 flex justify-center min-h-screen">
      <div className="max-w-6xl w-full relative z-10 space-y-8">
        
        {/* Header / Bio Card */}
        <GlassCard className="p-8">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-shrink-0">
              <img 
                src="/profile.jpg" 
                alt="Prashant Mishra" 
                className="w-24 h-24 rounded-2xl object-cover border-4 border-white shadow-md bg-white"
              />
            </div>
            
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="px-2.5 py-1 text-[10px] font-bold tracking-wider text-emerald-700 bg-emerald-50 rounded-md border border-emerald-200">OPEN TO OPPORTUNITIES</span>
                <span className="px-2.5 py-1 text-[10px] font-bold tracking-wider text-blue-700 bg-blue-50 rounded-md border border-blue-200">SEBI CERTIFIED</span>
                <span className="px-2.5 py-1 text-[10px] font-bold tracking-wider text-fuchsia-700 bg-fuchsia-50 rounded-md border border-fuchsia-200">18K+ YOUTUBE</span>
              </div>
              
              <h1 className="text-3xl font-bold text-slate-800 mb-1">Prashant Mishra</h1>
              <p className="text-sm font-medium text-slate-600 mb-4">
                Data Analyst / Quant Analyst / Data Scientist — Specializing in predictive modeling, statistical analysis, and interactive dashboards.
              </p>
              
              <p className="text-sm text-slate-500 mb-6 max-w-3xl leading-relaxed">
                B.Tech Production & Industrial Engineering, Delhi Technological University. Focused on rigorous feature engineering, model ensembling, hyperparameter tuning, SHAP explainability, and extracting actionable business insights.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-xs border-t border-slate-200 pt-6">
                <div>
                  <div className="font-bold text-slate-400 mb-1 uppercase tracking-wider text-[10px]">Target Roles</div>
                  <div className="text-slate-700 font-medium leading-relaxed">Data Analyst • Business Analyst • Product Analyst • Quant Analyst • Data Scientist • ML Engineer</div>
                </div>
                <div>
                  <div className="font-bold text-slate-400 mb-1 uppercase tracking-wider text-[10px]">Core Stack</div>
                  <div className="text-slate-700 font-medium leading-relaxed">Python • XGBoost / LightGBM • SQL • Power BI</div>
                </div>
                <div>
                  <div className="font-bold text-slate-400 mb-1 uppercase tracking-wider text-[10px]">Education</div>
                  <div className="text-slate-700 font-medium leading-relaxed">DTU, B.Tech PIE (CGPA: 7.7)</div>
                </div>
                <div>
                  <div className="font-bold text-slate-400 mb-1 uppercase tracking-wider text-[10px]">Availability</div>
                  <div className="text-slate-700 font-medium leading-relaxed">Open to full-time & internships</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3 min-w-[160px]">
              <button 
                onClick={() => setIsContactOpen(true)}
                className="w-full bg-[#1D4ED8] hover:bg-blue-800 text-white px-4 py-2 rounded-lg font-semibold text-sm flex items-center justify-center gap-2 transition-colors shadow-sm"
              >
                <Mail size={16} /> Contact me
              </button>
              <a href="https://github.com/Prashant-kmishra" target="_blank" rel="noreferrer" className="w-full">
                <button className="w-full bg-white hover:bg-gray-50 text-slate-700 border border-slate-200 px-4 py-2 rounded-lg font-semibold text-sm flex items-center justify-center gap-2 transition-colors shadow-sm">
                  <Globe size={16} /> GitHub
                </button>
              </a>
              <a href="/Prashant_Mishra_AIPML.pdf" download className="w-full">
                <button className="w-full bg-white hover:bg-gray-50 text-slate-700 border border-slate-200 px-4 py-2 rounded-lg font-semibold text-sm flex items-center justify-center gap-2 transition-colors shadow-sm">
                  <Download size={16} /> Save as PDF
                </button>
              </a>
            </div>
          </div>
        </GlassCard>

        {/* Featured Work */}
        <div>
          <h2 className="text-lg font-bold text-slate-800 mb-4 px-2">Featured Work & Deep Learning Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <GlassCard className="p-6 flex flex-col bg-white/60">
              <div className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest mb-2">Computer Vision & AI</div>
              <h3 className="text-lg font-bold text-slate-800 mb-3">PulseFit Body Composition AI</h3>
              <p className="text-sm text-slate-600 mb-6 flex-1">
                Engineered an end-to-end computer vision pipeline estimating clinical body fat percentage from 2D images. Implemented custom SquarePad transformations and Ridge calibration to mitigate dimensionality loss. Deployed via FastAPI and Next.js.
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                <span className="px-2 py-1 bg-white text-slate-500 text-xs rounded font-medium border border-slate-200 shadow-sm">PyTorch / CV</span>
                <span className="px-2 py-1 bg-white text-slate-500 text-xs rounded font-medium border border-slate-200 shadow-sm">FastAPI</span>
                <span className="px-2 py-1 bg-white text-slate-500 text-xs rounded font-medium border border-slate-200 shadow-sm">Next.js</span>
              </div>
            </GlassCard>

            <GlassCard className="p-6 flex flex-col bg-white/60">
              <div className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-2">Deep Learning & Quant</div>
              <h3 className="text-lg font-bold text-slate-800 mb-3">NIFTY 100 Alpha Engine</h3>
              <p className="text-sm text-slate-600 mb-6 flex-1">
                Built a custom PyTorch Multi-Layer Perceptron (QuantMLP) trained on cross-sectional equity features. Integrated Entity Embeddings for categorical tickers and automated the live inference pipeline on Vercel/Next.js.
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                <span className="px-2 py-1 bg-white text-slate-500 text-xs rounded font-medium border border-slate-200 shadow-sm">PyTorch</span>
                <span className="px-2 py-1 bg-white text-slate-500 text-xs rounded font-medium border border-slate-200 shadow-sm">Deep Learning</span>
                <span className="px-2 py-1 bg-white text-slate-500 text-xs rounded font-medium border border-slate-200 shadow-sm">Next.js</span>
              </div>
            </GlassCard>

            <GlassCard className="p-6 flex flex-col bg-white/60">
              <div className="text-[10px] font-bold text-pink-500 uppercase tracking-widest mb-2">Machine Learning</div>
              <h3 className="text-lg font-bold text-slate-800 mb-3">Sierra Finance Credit Risk</h3>
              <p className="text-sm text-slate-600 mb-6 flex-1">
                Developed a soft voting ensemble model (CatBoost + XGBoost + LightGBM) on 50,000+ records achieving 98.8% ROC-AUC. Tuned via Optuna Bayesian optimization and resolved class imbalance with SMOTE-Tomek.
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                <span className="px-2 py-1 bg-white text-slate-500 text-xs rounded font-medium border border-slate-200 shadow-sm">Ensembles</span>
                <span className="px-2 py-1 bg-white text-slate-500 text-xs rounded font-medium border border-slate-200 shadow-sm">Optuna</span>
                <span className="px-2 py-1 bg-white text-slate-500 text-xs rounded font-medium border border-slate-200 shadow-sm">SMOTE</span>
              </div>
            </GlassCard>

            <GlassCard className="p-6 flex flex-col bg-white/60">
              <div className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest mb-2">AI & Explainability</div>
              <h3 className="text-lg font-bold text-slate-800 mb-3">Pulse Health AI Engine</h3>
              <p className="text-sm text-slate-600 mb-6 flex-1">
                Built a segmented insurance premium prediction engine using stacked ensembles (XGBoost, Random Forest, Ridge meta-model). Engineered composite risk scores and deployed to Streamlit with interactive SHAP explainability.
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                <span className="px-2 py-1 bg-white text-slate-500 text-xs rounded font-medium border border-slate-200 shadow-sm">Ensembles</span>
                <span className="px-2 py-1 bg-white text-slate-500 text-xs rounded font-medium border border-slate-200 shadow-sm">SHAP</span>
                <span className="px-2 py-1 bg-white text-slate-500 text-xs rounded font-medium border border-slate-200 shadow-sm">Streamlit</span>
              </div>
            </GlassCard>
          </div>
        </div>

        {/* Bottom Section (Skills & Competency) */}
        <div>
          <GlassCard className="p-8">
            <h2 className="text-lg font-bold text-slate-800 mb-1">Technical Skills</h2>
            <p className="text-sm text-slate-500 mb-8">Comprehensive skill set evidenced across projects and professional experience.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <div className="text-[10px] font-bold text-blue-500 uppercase tracking-widest mb-6">Machine Learning & Programming</div>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1">
                      <span>Python (Pandas, NumPy, Scikit, XGBoost, LightGBM, SHAP, Optuna)</span>
                      <span>95</span>
                    </div>
                    <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden border border-slate-200/50"><div className="bg-blue-500 h-1.5 rounded-full w-[95%]"></div></div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1">
                      <span>Machine Learning (Ensembles, SMOTE, Hyperparameter Tuning)</span>
                      <span>92</span>
                    </div>
                    <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden border border-slate-200/50"><div className="bg-blue-500 h-1.5 rounded-full w-[92%]"></div></div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1">
                      <span>Statistics & Modelling (A/B Testing, Time-Series, WOE/IV)</span>
                      <span>88</span>
                    </div>
                    <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden border border-slate-200/50"><div className="bg-blue-500 h-1.5 rounded-full w-[88%]"></div></div>
                  </div>
                </div>
              </div>

              <div>
                <div className="text-[10px] font-bold text-fuchsia-500 uppercase tracking-widest mb-6">Data Engineering & Analytics</div>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1">
                      <span>Databases: SQL (Aggregations, WINDOWS, Subqueries)</span>
                      <span>90</span>
                    </div>
                    <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden border border-slate-200/50"><div className="bg-fuchsia-500 h-1.5 rounded-full w-[90%]"></div></div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1">
                      <span>Power BI & Excel (Dashboards, VLOOKUP, Data Cleaning)</span>
                      <span>88</span>
                    </div>
                    <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden border border-slate-200/50"><div className="bg-fuchsia-500 h-1.5 rounded-full w-[88%]"></div></div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1">
                      <span>Web Analytics (GA4, Google Search Console, Shopify)</span>
                      <span>85</span>
                    </div>
                    <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden border border-slate-200/50"><div className="bg-fuchsia-500 h-1.5 rounded-full w-[85%]"></div></div>
                  </div>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>

      </div>

      {/* Let's Connect Modal */}
      {isContactOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
            onClick={() => setIsContactOpen(false)}
          ></div>
          <div className="relative bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl animate-in fade-in zoom-in-95 duration-200">
            <button 
              onClick={() => setIsContactOpen(false)}
              className="absolute top-6 right-6 text-slate-400 hover:text-slate-600 transition-colors"
            >
              <X size={20} />
            </button>
            
            <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center mb-6 shadow-sm">
              <Mail size={24} />
            </div>
            
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Let's connect</h2>
            <p className="text-slate-500 text-sm mb-8 leading-relaxed">
              Feel free to reach out for roles in data science, analytics, or quantitative finance.
            </p>

            <div className="space-y-4">
              <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-[0_2px_10px_rgba(0,0,0,0.04)] flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 shrink-0">
                  <Mail size={16} />
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">Email</div>
                  <div className="text-sm font-semibold text-slate-800 truncate select-all">prashantkmishra.work@gmail.com</div>
                </div>
              </div>
              
              <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-[0_2px_10px_rgba(0,0,0,0.04)] flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </div>
                <div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">Phone</div>
                  <div className="text-sm font-semibold text-slate-800 select-all">+91 9354221953</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
