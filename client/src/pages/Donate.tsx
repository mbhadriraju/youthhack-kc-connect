import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Heart, Building2, CheckCircle } from "lucide-react";

const Donate = () => {
    return (
        <div className="container mx-auto px-6 py-12 flex flex-col items-center justify-center min-h-[80vh] animate-fade-in">
            <div className="text-center space-y-4 mb-12">
                <h1 className="text-5xl md:text-7xl font-heading font-bold">
                    Make a <span className="bg-primary bg-clip-text text-transparent">Donation</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-body">
                    Your contributions directly support student projects, prizes, and educational resources.
                </p>
            </div>

            <Card className="max-w-2xl w-full bg-card/50 backdrop-blur-sm border-white/10 overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-glow">
                <CardHeader className="text-center pb-2">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 text-primary-glow animate-pulse">
                        <Heart className="w-8 h-8" />
                    </div>
                    <CardTitle className="text-3xl font-heading">Support Our Mission</CardTitle>
                </CardHeader>
                <CardContent className="space-y-8 p-8">
                    <div className="bg-white/5 rounded-xl p-6 border border-white/10 flex items-start gap-4">
                        <Building2 className="w-6 h-6 text-accent shrink-0 mt-1" />
                        <div className="space-y-2">
                            <h3 className="font-heading font-bold text-lg">501(c)(3) Fiscal Sponsorship</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                YouthHackKC is a fiscally sponsored nonprofit organization operating under The Hack Foundation (Hack Club Bank). This means your donations are tax-deductible to the fullest extent of the law.
                            </p>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h4 className="font-heading font-semibold text-center">Where your money goes:</h4>
                        <div className="grid sm:grid-cols-2 gap-4">
                            <div className="flex items-center gap-2 text-sm text-foreground/80">
                                <CheckCircle className="w-4 h-4 text-primary-glow" />
                                Hackathon Prizes & Swag
                            </div>
                            <div className="flex items-center gap-2 text-sm text-foreground/80">
                                <CheckCircle className="w-4 h-4 text-primary-glow" />
                                Event Venue & Food
                            </div>
                            <div className="flex items-center gap-2 text-sm text-foreground/80">
                                <CheckCircle className="w-4 h-4 text-primary-glow" />
                                Workshop Materials
                            </div>
                            <div className="flex items-center gap-2 text-sm text-foreground/80">
                                <CheckCircle className="w-4 h-4 text-primary-glow" />
                                Operational Costs
                            </div>
                        </div>
                    </div>

                    <Button
                        size="lg"
                        className="w-full text-lg font-bold h-14 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity"
                        onClick={() => window.open('https://hcb.hackclub.com/donations/start/youthhackkc', '_blank')}
                    >
                        Donate via Hack Club Bank
                    </Button>

                    <p className="text-xs text-center text-muted-foreground">
                        You will be redirected to our secure donation page designated by Hack Club Bank.
                    </p>
                </CardContent>
            </Card>
        </div>
    );
};

export default Donate;
