import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Opportunities", path: "/opportunities" },
        { name: "Support YHKC", path: "/support" },
        { name: "Donate", path: "/donate" },
        { name: "Contact", path: "/contact" },
    ];

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out border-b border-transparent",
                isScrolled
                    ? "bg-background/60 backdrop-blur-md border-white/10 py-3"
                    : "bg-transparent py-5"
            )}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                <Link to="/" className="flex items-center gap-2 z-50">
                    <img src="/logo.png" alt="YouthHackKC Logo" className="w-10 h-10 object-contain" />
                    <span className="font-heading font-bold text-xl tracking-tight hidden sm:block">
                        YouthHackKC
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-1">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={cn(
                                "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:bg-white/10",
                                location.pathname === link.path
                                    ? "text-primary-glow bg-white/5"
                                    : "text-muted-foreground hover:text-foreground"
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden z-50 p-2 text-foreground"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>

                {/* Mobile Navigation */}
                <div
                    className={cn(
                        "fixed inset-0 bg-background/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-8 transition-all duration-300 md:hidden",
                        isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                    )}
                >
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={cn(
                                "text-2xl font-heading font-medium transition-colors hover:text-primary",
                                location.pathname === link.path ? "text-primary-glow" : "text-foreground"
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            </div>
        </header>
    );
};

export default Header;
