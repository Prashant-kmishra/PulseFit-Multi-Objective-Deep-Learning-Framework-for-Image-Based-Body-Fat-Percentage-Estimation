import { cn } from "@/lib/utils"

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function GlassCard({ children, className, ...props }: GlassCardProps) {
  return (
    <div 
      className={cn(
        "glass-panel transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-glass-hover)]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
