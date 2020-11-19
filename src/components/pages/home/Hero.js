import React from 'react' 
import Typewriter from 'typewriter-effect'
import { typewriterSpeed } from "../../../data/app"
import { intros } from '../../../data/about'

export const Hero = () => {
    const descriptors = intros.map(x => x.typewriter)
    return (
        <div className="cta-wrapper">
        <div className="cta no-select">
        <span className="blink">{">"}</span>
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
    )
}