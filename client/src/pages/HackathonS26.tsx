import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, Building2, ChefHat, Gamepad2, HeartPulse, Lightbulb, Network, Trophy } from "lucide-react";

const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSeS4aWrOQjQUEACrqcuovwTY-zl1yDFqPy88zEqvM-heyp1sg/viewform?usp=sharing&ouid=104566685506387611880";

const trackCards = [
    {
        title: "Fintech Track",
        sponsor: "Likely sponsored by C2FO",
        icon: Building2,
        description: "Build financial tools, payment experiences, and practical software for the future of money.",
        accent: "primary",
    },
    {
        title: "Biotech Track",
        sponsor: "Research-driven and innovation-focused",
        icon: Lightbulb,
        description: "Explore health, biology, and science-backed ideas that solve real-world problems.",
        accent: "accent",
    },
    {
        title: "Productivity / Fitness Track",
        sponsor: "Sponsored by Garmin",
        icon: HeartPulse,
        description: "Create apps and tools that improve movement, health, focus, and everyday efficiency.",
        accent: "primary",
    },
    {
        title: "Pitch Track",
        sponsor: "For no-code builders and idea-first teams",
        icon: Gamepad2,
        description: "Bring your best concept, outline the product, and pitch it with confidence.",
        accent: "accent",
    },
];

const sponsorNames = ["Garmin", "T-Mobile", "C2FO", "and more tech and finance companies in the KCMO area"];

const HackathonS26 = () => {
    return (
        <div className="container mx-auto px-6 py-12 space-y-20">
            <section className="text-center max-w-5xl mx-auto space-y-6 animate-fade-in">
                <Badge variant="outline" className="mx-auto border-primary/30 text-primary-glow px-4 py-1 text-sm">
                    Summer 2026 Hackathon
                </Badge>
                <h1 className="text-5xl md:text-7xl font-heading font-bold leading-tight">
                    YouthHackKC <span className="bg-primary bg-clip-text text-transparent">S26</span>
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground font-body leading-relaxed max-w-3xl mx-auto">
                    Our next hackathon is shaping up to be our biggest yet, with pending sponsorships from Garmin, T-Mobile, C2FO, and more tech and finance companies in the KCMO area.
                </p>

                <div className="flex flex-wrap justify-center gap-3 pt-2">
                    {sponsorNames.map((sponsor) => (
                        <Badge key={sponsor} variant="secondary" className="bg-white/5 text-foreground border-white/10 px-4 py-2">
                            {sponsor}
                        </Badge>
                    ))}
                </div>
            </section>

            <section className="grid md:grid-cols-3 gap-6">
                <Card className="bg-card/50 backdrop-blur-sm border-white/10 hover:border-primary/40 transition-all duration-300 animate-slide-up" style={{ animationDelay: "0.15s" }}>
                    <CardContent className="p-8 space-y-4 text-center">
                        <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary-glow mx-auto flex items-center justify-center">
                            <Trophy className="w-7 h-7" />
                        </div>
                        <div className="text-4xl font-heading font-bold">$1000</div>
                        <p className="text-muted-foreground">in prizes for winning teams and standout projects.</p>
                    </CardContent>
                </Card>

                <Card className="bg-card/50 backdrop-blur-sm border-white/10 hover:border-accent/40 transition-all duration-300 animate-slide-up" style={{ animationDelay: "0.3s" }}>
                    <CardContent className="p-8 space-y-4 text-center">
                        <div className="w-14 h-14 rounded-2xl bg-accent/10 text-accent mx-auto flex items-center justify-center">
                            <ChefHat className="w-7 h-7" />
                        </div>
                        <div className="text-4xl font-heading font-bold">Food</div>
                        <p className="text-muted-foreground">Free meals and snacks to keep teams building all day.</p>
                    </CardContent>
                </Card>

                <Card className="bg-card/50 backdrop-blur-sm border-white/10 hover:border-primary/40 transition-all duration-300 animate-slide-up" style={{ animationDelay: "0.45s" }}>
                    <CardContent className="p-8 space-y-4 text-center">
                        <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary-glow mx-auto flex items-center justify-center">
                            <Network className="w-7 h-7" />
                        </div>
                        <div className="text-4xl font-heading font-bold">Network</div>
                        <p className="text-muted-foreground">Meet mentors, sponsors, judges, and other students.</p>
                    </CardContent>
                </Card>
            </section>

            <section className="grid xl:grid-cols-[minmax(0,1fr)_minmax(800px,800px)] gap-8 items-start">
                <div className="space-y-10">
                    <div className="text-center max-w-3xl mx-auto space-y-4 lg:text-left lg:mx-0">
                        <h2 className="text-4xl md:text-5xl font-heading font-bold">
                            Current <span className="bg-accent bg-clip-text text-transparent">Tracks</span>
                        </h2>
                    </div>

                    <div className="space-y-6 max-w-3xl mx-auto lg:mx-0">
                        {trackCards.map((track, index) => {
                            const Icon = track.icon;
                            const isPrimary = track.accent === "primary";

                            return (
                                <Card
                                    key={track.title}
                                    className={`bg-card/50 backdrop-blur-sm overflow-hidden transition-all duration-300 animate-slide-up border-white/10 ${isPrimary ? "hover:border-primary/40" : "hover:border-accent/40"}`}
                                    style={{ animationDelay: `${0.2 + index * 0.15}s` }}
                                >
                                    <CardHeader>
                                        <div className="flex items-center justify-between gap-4">
                                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${isPrimary ? "bg-primary/10 text-primary-glow" : "bg-accent/10 text-accent"}`}>
                                                <Icon className="w-6 h-6" />
                                            </div>
                                            <Badge variant="outline" className="border-white/10 text-foreground/80 text-xs">
                                                Track
                                            </Badge>
                                        </div>
                                        <CardTitle className="text-2xl font-heading mt-4">{track.title}</CardTitle>
                                        <CardDescription className="text-sm text-primary-glow">{track.sponsor}</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-muted-foreground leading-relaxed">{track.description}</p>
                                    </CardContent>
                                </Card>
                            );
                        })}
                    </div>
                </div>

                <Card className="bg-card/50 backdrop-blur-sm border-white/10 overflow-hidden animate-slide-up sticky top-24" style={{ animationDelay: "0.35s" }}>
                    <CardHeader>
                        <CardTitle className="text-2xl font-heading">Register Interest</CardTitle>
                        <CardDescription>
                            Use the embedded form below or open it in a new tab.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
                            <iframe
                                src={`${formUrl}&embedded=true`}
                                width="100%"
                                height="920"
                                frameBorder="0"
                                marginHeight={0}
                                marginWidth={0}
                                title="YouthHackKC S26 registration form"
                                className="block"
                            >
                                Loading…
                            </iframe>
                        </div>
                        <Button asChild className="w-full">
                            <a href={formUrl} target="_blank" rel="noopener noreferrer">
                                Open Registration Form
                                <ArrowUpRight className="w-4 h-4 ml-2" />
                            </a>
                        </Button>
                    </CardContent>
                </Card>
            </section>
        </div>
    );
};

export default HackathonS26;