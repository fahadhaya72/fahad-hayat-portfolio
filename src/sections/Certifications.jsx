import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import CyberBackground from "../components/CyberBackground";
import { animate } from "animejs";

export default function Certifications() {

  const certifications = [
    {
      name: "Ethical Hacker",
      issuer: "Cisco Networking Academy",
      issueDate: "2026",
      credentialId: "Available on certificate",
      image: "/certificates/ethical-hacker.png",
      skills: [
        "Nmap Scanning",
        "Vulnerability Assessment",
        "Privilege Escalation",
        "Network Security"
      ]
    },
    {
      name: "Cybersecurity Essentials",
      issuer: "Cisco Networking Academy",
      issueDate: "2026",
      credentialId: "Available on certificate",
      image: "/certificates/cybersecurity-essentials.png",
      skills: [
        "Threat Analysis",
        "Risk Management",
        "Security Defense",
        "Network Protection"
      ]
    },
    {
      name: "Packet Tracer",
      issuer: "Cisco Networking Academy",
      issueDate: "2025",
      credentialId: "Available on certificate",
      image: "/certificates/packet-tracer.png",
      skills: [
        "Network Configuration",
        "Routing and Switching",
        "Topology Design",
        "Network Simulation"
      ]
    }
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedCert = certifications[selectedIndex];

  useEffect(() => {
    animate(".cyber-animate", {
      opacity: [0,1],
      translateY: [40,0],
      delay: (el,i)=> i*140,
      duration: 900,
      easing: "easeOutExpo"
    });
  }, []);

  return (
    <section id="certifications" className="relative min-h-screen bg-black text-white py-20 px-6 overflow-hidden">

      <CyberBackground />

      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <h2 className="cyber-animate text-4xl font-bold text-center text-purple-400 mb-12 bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 text-transparent bg-clip-text">
          Certifications
        </h2>

        {/* Horizontal selector */}
        <div className="cyber-animate flex gap-4 justify-center mb-10 flex-wrap">

          {certifications.map((cert, index) => (

            <button
              key={index}
              onClick={() => setSelectedIndex(index)}
              className={`
                px-6 py-3 rounded-lg border transition
                ${selectedIndex === index
                  ? "bg-purple-600 border-purple-400"
                  : "bg-zinc-900 border-purple-400/30 hover:border-purple-400"
                }
              `}
            >
              {cert.name}
            </button>

          ))}

        </div>

        {/* Main display */}
        <motion.div
          key={selectedIndex}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="cyber-animate
            grid md:grid-cols-2 gap-8
            bg-zinc-900
            border border-purple-500/30
            rounded-xl
            p-6
          "
        >

          {/* Left: Image */}
          <div>
            <img
              src={selectedCert.image}
              className="w-full rounded-lg border border-purple-500/20"
            />
          </div>

          {/* Right: Content */}
          <div>

            <h3 className="text-2xl font-bold text-purple-400 mb-4">
              {selectedCert.name}
            </h3>

            <p className="text-gray-400 mb-2">
              Issued by: {selectedCert.issuer}
            </p>

            <p className="text-gray-400 mb-2">
              Issue Date: {selectedCert.issueDate}
            </p>

            <p className="text-gray-400 mb-4">
              Credential ID: {selectedCert.credentialId}
            </p>

            <h4 className="text-purple-400 mb-2">
              Skills Covered:
            </h4>

            <div className="flex flex-wrap gap-2">

              {selectedCert.skills.map((skill, i) => (
                <span
                  key={i}
                  className="border border-purple-400/30 px-3 py-1 rounded-lg text-sm"
                >
                  {skill}
                </span>
              ))}

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}