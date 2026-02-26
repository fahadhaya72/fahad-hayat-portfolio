import React, { useEffect } from "react";
import { animate } from "animejs";

export default function CyberBackground() {

  useEffect(() => {

    animate(".cyber-grid", {
      opacity: [0, 0.2],
      duration: 2000,
      easing: "easeOutExpo"
    });

    animate(".cyber-radar", {
      scale: [0.6, 1.4],
      opacity: [0.5, 0],
      duration: 2500,
      easing: "easeOutExpo",
      loop: true
    });

  }, []);

  return (
    <>
      {/* Grid */}
      <div className="cyber-grid absolute inset-0 opacity-0">

        <div className="
          absolute inset-0
          bg-[linear-gradient(to_right,#6b21a8_1px,transparent_1px),
              linear-gradient(to_bottom,#6b21a8_1px,transparent_1px)]
          bg-[size:60px_60px]
        " />

      </div>

      {/* Radar */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">

        <div className="cyber-radar absolute w-[500px] h-[500px] border border-purple-500 rounded-full opacity-0" />

      </div>
    </>
  );
}