import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "../data/portfolio";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navLinks.map((link) =>
        document.querySelector(link.href)
      );
      const scrollPos = window.scrollY + 100;

      sections.forEach((section, index) => {
        if (section) {
          const el = section as HTMLElement;
          if (
            scrollPos >= el.offsetTop &&
            scrollPos < el.offsetTop + el.offsetHeight
          ) {
            setActiveSection(navLinks[index].href.slice(1));
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gray-950/90 backdrop-blur-xl shadow-lg shadow-primary-900/20 border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleClick("#home");
            }}
            className="text-xl md:text-2xl font-bold gradient-text tracking-tight"
          >
            ABUELA Portfolio
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleClick(link.href);
                }}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeSection === link.href.slice(1)
                    ? "text-white bg-primary-600/30 shadow-inner"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-gray-400 hover:text-white transition-colors p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-gray-950/95 backdrop-blur-xl border-t border-white/5 px-4 py-3 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleClick(link.href);
              }}
              className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                activeSection === link.href.slice(1)
                  ? "text-white bg-primary-600/30"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
