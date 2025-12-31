import { Routes, Route } from "react-router-dom";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar"
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Features from "./pages/Features/Features";
import ScrollToTop from "./components/common/ScrollToTop";
import Help from "./pages/Help/Help";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
import TermsService from "./pages/TermsService/TermsService";

const App = () => {
    return (
        <>
            <Navbar />

            <ScrollToTop />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/features" element={<Features />} />
                {/* Footer Links */}
                <Route path="/about" element={<About />} />
                <Route path="/help" element={<Help />} />
                <Route path="privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms-service" element={<TermsService />} />
            </Routes>

            <Footer />
        </>
    )
}

export default App;