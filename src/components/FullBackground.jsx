import React from "react";
import teal from "../assets/backgrounds/blob-teal.png";
import purple from "../assets/backgrounds/blob-purple.png";
import mesh from "../assets/backgrounds/blob-mesh.png";
import mockup from "../assets/backgrounds/ui-mockup.png";

export default function FullBackground() {
  return (
    <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">

      {/* top-left blob */}
      <img
        src={teal}
        className="absolute top-[-50px] left-[-50px] w-[350px] opacity-60 blur-sm animate-float-slow"
        alt=""
      />

      {/* top-right glow */}
      <img
        src={purple}
        className="absolute top-[-80px] right-[-80px] w-[400px] opacity-50 blur-sm animate-float-medium"
        alt=""
      />

      {/* bottom-left mesh */}
      <img
        src={mesh}
        className="absolute bottom-[-60px] left-[-40px] w-[380px] opacity-50 blur-sm animate-float-slow"
        alt=""
      />

      {/* bottom-right UI mockup */}
      <img
        src={mockup}
        className="absolute bottom-[-30px] right-[0px] w-[450px] opacity-50 animate-float-medium"
        alt=""
      />
    </div>
  );
}
