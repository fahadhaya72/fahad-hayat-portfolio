import { useEffect } from "react";
import { animate, stagger } from "animejs";
import CyberBackground from "../components/CyberBackground";

export default function Skills() {

  const skills = [

    {
      category: "Application Security",
      icon: "🛡️",
      items: [
        { name: "Vulnerability Assessment", level: 90 },
        { name: "Penetration Testing", level: 85 },
        { name: "OWASP Top 10", level: 88 },
        { name: "Privilege Escalation", level: 80 },
        { name: "Threat Analysis", level: 82 }
      ]
    },

    {
      category: "Networking & Infrastructure",
      icon: "🌐",
      items: [
        { name: "TCP/IP & Subnetting", level: 88 },
        { name: "Network Security", level: 86 },
        { name: "Packet Analysis", level: 83 },
        { name: "Firewall Configuration", level: 78 },
        { name: "Traffic Monitoring", level: 80 }
      ]
    },

    {
      category: "Programming & Development",
      icon: "💻",
      items: [
        { name: "Python", level: 92 },
        { name: "JavaScript", level: 90 },
        { name: "React", level: 88 },
        { name: "Node.js", level: 87 },
        { name: "Flask", level: 85 }
      ]
    },

    {
      category: "Security Tools & Platforms",
      icon: "⚙️",
      items: [
        { name: "Nmap", level: 90 },
        { name: "Wireshark", level: 82 },
        { name: "Burp Suite", level: 85 },
        { name: "Linux Security", level: 88 },
        { name: "Docker", level: 75 }
      ]
    }

  ];


  useEffect(() => {

    animate(".cyber-animate", {
      opacity: [0, 1],
      translateY: [40, 0],
      delay: stagger(120),
      duration: 1000,
      easing: "easeOutExpo"
    });

    animate(".skill-bar-fill", {
      width: (el) => el.dataset.level + "%",
      delay: stagger(150),
      duration: 1400,
      easing: "easeOutExpo"
    });

  }, []);


  return (

    <section
      id="skills"
      className="relative min-h-screen bg-black text-white py-24 px-6 overflow-hidden"
    >

      <CyberBackground />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* TITLE */}

        <h2 className="
          cyber-animate
          text-5xl font-bold text-center mb-20
          bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500
          text-transparent bg-clip-text
        ">
          Security Capabilities
        </h2>


        {/* PANELS */}

        <div className="grid md:grid-cols-2 gap-10">

          {skills.map((group, index) => (

            <div
              key={index}
              className="
                cyber-animate
                cyber-card
                rounded-xl
                p-8
              "
            >

              {/* CATEGORY TITLE */}

              <div className="flex items-center gap-3 mb-8">

                <span className="text-2xl">{group.icon}</span>

                <h3 className="
                  text-xl font-semibold
                  bg-gradient-to-r from-purple-400 to-blue-500
                  text-transparent bg-clip-text
                ">
                  {group.category}
                </h3>

              </div>


              {/* SKILLS */}

              <div className="space-y-6">

                {group.items.map((skill, i) => (

                  <div key={i}>

                    <div className="flex justify-between mb-2">

                      <span className="text-gray-300">
                        {skill.name}
                      </span>

                      <span className="text-purple-400">
                        {skill.level}%
                      </span>

                    </div>


                    {/* BAR */}

                    <div className="w-full h-2 bg-white/10 rounded">

                      <div
                        data-level={skill.level}
                        className="
                          skill-bar-fill
                          h-2
                          bg-gradient-to-r
                          from-purple-500
                          to-blue-500
                          rounded
                          w-0
                        "
                      />

                    </div>

                  </div>

                ))}

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>

  );

}