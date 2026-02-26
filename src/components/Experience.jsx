import React, { useEffect } from "react";
import { animate, stagger } from "animejs";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Frontend Developer Intern",
    company: "Rapido – Vadodara",
    period: "Nov 2024 - May 2025",
    description: [
      "Developed and maintained responsive web applications using React.js and TypeScript",
      "Collaborated with UI/UX designers to implement pixel-perfect interfaces",
      "Optimized application performance and improved load times by 30%",
      "Participated in code reviews and contributed to team knowledge sharing",
    ],
    tech: ["React.js", "TypeScript", "Material UI"],
  },
  {
    role: "Senior Web Developer",
    company: "FuelFlux Technology",
    period: "May 2025 - Sept 2025",
    description: [
      "Assisted in developing and maintaining client websites using MERN stack",
      "Implemented responsive designs and ensured cross-browser compatibility",
      "Customized themes, plugins, and web components",
      "Collaborated with team members to improve UI/UX and performance",
    ],
    tech: ["React", "Tailwind", "Node.js", "MongoDB"],
  },
  {
    role: "Freelance Full-Stack Developer",
    company: "Self Employed",
    period: "Oct 2025 - Present",
    description: [
      "Built and deployed full-stack applications using MERN stack",
      "Designed secure REST APIs and integrated databases",
      "Delivered scalable, responsive, and optimized web solutions",
      "Worked on cybersecurity tools including vulnerability scanners",
    ],
    tech: ["React", "Node.js", "MongoDB", "REST APIs"],
  },
];

const Experience = () => {
  useEffect(() => {
    animate(".timeline-line", {
      scaleY: [0, 1],
      duration: 1500,
      easing: "ease-out-expo",
    });

    animate(".experience-card", {
      translateY: [100, 0],
      opacity: [0, 1],
      delay: stagger(250),
      duration: 1200,
      easing: "ease-out-expo",
    });

    animate(".timeline-dot", {
      scale: [0, 1],
      opacity: [0, 1],
      delay: stagger(250),
      duration: 800,
      easing: "ease-out-back",
    });
  }, []);

  return (
    <section
      id="experience"
      className="relative py-24 px-6 bg-gradient-to-b from-[#070816] via-[#0a0f2c] to-[#070816]"
    >
      {/* Heading */}
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text">
          Work Experience
        </h2>

        <p className="text-gray-400 mt-3">
          My professional journey
        </p>
      </div>

      {/* Timeline container */}
      <div className="relative max-w-5xl mx-auto">

        {/* Timeline line */}
        <div className="timeline-line absolute left-1/2 top-0 w-[3px] h-full bg-gradient-to-b from-purple-500 via-cyan-500 to-purple-500 origin-top"></div>

        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`experience-card relative mb-16 flex ${
              index % 2 === 0
                ? "justify-start pr-8"
                : "justify-end pl-8"
            }`}
          >
            {/* Dot */}
            <div className="timeline-dot absolute left-1/2 -translate-x-1/2 w-5 h-5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full border-4 border-[#070816]"></div>

            {/* Card */}
            <div className="w-full md:w-[45%] bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 shadow-lg hover:shadow-purple-500/20 transition duration-300">

              {/* Role */}
              <div className="flex items-center gap-3 mb-2">
                <Briefcase className="text-purple-400" size={20} />
                <h3 className="text-xl font-semibold text-white">
                  {exp.role}
                </h3>
              </div>

              {/* Company */}
              <p className="text-purple-400 text-sm mb-1">
                {exp.company}
              </p>

              {/* Period */}
              <p className="text-gray-500 text-sm mb-4">
                {exp.period}
              </p>

              {/* Description */}
              <ul className="space-y-2 text-gray-300 text-sm mb-4">
                {exp.description.map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2">
                {exp.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;