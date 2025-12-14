import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar"
import Home from "./pages/Home/Home"

const App = () => {
    return (
        <>
            <Navbar />

            <div>
                {/* Main Page */}
                <Home />
            </div>

            <Footer />
        </>
    )
}

export default App;