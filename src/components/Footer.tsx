import { Code2, Mail, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12 px-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
                <Code2 className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl">YouthHackKC</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Empowering Kansas City's next generation of tech leaders through accessible CS education.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Programs</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <p className="transition-colors">Hackathons</p>
              <p className="transition-colors">Workshops</p>
              <p className="transition-colors">Tutoring</p>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">About</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <p className="transition-colors">Our Mission</p>
              <p className="transition-colors">Team</p>
              <p className="transition-colors">Partners</p>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <h1 className="transition-colors flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Contact Us
              </h1>
              <h1 className="transition-colors flex items-center gap-2">
                <Twitter className="w-4 h-4" />
                Twitter
              </h1>
              <h1 className="transition-colors flex items-center gap-2">
                <Instagram className="w-4 h-4" />
                Instagram
              </h1>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>&copy; 2025 YouthHackKC. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="transition-colors">Privacy Policy</span>
            <span className="transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
