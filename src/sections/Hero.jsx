import React, { useEffect } from "react";
import { animate } from "animejs";
import { Shield, Activity, Terminal } from "lucide-react";
import CyberBackground from "../components/CyberBackground";
import Typewriter from "../components/Typewriter";

export default function Hero() {


  const roles = [
    "Application Security Engineer (Aspiring)",
    "Full-Stack Developer",
    "Cybersecurity Enthusiast",
    "Ethical Hacker"
  ];

  useEffect(() => {

    // =============================
    // Fade main content animation (cyber-dashboard style)
    // =============================

    animate(".cyber-animate", {
      opacity: [0, 1],
      translateY: [40, 0],
      delay: (el, i) => i * 200,
      duration: 1200,
      easing: "easeOutExpo"
    });





  }, []);


  return (

    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black text-white">

      {/* cyber background with radar pulse overlay */}
      <CyberBackground />


      {/* =============================
          Main Content
      ============================== */}

      <div className="relative z-10 text-center max-w-4xl px-6">

        {/* Name */}

        <h1 className="cyber-animate text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 text-transparent bg-clip-text">

          Fahad Hayat

        </h1>


        {/* Typing role */}

        <div className="cyber-animate text-xl md:text-2xl text-purple-300 mb-6 font-mono">
          &gt; <Typewriter words={roles} />
        </div>


        {/* Description */}

        <p className="cyber-animate text-gray-400 max-w-2xl mx-auto mb-10">

          Security-focused developer building secure, scalable applications and
          defensive cyber systems. Specialized in vulnerability detection,
          threat analysis, and secure software architecture.

        </p>


        {/* Status Indicators */}

        <div className="cyber-animate flex justify-center gap-6 flex-wrap">

          <div className="flex items-center gap-2 bg-purple-500/10 border border-purple-500/30 px-4 py-2 rounded-lg">

            <Shield size={18} />
            Security Focused

          </div>

          <div className="flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 px-4 py-2 rounded-lg">

            <Activity size={18} />
            Threat Detection Ready

          </div>

          <div className="flex items-center gap-2 bg-pink-500/10 border border-pink-500/30 px-4 py-2 rounded-lg">

            <Terminal size={18} />
            Secure Development

          </div>

        </div>

      </div>

    </section>

  );

}