import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

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
      <div className="flex justify-between items-center px-6 py-4">

        {/* Logo */}
        <div className="text-lg font-bold text-purple-400">
          Fahad.dev
        </div>

        {/* Navigation */}
        <div className="flex gap-6 text-sm">

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