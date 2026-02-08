import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Brain, Rocket, Trophy, Briefcase, GraduationCap } from "lucide-react";

const About = () => {
    return (
        <div className="container mx-auto px-6 py-12 space-y-24">
            {/* Mission Section */}
            <section className="text-center max-w-4xl mx-auto space-y-8 animate-fade-in">
                <h1 className="text-5xl md:text-7xl font-heading font-bold">
                    Our <span className="bg-primary bg-clip-text text-transparent">Mission</span>
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground font-body leading-relaxed">
                    YouthHackKC goes beyond learning to code, focusing more on learning to build impactful solutions to meaningful problems. We are bridging the gap in computer science education for K-12 students in Kansas City.
                </p>
                <p className="text-l md:text-xl text-muted-foreground font-body leading-relaxed">
                    Madhava and Smayan noticed that nearly every single hackathon in the KCMO area was limited to college students, leaving a huge gap in the market for high schoolers looking to explore computer science and innovation. Madhava and Smayan seek to bridge that gap through YouthHackKC.
                </p>
            </section>

            {/* Founders Section */}
            <section className="space-y-12">
                <h2 className="text-4xl md:text-5xl font-heading font-bold text-center">
                    Meet the <span className="bg-accent bg-clip-text text-transparent">Founders</span>
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Madhava */}
                    <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-glow group animate-slide-up" style={{ animationDelay: '0.2s' }}>
                        <CardContent className="p-8 space-y-6">
                            <div className="space-y-2">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="p-2 rounded-full bg-primary/10 text-primary-glow">
                                        <Rocket className="w-6 h-6" />
                                    </div>
                                    <Badge variant="outline" className="text-primary-glow border-primary/20">Cofounder & President</Badge>
                                </div>
                                <h3 className="text-3xl font-heading font-bold">Madhava Bhadriraju</h3>
                            </div>

                            <p className="text-muted-foreground leading-relaxed">
                                An experienced developer and researcher, Madhava has seen firsthand the barriers to entry for hackathons. He is currently conducting astrophysics research leveraging Deep Learning and is cofounding a startup using his coding skills.
                            </p>

                            <div className="space-y-3">
                                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                                    <Trophy className="w-4 h-4 text-accent" />
                                    <span>KU High School Design Competition & USACO</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                                    <Brain className="w-4 h-4 text-accent" />
                                    <span>Data Science & Deep Learning Research</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                                    <Briefcase className="w-4 h-4 text-accent" />
                                    <span>Working with YC-backed company</span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Smayan */}
                    <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-glow group animate-slide-up" style={{ animationDelay: '0.4s' }}>
                        <CardContent className="p-8 space-y-6">
                            <div className="space-y-2">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="p-2 rounded-full bg-primary/10 text-primary-glow">
                                        <Code className="w-6 h-6" />
                                    </div>
                                    <Badge variant="outline" className="text-primary-glow border-primary/20">Cofounder & Copresident</Badge>
                                </div>
                                <h3 className="text-3xl font-heading font-bold">Smayan Khot</h3>
                            </div>

                            <p className="text-muted-foreground leading-relaxed">
                                An aspiring engineer with extensive research experience. Smayan identified a lack of true CS opportunities in the KCMO area and sought to build YouthHackKC to fill that gap.
                            </p>

                            <div className="space-y-3">
                                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                                    <Trophy className="w-4 h-4 text-accent" />
                                    <span>KU High School Design Competition</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                                    <GraduationCap className="w-4 h-4 text-accent" />
                                    <span>Science Olympiad Member</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                                    <Rocket className="w-4 h-4 text-accent" />
                                    <span>Blue Valley CAPS FRC Team</span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </section>
        </div>
    );
};

export default About;
