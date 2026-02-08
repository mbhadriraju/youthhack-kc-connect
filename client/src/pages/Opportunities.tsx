import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Calendar, MapPin, Trophy, Users, Star, ArrowRight } from "lucide-react";
import { useEffect } from "react";

const Opportunities = () => {
    const scrollToTutoring = () => {
        const element = document.getElementById('tutoring-signup');
        element?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://assets.calendly.com/assets/external/widget.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div className="container mx-auto px-6 py-12 space-y-20">
            <div className="text-center space-y-4 animate-fade-in">
                <h1 className="text-5xl md:text-7xl font-heading font-bold">
                    Opportunities & <span className="bg-primary bg-clip-text text-transparent">Events</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-body">
                    Join us for hackathons, workshops, and personalized tutoring sessions.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Hackathon W26 (Past) */}
                <Card className="bg-card/50 backdrop-blur-sm border-white/10 overflow-hidden flex flex-col hover:border-primary/50 transition-all duration-300 hover:shadow-glow group animate-slide-up" style={{ animationDelay: '0.2s' }}>
                    <div className="aspect-video relative overflow-hidden">
                        <img
                            src="../assets/Hackathon 1.png"
                            alt="YouthHackKC W26"
                            className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-md text-white text-xs px-2 py-1 rounded-full">
                            Completed
                        </div>
                    </div>
                    <CardHeader>
                        <CardTitle className="text-2xl font-heading">YouthHackKC W26</CardTitle>
                        <CardDescription className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" /> Jan 10th, 2026
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4 flex-grow">
                        <p className="text-muted-foreground text-sm font-body">
                            Our winter hackathon at Johnson County Corinth Library brought together students for a day of coding, learning, and building innovative projects. <br></br><br></br>Congrats to "The People" for winning 1st place!
                        </p>
                    </CardContent>
                </Card>

                {/* Tutoring (Ongoing) */}
                <Card className="bg-card/50 backdrop-blur-sm border-white/10 overflow-hidden flex flex-col hover:border-accent/50 transition-all duration-300 hover:shadow-glow group animate-slide-up" style={{ animationDelay: '0.4s' }}>
                    <div className="aspect-video relative overflow-hidden bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                        <Users className="w-16 h-16 text-accent" />
                    </div>
                    <CardHeader>
                        <CardTitle className="text-2xl font-heading">1-on-1 Tutoring</CardTitle>
                        <CardDescription className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" /> Rolling Admissions
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4 flex-grow">
                        <p className="text-muted-foreground text-sm font-body">
                            Get personalized help with coding projects, AP CS prep, or learning new technologies from experienced mentors.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            <span className="text-xs bg-white/5 px-2 py-1 rounded-full">Python</span>
                            <span className="text-xs bg-white/5 px-2 py-1 rounded-full">Web Dev</span>
                            <span className="text-xs bg-white/5 px-2 py-1 rounded-full">Java</span>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button onClick={scrollToTutoring} className="w-full group-hover:bg-accent group-hover:text-white transition-colors">
                            Book a Session
                        </Button>
                    </CardFooter>
                </Card>

                {/* Hackathon X26 (Upcoming) */}
                <Card className="bg-card/50 backdrop-blur-sm border-primary/20 overflow-hidden flex flex-col hover:border-primary transition-all duration-300 hover:shadow-glow group animate-slide-up relative" style={{ animationDelay: '0.6s' }}>
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent opacity-20 group-hover:opacity-40 blur transition duration-500"></div>
                    <div className="relative h-full flex flex-col bg-card/90 backdrop-blur-sm">
                        <div className="aspect-video relative overflow-hidden bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                            <Trophy className="w-16 h-16 text-primary-glow animate-pulse" />
                            <div className="absolute top-2 right-2 bg-primary text-white text-xs px-2 py-1 rounded-full font-bold">
                                Upcoming
                            </div>
                        </div>
                        <CardHeader>
                            <CardTitle className="text-2xl font-heading">YouthHackKC X26</CardTitle>
                            <CardDescription className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" /> March/April 2026
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4 flex-grow">
                            <p className="text-muted-foreground text-sm font-body">
                                Our biggest event yet! Featuring bigger prizes, industry judges, and hands-on workshops.
                            </p>
                            <div className="space-y-2">
                                <div className="flex items-center gap-2 text-sm text-primary-glow font-medium">
                                    <Trophy className="w-4 h-4" />
                                    <span>&gt;$500 in Prizes</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-foreground/80">
                                    <Star className="w-4 h-4" />
                                    <span>Industry Experts & Judges</span>
                                </div>
                            </div>
                        </CardContent>
                        {/* <CardFooter>
                            <Button variant="default" className="w-full font-bold">
                                Stay Tuned
                            </Button>
                        </CardFooter> */}
                    </div>
                </Card>
            </div>

            {/* Tutoring Signup Section */}
            <div id="tutoring-signup" className="pt-20 border-t border-white/10 animate-fade-in">
                <div className="max-w-4xl mx-auto bg-card/30 backdrop-blur-md rounded-2xl p-8 border border-white/5">
                    <div className="text-center mb-8">
                    <h2 className="text-3xl font-heading font-bold mb-4">Book a Tutoring Session</h2>
                    <p className="text-muted-foreground">
                        Schedule your free initial consultation with one of our mentors.
                    </p>
                    </div>

                    {/* Calendly Inline Widget */}
                    <div
                    className="calendly-inline-widget w-full rounded-xl border border-white/10"
                    data-url="https://calendly.com/youthhackkc/tutoring-session"
                    style={{ minWidth: "320px", height: "700px" }}
                    ></div>
                </div>
                <div className="flex justify-center mt-4">
                    <a
                        href="https://calendly.com/youthhackkc/tutoring-session"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition w-1/2 text-center"
                    >
                        Open Tutoring Registration
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Opportunities;
