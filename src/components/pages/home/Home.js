import React from "react";
import Typewriter from 'typewriter-effect'
import { typewriterSpeed } from "../../../data/app"
import { intros } from '../../../data/about'

import '../pageStyles.css'
import './Home.css'

export const Home = () => {
  const descriptors = intros.map(x => x.typewriter)
  return (
    <div className="home">
      <section>
        <h1>Welcome</h1>
      </section>
      <div className="cta-wrapper">
        <div className="cta no-select">
        <span className="blink">></span>
        <span>I am </span>
        <Typewriter className="cta" options={{
              strings: descriptors, 
              delay: typewriterSpeed, 
              cursor: '▎', 
              deleteSpeed: typewriterSpeed, 
              autoStart: true, 
              loop: true, 
          }} />
        </div>
      </div>
    </div>
  );
};

export default Home;
