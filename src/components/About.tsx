import { Target, Heart, Rocket, Users } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Accessibility",
    description: "Making CS education available to students of all backgrounds",
  },
  {
    icon: Heart,
    title: "Community",
    description: "Building a supportive network of learners and mentors",
  },
  {
    icon: Rocket,
    title: "Innovation",
    description: "Encouraging creative problem-solving and new ideas",
  },
  {
    icon: Users,
    title: "Youth-Led",
    description: "Powered by students, for students",
  },
];

const About = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-background to-card">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold">
                About{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  YouthHackKC
                </span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We're a youth-led nonprofit dedicated to expanding access to computer science education for middle and high school students in the Kansas City metro area.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Through hackathons, workshops, and tutoring opportunities, we create hands-on experiences that help students of all backgrounds explore technology, build real-world skills, and connect with mentors who share their passion.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our mission is simple: make tech education accessible, engaging, and empowering for every student in Kansas City.
              </p>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary opacity-10 rounded-3xl blur-3xl" />
              <div className="relative bg-card border border-border rounded-3xl p-8 shadow-card">
                <div className="space-y-6">
                  <div className="text-center space-y-2">
                    <div className="text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                      Kansas City
                    </div>
                    <div className="text-muted-foreground">Metro Area</div>
                  </div>
                  <div className="h-px bg-border" />
                  <div className="text-center space-y-2">
                    <div className="text-2xl font-semibold text-foreground">
                      Making Tech Education Accessible
                    </div>
                    <div className="text-muted-foreground">
                      For Middle & High School Students
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-center">
              Our <span className="bg-gradient-accent bg-clip-text text-transparent">Values</span>
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div
                    key={value.title}
                    className="bg-card border border-border rounded-xl p-6 space-y-3 hover:border-primary/50 transition-all duration-300 hover:shadow-glow animate-slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary-glow" />
                    </div>
                    <h4 className="font-semibold text-lg">{value.title}</h4>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
