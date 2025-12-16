import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar"
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Features from "./pages/Features/Features";

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Navbar />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/features" element={<Features />} />
                </Routes>

                <Footer />
            </BrowserRouter>
        </>
    )
}

export default App;