import { Terminal, Lightbulb, Network } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Terminal,
      title: "Browser-Based Labs",
      description:
        "No setup required. Spin up complex environments in seconds directly from your browser.",
    },
    {
      icon: Lightbulb,
      title: "Project-Based Learning",
      description:
        "Don't just watch tutorials. Build real infrastructure and solve production incidents.",
    },
    {
      icon: Network,
      title: "AI-Ready Networks",
      description:
        "Learn to design and deploy networks optimized for AI workloads and next-gen architectures.",
    },
  ];

  return (
    <section className="py-24 bg-secondary/30 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose Us?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We don't teach you syntax; we teach you how to think like a Senior Network Engineer.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-8 card-glow"
            >
              <div className="icon-box mb-6">
                <feature.icon className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
