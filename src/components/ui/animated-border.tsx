import { cn } from "@/lib/utils";

interface AnimatedBorderProps {
  children: React.ReactNode;
  className?: string;
  isPopular?: boolean;
}

export function AnimatedBorder({ children, className, isPopular }: AnimatedBorderProps) {
  return (
    <div className={cn("group relative rounded-xl", className)}>
      {/* Base border */}
      <div className={cn(
        "absolute -inset-[1px] rounded-xl border transition-colors",
        isPopular ? "border-primary" : "border-border"
      )} />
      
      {/* Animated gradient border */}
      <div className="absolute -inset-[1px] rounded-xl bg-gradient-to-tr from-purple-500 via-purple-400 to-pink-500 opacity-0 blur-sm transition-all duration-500 group-hover:opacity-100 group-hover:blur-md" />
      
      {/* Animated line border */}
      <div className="absolute -inset-[1px] rounded-xl overflow-hidden">
        <div className="absolute inset-[-2px] bg-transparent">
          {/* Bottom to right line */}
          <div 
            className="absolute bottom-0 left-0 h-[2px] w-[200%] bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-0 group-hover:opacity-100" 
            style={{ 
              animation: 'slide-right 1s ease-in-out forwards',
              transform: 'translateX(-100%)',
            }}
          />
          {/* Right to top line */}
          <div 
            className="absolute right-0 bottom-0 h-[200%] w-[2px] bg-gradient-to-t from-transparent via-purple-500 to-transparent opacity-0 group-hover:opacity-100" 
            style={{ 
              animation: 'slide-up 1s ease-in-out forwards',
              transform: 'translateY(100%)',
              animationDelay: '0.5s'
            }}
          />
        </div>
      </div>
      
      {/* Content */}
      <div className="relative h-full rounded-xl bg-background">
        {children}
      </div>
    </div>
  );
} 