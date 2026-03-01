import { ArrowRight, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center grid-background overflow-hidden">
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 blur-[120px] rounded-full" />
      
      <div className="container mx-auto px-6 py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Status indicator */}
          <div className="animate-fade-up mb-8 flex justify-center">
            <div className="status-indicator">
              SYSTEM STATUS: WORK IN-PROGRESS
            </div>
          </div>

          {/* Main heading */}
          <h1 className="animate-fade-up-delay-1 text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
            Cloud-Native Network Infrastructure {" "} 
            <span className="text-primary glow-text">Intelligently Accelerated. AI-Ready.</span>
          </h1>

          {/* Subheading */}
          <p className="animate-fade-up-delay-2 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
            Empower network accelarators to foster ready to plug-in a cloud-native platform for driving AI workload innovation.
          </p>

          {/* CTA Buttons */}
          <div className="animate-fade-up-delay-3 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gap-2 text-base px-8">
              Innovation Sandbox
              <ArrowRight size={18} />
            </Button>
            <Button variant="outline" size="lg" className="gap-2 text-base px-8">
              <Terminal size={18} />
              Live Playground
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
