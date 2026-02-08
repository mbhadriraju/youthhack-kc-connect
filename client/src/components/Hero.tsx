import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Code2, Users, Lightbulb, ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-40 right-20 w-32 h-32 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in">

          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-heading font-bold tracking-tight">
              <span className="bg-primary bg-clip-text text-transparent block mb-2">YouthHackKC</span>
            </h1>
            <h2 className="text-3xl md:text-5xl font-heading font-medium text-foreground/90">
              Kansas City’s CS Nonprofit for K-12 students
            </h2>
          </div>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-body">
            Empowering the next generation of innovators through hackathons, workshops, and mentorship.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Link to="/support">
              <Button
                variant="hero"
                size="lg"
                className="group"
              >
                Support YHKC
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/about">
              <Button
                variant="outline"
                size="lg"
              >
                Learn More
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 border-t border-white/5 mt-16 bg-card/30 backdrop-blur-sm rounded-2xl p-8">
            <div className="space-y-2 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center justify-center gap-2 text-primary-glow">
                <Users className="w-8 h-8" />
              </div>
              <div className="text-4xl font-bold font-heading bg-primary bg-clip-text text-transparent">Over 60</div>
              <div className="text-muted-foreground font-body">Students Reached</div>
            </div>
            <div className="space-y-2 animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-center justify-center gap-2 text-accent">
                <Code2 className="w-8 h-8" />
              </div>
              <div className="text-4xl font-bold font-heading bg-accent bg-clip-text text-transparent">1</div>
              <div className="text-muted-foreground font-body">Hackathon & Counting</div>
            </div>
            <div className="space-y-2 animate-slide-up" style={{ animationDelay: '0.6s' }}>
              <div className="flex items-center justify-center gap-2 text-primary-glow">
                <Lightbulb className="w-8 h-8" />
              </div>
              <div className="text-4xl font-bold font-heading bg-primary bg-clip-text text-transparent">100%</div>
              <div className="text-muted-foreground font-body">Youth-Led</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
