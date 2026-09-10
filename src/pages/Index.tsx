import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PartnershipSection from "@/components/PartnershipSection";
// import FeaturesSection from "@/components/FeaturesSection";   // Removed from landing
// import TrainingSection from "@/components/TrainingSection";   // Removed from landing
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen" style={{ background: "var(--page-bg)" }}>
    <Navbar />
    <Hero />
    <PartnershipSection />
    {/* <FeaturesSection /> */}
    {/* <TrainingSection /> */}
    <Footer />
  </div>
);

export default Index;
