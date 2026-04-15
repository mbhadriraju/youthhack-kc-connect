import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Handshake, Mail, CheckCircle2, Loader2, Download } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Support = () => {
    const { toast } = useToast();
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "Sponsorship Inquiry",
        message: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                toast({
                    title: "Inquiry Sent!",
                    description: "Thanks for your interest in supporting YouthHackKC. We'll be in touch soon.",
                });
                setFormData({ name: "", email: "", phone: "", subject: "Sponsorship Inquiry", message: "" });
            } else {
                throw new Error('Failed to send message');
            }
        } catch (error) {
            toast({
                variant: "destructive",
                title: "Error",
                description: "Something went wrong. Please try again later.",
            });
        } finally {
            setIsLoading(false);
        }
    };

    const downloadFile = () => {
        const link = document.createElement('a');
        link.href = "public/YouthHackKC Sponsorship Packet.pdf";
        link.download = "YouthHackKC Sponsorship Packet.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    return (
        <div className="container mx-auto px-6 py-12 space-y-20">
            <div className="text-center space-y-4 animate-fade-in">
                <h1 className="text-5xl md:text-7xl font-heading font-bold">
                    Support <span className="bg-primary bg-clip-text text-transparent">YHKC</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-body">
                    Help us empower the next generation. Whether through mentorship or sponsorship, your support makes a difference.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                {/* Become a Tutor Section */}
                <Card className="bg-card/50 backdrop-blur-sm border-white/10 overflow-hidden flex flex-col hover:border-primary/50 transition-all duration-300 group animate-slide-up" style={{ animationDelay: '0.2s' }}>
                    <CardHeader>
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary-glow">
                            <Heart className="w-6 h-6" />
                        </div>
                        <CardTitle className="text-3xl font-heading">Become a Tutor</CardTitle>
                        <CardDescription className="text-lg">
                            Share your knowledge and mentor students.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6 flex-grow">
                        <p className="text-muted-foreground font-body leading-relaxed">
                            We are always looking for passionate individuals to join our team of mentors. As a tutor, you'll help students debug code, understand concepts, and build projects.
                        </p>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-3 text-sm text-foreground/80">
                                <CheckCircle2 className="w-5 h-5 text-primary-glow" />
                                Flexible time commitment
                            </li>
                            <li className="flex items-center gap-3 text-sm text-foreground/80">
                                <CheckCircle2 className="w-5 h-5 text-primary-glow" />
                                Work with motivated students
                            </li>
                            <li className="flex items-center gap-3 text-sm text-foreground/80">
                                <CheckCircle2 className="w-5 h-5 text-primary-glow" />
                                Make a tangible impact
                            </li>
                        </ul>

                        {/* Google Form Placeholder */}
                        <div className="w-full h-auto bg-white/5 rounded-xl flex flex-col items-center justify-center border border-white/10 mt-6 p-4">
                            <div className="w-full">
                                {/* Google Form Embed */}
                                <iframe
                                src="https://docs.google.com/forms/d/e/1FAIpQLScn4VYMyNIv94XPkwqn2ekpDGYdSEKbIdcaTuWHgCTpnGb6yA/viewform?embedded=true"
                                width="100%"
                                height="250"
                                frameBorder="0"
                                marginHeight="0"
                                marginWidth="0"
                                className="rounded-xl"
                                >
                                Loading…
                                </iframe>
                            </div>
                            {/* Button below the form */}
                            <a
                                href="https://docs.google.com/forms/d/e/1FAIpQLScn4VYMyNIv94XPkwqn2ekpDGYdSEKbIdcaTuWHgCTpnGb6yA/viewform?usp=header"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-4 inline-block px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition w-full text-center">
                                Open Tutor Application
                            </a>
                        </div>
                    </CardContent>
                </Card>

                {/* Sponsorship Request Section */}
                <Card className="bg-card/50 backdrop-blur-sm border-white/10 overflow-hidden flex flex-col hover:border-accent/50 transition-all duration-300 group animate-slide-up" style={{ animationDelay: '0.4s' }}>
                    <CardHeader>
                        <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 text-accent">
                            <Handshake className="w-6 h-6" />
                        </div>
                        <CardTitle className="text-3xl font-heading">Partner with Us</CardTitle>
                        <CardDescription className="text-lg">
                            Invest in the future of technology in Kansas City.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6 flex-grow">
                        <p className="text-muted-foreground font-body leading-relaxed">
                            We rely on the support of sponsors to keep our events free and accessible for all students. Reach out to discuss sponsorship opportunities.
                        </p>

                        <form className="space-y-4" onSubmit={handleSubmit} enctype="multipart/form-data">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium leading-none">Name</label>
                                    <Input
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="John Doe"
                                        className="bg-background/50 border-white/10"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium leading-none">Phone</label>
                                    <Input
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="(555) 555-5555"
                                        className="bg-background/50 border-white/10"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium leading-none">Email</label>
                                <Input
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="john@company.com"
                                    className="bg-background/50 border-white/10"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium leading-none">Subject</label>
                                <Input
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    placeholder="Sponsorship Inquiry"
                                    className="bg-background/50 border-white/10"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium leading-none">Message</label>
                                <Textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    placeholder="We are interested in sponsoring..."
                                    className="min-h-[100px] bg-background/50 border-white/10"
                                />
                            </div>
                            <Button type="submit" disabled={isLoading} className="w-full bg-accent hover:bg-accent/90 text-white">
                                {isLoading ? (
                                    <>
                                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        <Mail className="w-4 h-4 mr-2" />
                                        Send Sponsorship Request
                                    </>
                                )}
                            </Button>
                            <Button onClick={downloadFile} className="w-full bg-muted hover:bg-muted/90 text-white">
                                <Download />
                                Download Sponsorship Packet
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default Support;
