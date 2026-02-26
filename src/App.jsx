import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Certifications from "./sections/Certifications";
import About from "./components/About";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CyberBackground from "./components/CyberBackground";

function App() {
  return (
    <main className="w-full min-h-screen bg-black text-white relative overflow-hidden">

      {/* cyber grid + radar layer */}
      <CyberBackground />

      <Navbar />

      <Hero />

      <About />

      <Projects />

      <Certifications />

      <Skills />

      <Experience />

      <Contact />

      <Footer />

    </main>
  );
}

export default App;