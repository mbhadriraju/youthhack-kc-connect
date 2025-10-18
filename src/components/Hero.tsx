import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, Users, Lightbulb } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-40 right-20 w-32 h-32 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm text-primary-glow mb-4">
            <Code2 className="w-4 h-4" />
            <span>Empowering Kansas City's Future Innovators</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Building the Next Generation of{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Tech Leaders
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Youth-led, community-driven. We're expanding access to computer science education for middle and high school students across Kansas City.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Button variant="hero" size="lg" className="group">
              Get Involved
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16">
            <div className="space-y-2 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center justify-center gap-2 text-primary-glow">
                <Users className="w-6 h-6" />
              </div>
              <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">500+</div>
              <div className="text-muted-foreground">Students Reached</div>
            </div>
            <div className="space-y-2 animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-center justify-center gap-2 text-accent">
                <Code2 className="w-6 h-6" />
              </div>
              <div className="text-4xl font-bold bg-gradient-accent bg-clip-text text-transparent">15+</div>
              <div className="text-muted-foreground">Events Hosted</div>
            </div>
            <div className="space-y-2 animate-slide-up" style={{ animationDelay: '0.6s' }}>
              <div className="flex items-center justify-center gap-2 text-primary-glow">
                <Lightbulb className="w-6 h-6" />
              </div>
              <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">100%</div>
              <div className="text-muted-foreground">Youth-Led</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
