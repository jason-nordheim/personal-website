import React from "react";
import Typewriter from 'typewriter-effect'

export const Home = () => {
    const descriptors = ["Creator", "Software Engineer", "Web Developer", "Coder", "Problem-solver", "Geek"]
    const speed = 35 
  return (
    <div className="page home">
      <Typewriter className="cta" options={{
            strings: descriptors, 
            delay: speed, 
            deleteSpeed: speed, 
            autoStart: true, 
            loop: true, 
        }} />
    </div>
  );
};

export default Home;
