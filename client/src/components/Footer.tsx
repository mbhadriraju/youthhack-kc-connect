import { Code2, Mail, Twitter, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-card/50 backdrop-blur-lg border-t border-white/10 py-12 px-6 z-10 relative">
            <div className="container mx-auto">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <img src="/logo.png" alt="YouthHackKC Logo" className="w-8 h-8 object-contain" />
                            <span className="font-heading font-bold text-xl">YouthHackKC</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                            Empowering Kansas City's next generation of tech leaders through accessible CS education.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-heading font-semibold mb-4 text-foreground">Programs</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link to="/opportunities" className="hover:text-primary transition-colors">Hackathons</Link></li>
                            <li><Link to="/opportunities" className="hover:text-primary transition-colors">Workshops</Link></li>
                            <li><Link to="/opportunities" className="hover:text-primary transition-colors">Tutoring</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-heading font-semibold mb-4 text-foreground">About</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link to="/about" className="hover:text-primary transition-colors">Our Mission</Link></li>
                            <li><Link to="/about" className="hover:text-primary transition-colors">Team</Link></li>
                            <li><Link to="/about" className="hover:text-primary transition-colors">Partners</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-heading font-semibold mb-4 text-foreground">Connect</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>
                                <Link to="/contact" className="flex items-center gap-2 hover:text-primary transition-colors">
                                    <Mail className="w-4 h-4" />
                                    Contact Us
                                </Link>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/youthhackkc/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
                                    <Instagram className="w-4 h-4" />
                                    Instagram
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} YouthHackKC. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link to="/privacy-policy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
