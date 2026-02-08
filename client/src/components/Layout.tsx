import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import DarkVeil from "./ui/DarkVeil";

const Layout = () => {
    return (
        <div className="min-h-screen flex flex-col relative overflow-hidden">
            {/* Background Layer */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <DarkVeil
                    hueShift={20}
                    noiseIntensity={0.15}
                    scanlineIntensity={0.2}
                    speed={0.8}
                    scanlineFrequency={200}
                    warpAmount={0.5}
                />
                <div className="absolute inset-0 bg-background/80" /> {/* Overlay to ensure text readability */}
            </div>

            <Header />

            {/* Main Content */}
            <main className="flex-grow z-10 pt-20">
                <Outlet />
            </main>

            <Footer />
        </div>
    );
};

export default Layout;
