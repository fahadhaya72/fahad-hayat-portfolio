import React, { useEffect } from "react";
import { animate } from "animejs";
import {
  Github,
  Linkedin,
  Mail,
  Shield,
  Terminal,
  Activity,
} from "lucide-react";

const Footer = () => {
  useEffect(() => {
    animate(".footer-fade", {
      opacity: [0, 1],
      translateY: [40, 0],
      duration: 1200,
      easing: "easeOutExpo",
    });

    animate(".status-dot", {
      scale: [0, 1],
      delay: (el, i) => i * 200,
      duration: 600,
      easing: "easeOutBack",
    });

    // Terminal typing effect
    const text = "System secure • Monitoring active • No threats detected";
    let i = 0;

    const interval = setInterval(() => {
      const el = document.getElementById("terminal-text");
      if (!el) return;

      el.innerText = text.slice(0, i);
      i++;

      if (i > text.length) clearInterval(interval);
    }, 35);

    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="bg-[#04060f] border-t border-purple-500/20 mt-20">

      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* Top Section */}
        <div className="grid md:grid-cols-3 gap-10 footer-fade">

          {/* Identity */}
          <div>

            <div className="flex items-center gap-3 mb-4">

              <Shield className="text-purple-400" size={28} />

              <h3 className="text-xl font-bold text-white">
                Fahad Hayat
              </h3>

            </div>

            <p className="text-gray-400 text-sm leading-relaxed">
              Application Security Engineer (Aspiring) focused on building
              secure systems, detecting vulnerabilities, and engineering
              defensive security tools.
            </p>

          </div>

          {/* Terminal */}
          <div>

            <div className="flex items-center gap-2 mb-3 text-purple-400">

              <Terminal size={18} />

              <span className="text-sm font-semibold">
                System Status
              </span>

            </div>

            <div className="bg-black/60 border border-purple-500/20 rounded-lg p-4 font-mono text-sm">

              <span className="text-green-400">$</span>{" "}

              <span
                id="terminal-text"
                className="text-gray-300"
              ></span>

              <span className="animate-pulse text-purple-400">|</span>

            </div>

          </div>

          {/* Status Indicators */}
          <div>

            <div className="flex items-center gap-2 mb-3 text-purple-400">

              <Activity size={18} />

              <span className="text-sm font-semibold">
                Security Status
              </span>

            </div>

            <div className="space-y-2 text-sm">

              <div className="flex items-center gap-3">

                <div className="status-dot w-3 h-3 bg-green-500 rounded-full"></div>

                <span className="text-gray-300">
                  Firewall Active
                </span>

              </div>

              <div className="flex items-center gap-3">

                <div className="status-dot w-3 h-3 bg-green-500 rounded-full"></div>

                <span className="text-gray-300">
                  Threat Detection Enabled
                </span>

              </div>

              <div className="flex items-center gap-3">

                <div className="status-dot w-3 h-3 bg-green-500 rounded-full"></div>

                <span className="text-gray-300">
                  Monitoring Systems Operational
                </span>

              </div>

            </div>

          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-purple-500/10 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 footer-fade">

          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Fahad Hayat • Built with secure engineering principles
          </p>

          {/* Social Links */}
          <div className="flex gap-4">

            <a
              href="https://github.com/fahadhaya72"
              target="_blank"
              className="p-3 bg-white/5 rounded-lg border border-white/10 hover:border-purple-500 hover:bg-purple-500/10 transition"
            >
              <Github size={18} />
            </a>

            <a
              href="https://linkedin.com/in/fahad-hayat-6430962aa"
              target="_blank"
              className="p-3 bg-white/5 rounded-lg border border-white/10 hover:border-purple-500 hover:bg-purple-500/10 transition"
            >
              <Linkedin size={18} />
            </a>

            <a
              href="mailto:cyberfahad72@gmail.com"
              className="p-3 bg-white/5 rounded-lg border border-white/10 hover:border-purple-500 hover:bg-purple-500/10 transition"
            >
              <Mail size={18} />
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;