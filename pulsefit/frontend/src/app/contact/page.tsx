import { GlassCard } from "@/components/ui/GlassCard";
import { Mail, Github, Download } from "lucide-react";

export default function Contact() {
  return (
    <main className="relative py-4 px-6 flex justify-center">
      <div className="max-w-6xl w-full relative z-10 space-y-8">
        
        {/* Header / Bio Card */}
        <GlassCard className="p-8">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-shrink-0">
              <div className="w-24 h-24 rounded-2xl bg-blue-100/50 flex items-center justify-center text-3xl font-black text-blue-500 border border-blue-200">
                PM
              </div>
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
              <a href="mailto:prashantkmishra30@gmail.com" className="w-full">
                <button className="w-full bg-[#1D4ED8] hover:bg-blue-800 text-white px-4 py-2 rounded-lg font-semibold text-sm flex items-center justify-center gap-2 transition-colors shadow-sm">
                  <Mail size={16} /> Contact me
                </button>
              </a>
              <a href="https://github.com/Prashant-kmishra" target="_blank" rel="noreferrer" className="w-full">
                <button className="w-full bg-white hover:bg-gray-50 text-slate-700 border border-slate-200 px-4 py-2 rounded-lg font-semibold text-sm flex items-center justify-center gap-2 transition-colors shadow-sm">
                  <Github size={16} /> GitHub
                </button>
              </a>
              <button className="w-full bg-white hover:bg-gray-50 text-slate-700 border border-slate-200 px-4 py-2 rounded-lg font-semibold text-sm flex items-center justify-center gap-2 transition-colors shadow-sm">
                <Download size={16} /> Save as PDF
              </button>
            </div>
          </div>
        </GlassCard>

        {/* Featured Work */}
        <div>
          <h2 className="text-lg font-bold text-slate-800 mb-4 px-2">Featured Work & Deep Learning Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <GlassCard className="p-8 md:col-span-2">
            <h2 className="text-lg font-bold text-slate-800 mb-1">Skills matrix</h2>
            <p className="text-sm text-slate-500 mb-8">Self-assessed proficiency, each one evidenced in my projects and internships.</p>
            
            <div className="space-y-6">
              <div>
                <div className="text-[10px] font-bold text-blue-500 uppercase tracking-widest mb-4">Machine Learning & Quant</div>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1">
                      <span>Python (Pandas, NumPy, Scikit)</span>
                      <span>95</span>
                    </div>
                    <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden border border-slate-200/50"><div className="bg-blue-500 h-1.5 rounded-full w-[95%]"></div></div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1">
                      <span>Ensembles (XGBoost, LightGBM, CatBoost)</span>
                      <span>92</span>
                    </div>
                    <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden border border-slate-200/50"><div className="bg-blue-500 h-1.5 rounded-full w-[92%]"></div></div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1">
                      <span>SHAP Explainability & Optuna</span>
                      <span>88</span>
                    </div>
                    <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden border border-slate-200/50"><div className="bg-blue-500 h-1.5 rounded-full w-[88%]"></div></div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1">
                      <span>Imbalance Handling (SMOTE, Class Weights)</span>
                      <span>85</span>
                    </div>
                    <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden border border-slate-200/50"><div className="bg-blue-500 h-1.5 rounded-full w-[85%]"></div></div>
                  </div>
                </div>
              </div>

              <div>
                <div className="text-[10px] font-bold text-fuchsia-500 uppercase tracking-widest mb-4 mt-8">Data Engineering & Analytics</div>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1">
                      <span>SQL & Window Functions</span>
                      <span>90</span>
                    </div>
                    <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden border border-slate-200/50"><div className="bg-fuchsia-500 h-1.5 rounded-full w-[90%]"></div></div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1">
                      <span>Power BI & Dashboarding</span>
                      <span>85</span>
                    </div>
                    <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden border border-slate-200/50"><div className="bg-fuchsia-500 h-1.5 rounded-full w-[85%]"></div></div>
                  </div>
                </div>
              </div>
            </div>
          </GlassCard>

          <GlassCard className="p-8">
            <h2 className="text-lg font-bold text-slate-800 mb-1">Competency profile</h2>
            <p className="text-sm text-slate-500 mb-8">Core differentiators and professional strengths.</p>
            
            <div className="bg-white border border-slate-100 rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-slate-800 text-sm mb-3">Strongest signal: Deep Modeling & Analytics</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                I don&#39;t just call <code>.predict()</code>. I engineer rigorous pipelines—from raw data extraction and missing value handling, to SMOTE class-imbalance resolution, Optuna hyperparameter tuning, and finally surfacing actionable insights through SHAP explainability and interactive dashboards.
              </p>
            </div>
          </GlassCard>
        </div>

      </div>
    </main>
  );
}
