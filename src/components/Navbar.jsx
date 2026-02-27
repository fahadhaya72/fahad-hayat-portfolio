import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 50);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", link: "#" },
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Certifications", link: "#certifications" },
    { name: "Skills", link: "#skills" },
    { name: "Experience", link: "#experience" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`
        fixed top-4 left-1/2 transform -translate-x-1/2
        w-[90%] max-w-5xl z-50
        rounded-2xl
        border border-purple-500/20
        backdrop-blur-lg
        bg-black/30
        shadow-lg shadow-purple-500/10
        transition-all duration-300
        ${scrolled ? "bg-black/50 border-purple-500/40" : ""}
      `}
    >
      <div className="flex justify-between items-center px-4 md:px-6 py-4">
        {/* mobile menu overlay */}
        {menuOpen && (
          <div className="fixed inset-0 z-40 bg-black/80 backdrop-blur-lg flex flex-col items-center justify-center space-y-8 text-2xl">
            {navItems.map((item, i) => (
              <a
                key={i}
                href={item.link}
                onClick={() => setMenuOpen(false)}
                className="text-white hover:text-purple-400 transition"
              >
                {item.name}
              </a>
            ))}
            <button
              className="absolute top-4 right-4 text-gray-300 hover:text-purple-400"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              ✕
            </button>
          </div>
        )}

        {/* Logo */}
        <div className="text-lg font-bold text-purple-400">
          Fahad.dev
        </div>

        {/* Hamburger for mobile */}
        <button
          className="md:hidden text-gray-300 hover:text-purple-400 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Navigation (desktop) */}
        <div className="hidden md:flex gap-6 text-sm">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="
                text-gray-300
                hover:text-purple-400
                transition
                relative
                group
              "
            >
              {item.name}

              <span className="
                absolute left-0 bottom-[-4px]
                w-0 h-[2px]
                bg-purple-400
                transition-all
                group-hover:w-full
              "></span>
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}