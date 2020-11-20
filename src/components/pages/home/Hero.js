import React from 'react' 
import Typewriter from 'typewriter-effect'
import { typewriterSpeed } from "../../../data/app"
import { intros } from '../../../data/home'

export const Hero = () => {
    const descriptors = intros.map(x => x.typewriter)
    return (
        <div className="hero-wrapper">
        <div className="hero no-select">
        <span className="blink">{"~"}</span>
        <span>I am </span>
        <Typewriter className="hero" options={{
              strings: descriptors, 
              delay: typewriterSpeed, 
              cursor: '▎', 
              deleteSpeed: typewriterSpeed, 
              autoStart: true, 
              loop: true, 
          }} />
        </div>
      </div>
    )
}