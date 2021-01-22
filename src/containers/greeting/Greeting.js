import React, { useContext } from "react";
import { Fade, Slide } from "react-reveal";
import emoji from "react-easy-emoji";
import "./Greeting.css";
import landingPerson from "../../assets/lottie/landingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";

import { illustration, greeting } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Greeting() {
  const { isDark } = useContext(StyleContext);
  if (!greeting.displayGreeting) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1
                className={isDark ? "dark-mode greeting-text" : "greeting-text"}
              >
                {" "}
                {greeting.title}{" "}
                <span className="wave-emoji">{emoji("👋")}</span>
              </h1>
              <Slide left duration={2000}>
                {greeting.subTitle.map((p, i) => (
                  <div key={i}>
                    <p className={i !== 0 ? "indent" : null}>
                      {i === 0 ? `[  ` : ``}
                      {p}
                      {i !== greeting.subTitle.length - 1 ? " ," : " ];"}
                    </p>
                  </div>
                ))}
              </Slide>
              <SocialMedia />
              <div className="button-greeting-div">
                <Button text="Contact me" href="#contact" />
                {/* <Button
                  text="See my resume"
                  newTab={true}
                  href={greeting.resumeLink}
                /> */}
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            {illustration.animated ? (
              <DisplayLottie animationData={landingPerson} />
            ) : (
              <img
                alt="man sitting on table"
                src={require("../../assets/images/manOnTable.svg")}
              ></img>
            )}
          </div>
        </div>
      </div>
    </Fade>
  );
}
