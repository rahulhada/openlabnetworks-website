import { BookOpen, Users, Microscope } from "lucide-react";

const TrainingSection = () => {
  return (
    <section className="py-24 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Training Programs
          </h2>
          <p className="text-xl text-primary font-medium mb-4">
            Elevate Your Networking Skills
          </p>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our comprehensive training programs cover the latest advancements in networking, 
            combining hands-on labs with personalized one-to-one live sessions to help you 
            build practical skills and excel in the field.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* For Students */}
          <div className="bg-card rounded-xl p-8 card-glow group">
            <div className="icon-box mb-6">
              <BookOpen className="text-primary" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">
              For Students
            </h3>
            <p className="text-primary font-medium text-sm mb-4">
              Build a Solid Networking Foundation
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Our tutorial section provides a comprehensive introduction to networking 
              fundamentals, equipping students with the knowledge and skills to excel 
              in the field.
            </p>
          </div>

          {/* For Researchers */}
          <div className="bg-card rounded-xl p-8 card-glow group">
            <div className="icon-box mb-6">
              <Microscope className="text-primary" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">
              For Researchers
            </h3>
            <p className="text-primary font-medium text-sm mb-4">
              Accelerate Your Networking Research
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Researchers can leverage our development ecosystem to spin up their own 
              testing environments for P4 architectures, accelerating their research 
              and innovation.
            </p>
          </div>

          {/* For Professionals */}
          <div className="bg-card rounded-xl p-8 card-glow group">
            <div className="icon-box mb-6">
              <Users className="text-primary" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">
              For Professionals
            </h3>
            <p className="text-primary font-medium text-sm mb-4">
              Simulate NGNs in Production
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Architect novel approaches guided by academic research. Test, verify and 
              incorporate the architecture that enhances your production systems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingSection;
