import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, ChevronLeft, ChevronRight } from "lucide-react";
import CyberBackground from "../components/CyberBackground";
import { animate } from "animejs";

export default function Projects() {
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const offset = 300;
      const newPosition = direction === 'left' 
        ? scrollContainerRef.current.scrollLeft - offset
        : scrollContainerRef.current.scrollLeft + offset;
      
      scrollContainerRef.current.scrollTo({
        left: newPosition,
        behavior: 'smooth'
      });
    }
  };

  const projects = [

{
  name: "AI-Powered Honeypot Network",
  image: "https://opengraph.githubassets.com/1/fahadhaya72/AI-Powered-Honeypot",
  description:
    "Advanced AI-driven honeypot system designed to capture and analyze real-world cyber attacks and attacker behavior.",
  tech: ["Python", "Flask", "Cybersecurity", "Threat Intelligence"],
  github: "https://github.com/fahadhaya72/AI-Powered-Honeypot"
},

{
  name: "SafeExtension — Real-Time URL Security Analyzer",
  image: "https://opengraph.githubassets.com/1/fahadhaya72/safeextension",
  description:
    "Browser extension that performs real-time URL safety analysis using risk scoring, Safe Browsing, and redirect tracking.",
  tech: ["JavaScript", "Browser Extension", "Cybersecurity"],
  github: "https://github.com/fahadhaya72/safeextension"
},

{
  name: "Automated Network Vulnerability Scanner",
  image: "https://opengraph.githubassets.com/1/fahadhaya72/Network-Vulnerability-Scanner",
  description:
    "Automated vulnerability scanner with Nmap, Scapy, CVE matching, and professional reporting.",
  tech: ["Python", "Flask", "Nmap", "Cybersecurity"],
  github: "https://github.com/fahadhaya72/Network-Vulnerability-Scanner"
},

{
  name: "Device Safety Checker",
  image: "https://opengraph.githubassets.com/1/fahadhaya72/Device-Safety-Checker",
  description:
    "System security analysis tool that evaluates device safety level and detects suspicious files.",
  tech: ["Node.js", "Security Analysis", "Cybersecurity"],
  github: "https://github.com/fahadhaya72/Device-Safety-Checker"
},

{
  name: "FuelFlux — Secure Enterprise System",
  image: "/projects/fuelflux.png",
  description:
    "Enterprise-grade secure fuel station management system with protected backend architecture.",
  tech: ["React", "Node.js", "MongoDB", "JWT"],
  github: null
}

];

  const [selectedProject, setSelectedProject] = useState(projects[0]);

  useEffect(() => {
    animate(".cyber-animate", {
      opacity: [0,1],
      translateY: [40,0],
      delay: (el,i)=> i*150,
      duration: 1000,
      easing: "easeOutExpo"
    });
  }, []);

  return (
    <section id="projects" className="relative min-h-screen bg-black text-white py-20 px-6 overflow-hidden">

      {/* cyber-themed grid and radar (disabled on phones) */}
      <div className="hidden md:block">
        <CyberBackground />
      </div>

      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="cyber-animate text-5xl font-bold text-center mb-16 text-purple-400"
        >
          Projects
        </motion.h2>


        {/* Horizontal selector with arrow buttons */}
        <div className="relative flex items-center">
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 z-10 p-2 rounded-full bg-purple-500/30 hover:bg-purple-500/50 transition"
            aria-label="Scroll left"
          >
            <ChevronLeft size={24} className="text-purple-400" />
          </button>

          <div ref={scrollContainerRef} className="flex gap-4 overflow-x-auto pb-6 hide-scrollbar px-6 md:px-16">

            {projects.map((project, index) => (

              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                onClick={() => setSelectedProject(project)}
                className="
                  cyber-animate
                  min-w-[200px] sm:min-w-[260px]
                  bg-white/5
                  border border-purple-500/30
                  backdrop-blur-lg
                  rounded-xl
                  p-4
                  cursor-pointer
                  hover:border-purple-500
                  transition
                "
              >

                <h3 className="text-lg font-semibold">
                  {project.name}
                </h3>

              </motion.div>

            ))}

          </div>

          <button
            onClick={() => scroll('right')}
            className="absolute right-0 z-10 p-2 rounded-full bg-purple-500/30 hover:bg-purple-500/50 transition"
            aria-label="Scroll right"
          >
            <ChevronRight size={24} className="text-purple-400" />
          </button>
        </div>


        {/* Selected project layout */}
        {selectedProject && (

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="cyber-animate
              grid md:grid-cols-2
              gap-10
              mt-10
              items-start
            "
          >

            {/* LEFT — Preview */}
            <div className="
              border border-purple-500/30
              rounded-xl
              overflow-hidden
            ">
              <img
                src={selectedProject.image}
                className="w-full"
              />
            </div>


            {/* RIGHT — Content */}
            <div>

              <h3 className="cyber-animate text-3xl font-bold mb-4 text-purple-400">
                {selectedProject.name}
              </h3>

              <p className="cyber-animate text-gray-300 mb-6 text-lg leading-relaxed">
                {selectedProject.description}
              </p>


              {/* Tech stack */}
              <div className="flex flex-wrap gap-3 mb-6">

                {selectedProject.tech.map((tech, i) => (

                  <span
                    key={i}
                    className="
                      border border-purple-500/40
                      px-3 py-1
                      rounded-lg
                      text-sm
                    "
                  >
                    {tech}
                  </span>

                ))}

              </div>


              {/* GitHub button */}
              {selectedProject.github && (

                <a
                  href={selectedProject.github}
                  target="_blank"
                  className="
                    inline-flex
                    items-center
                    gap-2
                    border border-purple-500
                    px-6 py-3
                    rounded-lg
                    hover:bg-purple-500 hover:text-black
                    transition
                  "
                >

                  <Github size={18} />
                  View on GitHub

                </a>

              )}

            </div>

          </motion.div>

        )}

      </div>

    </section>
  );
}