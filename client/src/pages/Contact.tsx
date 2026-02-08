import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useEffect, useState } from "react";

const Contact = () => {
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [name, setName] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const sendResponse = await fetch("/api/contact", {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name: name, email: email, phone: phone, subject: subject, message: message }),
            })
            if (!sendResponse.ok) {
                console.log(sendResponse);
                console.error('Network response was not ok');
            }
            const data = await sendResponse.json();
            console.log(data);
        } catch (error) {
            console.error("Error submitting email:", error);
        }
        setEmail("");
        setPhone("");
        setName("");
        setSubject("");
        setMessage("");
        alert("Thanks for contacting us! We'll get back to you shortly.");
    };

    return (
        <div className="container mx-auto px-6 py-12 flex flex-col items-center justify-center min-h-[80vh] animate-fade-in">
            <div className="text-center space-y-4 mb-12">
                <h1 className="text-5xl md:text-7xl font-heading font-bold">
                    Get in <span className="bg-primary bg-clip-text text-transparent">Touch</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-body">
                    Have questions? Want to collaborate? We'd love to hear from you.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 max-w-5xl w-full">
                {/* Contact Info */}
                <div className="space-y-8 self-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary-glow">
                                <Mail className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="font-heading font-bold text-lg">Email Us</h3>
                                <p className="text-muted-foreground">youthhackkc@gmail.com</p>
                                <p className="text-sm text-muted-foreground/60 mt-1">For general inquiries and partnerships</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0 text-accent">
                                <MapPin className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="font-heading font-bold text-lg">Location</h3>
                                <p className="text-muted-foreground">Overland Park, KS</p>
                                <p className="text-sm text-muted-foreground/60 mt-1">Serving the Greater Kansas City Area</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-card/30 rounded-xl p-6 border border-white/5">
                        <p className="text-sm italic text-muted-foreground">
                            "Expanding access vs. computer science education for middle and high school students."
                        </p>
                    </div>
                </div>

                {/* Contact Form */}
                <Card className="bg-card/50 backdrop-blur-sm border-white/10 hover:border-primary/50 transition-all duration-300 hover:shadow-glow animate-slide-up" style={{ animationDelay: '0.4s' }}>
                    <CardHeader>
                        <CardTitle className="text-2xl font-heading">Send a Message</CardTitle>
                        <CardDescription>
                            Fill out the form below and we'll get back to you as soon as possible.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form className="space-y-4" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium leading-none">Name</label>
                                    <Input required placeholder="Your Name" className="bg-background/50 border-white/10" value={name} onChange={(e) => setName(e.target.value)} />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium leading-none">Phone</label>
                                    <Input placeholder="(Optional)" className="bg-background/50 border-white/10" value={phone} onChange={(e) => setPhone(e.target.value)} />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium leading-none">Email</label>
                                <Input required type="email" placeholder="you@example.com" className="bg-background/50 border-white/10" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium leading-none">Subject</label>
                                <Input required placeholder="How can we help?" className="bg-background/50 border-white/10" value={subject} onChange={(e) => setSubject(e.target.value)} />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium leading-none">Message</label>
                                <Textarea required placeholder="Tell us more..." className="min-h-[120px] bg-background/50 border-white/10" value={message} onChange={(e) => setMessage(e.target.value)} />
                            </div>
                            <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white font-bold">
                                <Send className="w-4 h-4 mr-2" />
                                SendMessage
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default Contact;
