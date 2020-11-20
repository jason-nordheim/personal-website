import React from "react";
import Typewriter from "typewriter-effect";
import { typewriterSpeed } from "../../../data/app";
import { intros } from "../../../data/home";

export const Terminal = () => {
  const descriptors = intros.map((x) => x.typewriter);
  return (
    <section className="terminal-wrapper">
      <div className="terminal-header">
        <p>My name is <em>Jason Nordheim</em> and...</p>
      </div>
      <div className="terminal no-select">
        <span className="terminal-blink">{"~"}</span>
        <span className="terminal-static">I am</span>
        <Typewriter
          className="terminal-dynamic"
          options={{
            strings: descriptors,
            delay: typewriterSpeed,
            cursor: "▎",
            deleteSpeed: typewriterSpeed,
            autoStart: true,
            loop: true,
          }}
        />
      </div>
    </section>
  );
};
