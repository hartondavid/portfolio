import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      style={{ color: "red" }}
      options={{
        strings: [
          "Full Stack Developer",
          "Node.js Developer",
          "React.js Developer",
          "Java Developer",
          "Freelancer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
