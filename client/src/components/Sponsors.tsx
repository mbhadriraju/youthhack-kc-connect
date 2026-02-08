import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";

const Sponsors = () => {
    return (
        <section className="py-24 px-6 relative overflow-hidden">
            <div className="container mx-auto relative z-10 text-center space-y-8 animate-fade-in">
                <h2 className="text-4xl md:text-5xl font-heading font-bold">
                    Our <span className="bg-primary bg-clip-text text-transparent">Sponsors</span>
                </h2>

                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    We are currently looking for sponsors to help us empower the next generation of tech leaders.
                </p>

                <Link to="/support">
                    <Button variant="hero" size="lg" className="group mt-4">
                        <Heart className="mr-2 h-5 w-5" />
                        Support YHKC
                    </Button>
                </Link>
            </div>
        </section>
    );
};

export default Sponsors;
