import { GlassCard } from "@/components/ui/GlassCard";
import { Globe, User, Mail, FileText } from "lucide-react";

export default function Contact() {
  return (
    <main className="relative py-4 px-6 flex items-center justify-center min-h-[70vh]">
      <div className="max-w-2xl w-full relative z-10">
        <GlassCard className="p-10">
          <h1 className="text-4xl font-bold text-deepblue mb-2">[INSERT NAME]</h1>
          <h2 className="text-xl text-primary font-medium mb-6">ML Engineer · Computer Vision · Full-Stack</h2>
          
          <p className="text-muted mb-8 leading-relaxed">
            [INSERT SHORT PROFESSIONAL BIO: e.g. I build scalable machine learning systems and the interfaces that bring them to life. PulseFit is a demonstration of end-to-end CV pipelines deployed on the web.]
          </p>

          <div className="flex flex-col gap-4 mb-10">
            <a href="[INSERT GITHUB URL]" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-dark hover:text-primary transition-colors font-medium">
              <Globe size={20} /> GitHub
            </a>
            <a href="[INSERT LINKEDIN URL]" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-dark hover:text-primary transition-colors font-medium">
              <User size={20} /> LinkedIn
            </a>
            <a href="mailto:[INSERT EMAIL]" className="flex items-center gap-3 text-dark hover:text-primary transition-colors font-medium">
              <Mail size={20} /> [INSERT EMAIL]
            </a>
            <a href="[INSERT RESUME URL]" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-dark hover:text-primary transition-colors font-medium">
              <FileText size={20} /> View Resume
            </a>
          </div>

          <div className="border-t border-muted/20 pt-6">
            <h3 className="text-sm font-bold text-muted mb-3 uppercase tracking-wider">Built With</h3>
            <div className="flex flex-wrap gap-2">
              {['PyTorch', 'EfficientNet-B0', 'DeepLabV3', 'FastAPI', 'Next.js', 'Tailwind', 'Framer Motion'].map(tech => (
                <span key={tech} className="px-3 py-1 bg-white/50 border border-white/50 rounded-full text-xs font-medium text-deepblue shadow-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </GlassCard>
      </div>
    </main>
  );
}
