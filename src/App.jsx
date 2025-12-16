import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar"
import Home from "./pages/Home/Home"

const App = () => {
    return (
        <>
            <header>
                <Navbar />
            </header>

            {/* Main Page */}
            <main>
                <Home />
            </main>

            <Footer />
        </>
    )
}

export default App;