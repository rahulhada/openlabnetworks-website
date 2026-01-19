import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrainingSection from "@/components/TrainingSection";
import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <TrainingSection />
      <FeaturesSection />
      <Footer />
    </div>
  );
};

export default Index;
