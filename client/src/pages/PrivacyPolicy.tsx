const PrivacyPolicy = () => {
    return (
        <div className="container mx-auto px-6 py-12 max-w-4xl space-y-8 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-8">Privacy Policy</h1>

            <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground font-body leading-relaxed">
                <p>Last updated: {new Date().toLocaleDateString()}</p>

                <section>
                    <h2 className="text-2xl font-heading font-bold text-foreground mb-4">1. Introduction</h2>
                    <p>
                        Welcome to YouthHackKC ("we," "our," or "us"). We are committed to protecting your privacy and ensuring you have a positive experience on our website and at our events. This policy outlines how we handle your personal information.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-heading font-bold text-foreground mb-4">2. Information We Collect</h2>
                    <p>We collect information that you voluntarily provide to us when you:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Register for an event (Hackathon, Workshop, etc.)</li>
                        <li>Sign up for tutoring</li>
                        <li>Contact us via our website form</li>
                        <li>Donate to our organization</li>
                    </ul>
                    <p className="mt-4">This information may include your name, email address, phone number, school, and grade level.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-heading font-bold text-foreground mb-4">3. How We Use Your Information</h2>
                    <p>We use the information we collect to:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Organize and manage our events</li>
                        <li>Communicate with you about upcoming opportunities</li>
                        <li>Coordinate tutoring sessions</li>
                        <li>Process donations (via Hack Club Bank)</li>
                        <li>Improve our services and website</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-heading font-bold text-foreground mb-4">4. Information Sharing</h2>
                    <p>
                        We do not sell, trade, or rent your personal identification information to others. We are a fiscally sponsored nonprofit under The Hack Foundation (Hack Club Bank), and some data may be shared with them for compliance and operational purposes.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-heading font-bold text-foreground mb-4">5. Contact Us</h2>
                    <p>
                        If you have any questions about this Privacy Policy, please contact us at team@youthhackkc.org.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
