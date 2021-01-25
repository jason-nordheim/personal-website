import React, { useContext } from "react";
import "./Projects.css";
import { projectSection } from "../../portfolio";
import { openInNewWindow } from "../../util/windowUtilities";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import { fadeDuration } from "../../config";

export default function Projects() {
  const { isDark } = useContext(StyleContext);
  if (!projectSection.display) {
    return null;
  }
  return (
    <Fade bottom duration={fadeDuration} distance="20px">
      <div className="main" id="projects">
        <div>
          <h1 className="skills-heading">{projectSection.title}</h1>
          <p
            className={
              isDark
                ? "dark-mode project-subtitle"
                : "subTitle project-subtitle"
            }
          >
            {projectSection.subtitle}
          </p>
          <div className="startup-projects-main">
            <div className="startup-project-text">
              {projectSection.projects.map((project, i) => {
                return (
                  <div
                    key={i}
                    className="photo-div"
                    onClick={() => openInNewWindow(project.link)}
                  >
                    <h4 className="proj-title">{project.title}</h4>
                    <img alt={project.alt} src={project.image}></img>
                    <span className="proj-desc">{project.desc}</span>
                  </div>
                );
              })}
            </div>
            <div className="startup-project-image"></div>
          </div>
        </div>
      </div>
    </Fade>
  );
}
