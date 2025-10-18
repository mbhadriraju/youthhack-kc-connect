import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, ArrowRight } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const CallToAction = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thanks for your interest!",
      description: "We'll be in touch soon with upcoming opportunities.",
    });
    setEmail("");
  };

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-card to-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-primary rounded-3xl p-12 shadow-glow border border-primary-glow/20 space-y-8 text-center animate-fade-in">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Ready to Start Your Journey?
              </h2>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                Join hundreds of students in Kansas City who are learning to code, building projects, and preparing for tech careers.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-white/40"
                  />
                </div>
                <Button
                  type="submit"
                  variant="accent"
                  size="lg"
                  className="whitespace-nowrap group"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </form>

            <div className="flex flex-wrap justify-center gap-8 pt-8 border-t border-white/10">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">Free</div>
                <div className="text-white/80 text-sm">All Events</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">All Levels</div>
                <div className="text-white/80 text-sm">Welcome</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">KC Metro</div>
                <div className="text-white/80 text-sm">Based</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
