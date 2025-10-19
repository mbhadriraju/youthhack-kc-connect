import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code, Users, GraduationCap, ArrowRight } from "lucide-react";

const programs = [
  {
    icon: Code,
    title: "Hackathons",
    description: "Multi-hour coding competitions where students collaborate to build innovative projects, learn new technologies, and showcase their skills.",
    features: ["Team Building", "Real Projects", "Prizes & Recognition"],
    color: "primary",
  },
  {
    icon: GraduationCap,
    title: "Workshops",
    description: "Hands-on learning sessions covering everything from web development to AI, taught by experienced mentors and industry professionals.",
    features: ["Expert Instruction", "Practical Skills", "Certificates"],
    color: "accent",
  },
  {
    icon: Users,
    title: "Tutoring",
    description: "One-on-one and small group tutoring sessions where students get personalized help with coding challenges and computer science concepts.",
    features: ["Personalized Learning", "Flexible Schedule", "Peer Mentorship"],
    color: "primary-glow",
  },
];

const Programs = () => {
  return (
    <section className="py-24 px-6 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Programs</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Multiple ways to learn, grow, and connect with the tech community
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <Card 
                key={program.title}
                className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow hover:scale-105 animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg bg-gradient-${program.color === 'accent' ? 'accent' : 'primary'} flex items-center justify-center mb-4 shadow-glow`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-2xl">{program.title}</CardTitle>
                  <CardDescription className="text-base">
                    {program.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {program.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary-glow" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Programs;
