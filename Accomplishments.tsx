import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Accomplishments from "./components/Accomplishments";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Accomplishments />
      <Certifications />
      <Contact />
      <Footer />

      {/* Back to Top Button */}
      <BackToTop />
    </div>
  );
}

function BackToTop() {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-primary-600 text-white shadow-lg shadow-primary-600/30 hover:bg-primary-500 hover:scale-110 transition-all duration-300 flex items-center justify-center group"
      aria-label="Back to top"
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18 15l-6-6-6 6" />
      </svg>
    </button>
  );
}
