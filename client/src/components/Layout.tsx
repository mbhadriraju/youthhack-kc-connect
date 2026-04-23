import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { CosmicParallaxBg } from "../components/ui/parallax-cosmic-background";

const Layout = () => {
    return (
        <div className="min-h-screen flex flex-col relative overflow-hidden">
            {/* Background Layer */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <CosmicParallaxBg loop={true} />
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
