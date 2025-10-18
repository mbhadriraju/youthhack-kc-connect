import Hero from "@/components/Hero";
import Programs from "@/components/Programs";
import About from "@/components/About";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Programs />
      <About />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
