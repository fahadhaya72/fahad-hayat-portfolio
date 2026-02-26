import React, { useEffect } from "react";
import { animate, stagger } from "animejs";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Send,
} from "lucide-react";

const Contact = () => {
  useEffect(() => {
    animate(".contact-card", {
      opacity: [0, 1],
      translateY: [80, 0],
      delay: stagger(200),
      duration: 1200,
      easing: "easeOutExpo",
    });

    animate(".contact-title", {
      opacity: [0, 1],
      translateY: [-40, 0],
      duration: 1000,
      easing: "easeOutExpo",
    });
  }, []);

  return (
    <section
      id="contact"
      className="min-h-screen px-6 py-24 bg-gradient-to-b from-[#070816] via-[#0a0f2c] to-[#070816]"
    >
      {/* Title */}
      <div className="text-center mb-16 contact-title">
        <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text">
          Establish Secure Connection
        </h2>

        <p className="text-gray-400 mt-3">
          Ready to collaborate on secure, scalable, and innovative systems
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">

        {/* Left — Info Panel */}
        <div className="contact-card bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-8 hover:border-purple-500/40 transition">

          <h3 className="text-xl font-semibold text-white mb-6">
            Contact Information
          </h3>

          <div className="space-y-6">

            <div className="flex items-center gap-4">
              <Mail className="text-purple-400" />
              <div>
                <p className="text-gray-400 text-sm">Email</p>
                <p className="text-white">
                  cyberfahad72@gmail.com
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Phone className="text-purple-400" />
              <div>
                <p className="text-gray-400 text-sm">Phone</p>
                <p className="text-white">
                  +91 8320295586
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <MapPin className="text-purple-400" />
              <div>
                <p className="text-gray-400 text-sm">Location</p>
                <p className="text-white">
                  Godhra, Gujarat, India
                </p>
              </div>
            </div>

          </div>

          {/* Social */}
          <div className="flex gap-4 mt-8">

            <a
              href="https://github.com/fahadhaya72"
              target="_blank"
              className="p-3 rounded-lg bg-white/5 hover:bg-purple-500/20 transition hover:scale-110"
            >
              <Github />
            </a>

            <a
              href="https://linkedin.com/in/fahad-hayat-6430962aa"
              target="_blank"
              className="p-3 rounded-lg bg-white/5 hover:bg-purple-500/20 transition hover:scale-110"
            >
              <Linkedin />
            </a>

          </div>

        </div>

        {/* Right — Contact Form */}
        <div className="contact-card bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-8 hover:border-cyan-500/40 transition">

          <h3 className="text-xl font-semibold text-white mb-6">
            Send Secure Message
          </h3>

          <form className="space-y-5">

            <div>
              <input
                type="text"
                required
                placeholder="Your Name"
                className="w-full bg-transparent border border-white/10 rounded-lg px-4 py-3 text-white focus:border-purple-500 focus:outline-none transition"
              />
            </div>

            <div>
              <input
                type="email"
                required
                placeholder="Your Email"
                className="w-full bg-transparent border border-white/10 rounded-lg px-4 py-3 text-white focus:border-purple-500 focus:outline-none transition"
              />
            </div>

            <div>
              <input
                type="text"
                required
                placeholder="Subject"
                className="w-full bg-transparent border border-white/10 rounded-lg px-4 py-3 text-white focus:border-purple-500 focus:outline-none transition"
              />
            </div>

            <div>
              <textarea
                required
                rows="5"
                placeholder="Your Message"
                className="w-full bg-transparent border border-white/10 rounded-lg px-4 py-3 text-white focus:border-purple-500 focus:outline-none transition resize-none"
              />
            </div>

            <button
              type="submit"
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg font-semibold hover:scale-105 transition"
            >
              <Send size={18} />
              Send Message
            </button>

          </form>

        </div>

      </div>
    </section>
  );
};

export default Contact;