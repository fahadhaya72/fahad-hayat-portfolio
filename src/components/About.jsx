import { motion } from "framer-motion";
import CyberBackground from "./CyberBackground";

export default function About() {

  return (

    <section
      id="about"
      className="relative min-h-screen bg-black text-white py-24 px-6 scroll-mt-20 overflow-hidden"
    >

      {/* cyber background layer */}
      <CyberBackground />

      <div className="max-w-4xl mx-auto">


        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="cyber-animate text-center mb-16"
        >

          <h2 className="text-4xl font-bold text-purple-400 mb-2 bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 text-transparent bg-clip-text">
            About Me
          </h2>

          <div className="w-20 h-1 bg-purple-500 mx-auto rounded"></div>

        </motion.div>



        {/* Content */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="cyber-animate space-y-6 text-gray-300 leading-relaxed text-lg"
        >


          <p>
            Hello! I'm Fahad Hayat, a security-focused software engineer with a strong
            foundation in full-stack development, networking, and application security.
            I specialize in building secure, scalable systems while identifying and
            mitigating real-world vulnerabilities in modern applications.
          </p>


          <p>
            My development background in the MERN stack (MongoDB, Express.js, React.js,
            Node.js), combined with Python and Flask, allows me to understand applications
            from both developer and attacker perspectives. This enables me to analyze
            system weaknesses, perform vulnerability assessments, and implement secure
            architectures that resist modern attack techniques.
          </p>


          <p>
            I actively build and work on cybersecurity tools including automated
            vulnerability scanners, AI-powered honeypots, and real-time threat detection
            systems. My hands-on experience with tools such as Nmap, Wireshark, Burp Suite,
            and Linux security environments allows me to simulate real-world attack
            scenarios and strengthen defensive security mechanisms.
          </p>


          <p>
            Currently pursuing my Bachelor of Technology (B-Tech) in Information Technology
            (June 2023 – May 2027), I am focused on advancing my expertise in networking,
            penetration testing, and application security with the goal of becoming an
            Application Security Engineer.
          </p>


          <p>
            My objective is to secure modern applications and infrastructure by combining
            secure development practices with offensive and defensive security techniques,
            helping organizations identify vulnerabilities and protect critical systems.
          </p>


        </motion.div>



        {/* Education Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="cyber-animate
            mt-16
            bg-white/5
            border border-purple-500/20
            backdrop-blur-lg
            rounded-xl
            p-6
          "
        >

          <h3 className="text-xl font-semibold text-purple-400 mb-3">
            Education
          </h3>

          <p className="text-white font-medium">
            Bachelor of Technology (B-Tech) in Information Technology
          </p>

          <p className="text-gray-400">
            June 2023 – May 2027
          </p>

        </motion.div>



        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="cyber-animate flex gap-4 mt-10"
        >

          <a
            href="#contact"
            className="
              px-6 py-3
              rounded-lg
              bg-purple-600
              hover:bg-purple-500
              transition
              font-medium
            "
          >
            Hire Me
          </a>


          <a
            href="/resume1.pdf"
            download
            className="
              px-6 py-3
              rounded-lg
              border border-purple-500
              text-purple-400
              hover:bg-purple-500 hover:text-black
              transition
              font-medium
            "
          >
            Download CV
          </a>


        </motion.div>



      </div>

    </section>

  );

}