import Navbar from "./components/navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
function App() {
    return (
    <div className="app">

    <div className="background-blobs">

        <span className="blob blob1"></span>
        <span className="blob blob2"></span>
        <span className="blob blob3"></span>

    </div>

    <Navbar />
    <Hero />
    <About />
    <Skills />
    <Projects />
    <Contact />
    <Footer />

</div>
    );
}

export default App;