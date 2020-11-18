import React from "react";
import Typewriter from 'typewriter-effect'
import { typewriterSpeed } from "../../../data/app"

import '../pageStyles.css'

export const Home = () => {
    const descriptors = ["Creator", "Software Engineer", "Web Developer", "Coder", "Problem-solver", "Geek"]
  return (
    <div className="page home">
      <Typewriter className="cta" options={{
            strings: descriptors, 
            delay: typewriterSpeed, 
            deleteSpeed: typewriterSpeed, 
            autoStart: true, 
            loop: true, 
        }} />
    </div>
  );
};

export default Home;