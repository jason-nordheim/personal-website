import React, { useContext } from "react";
import "./Projects.css";
import { bigProjects } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Projects() {
  function openProjectInNewWindow(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }
  const { isDark } = useContext(StyleContext);
  if (!bigProjects.display) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="projects">
        <div>
          <h1 className="skills-heading">{bigProjects.title}</h1>
          <p
            className={
              isDark
                ? "dark-mode project-subtitle"
                : "subTitle project-subtitle"
            }
          >
            {bigProjects.subtitle}
          </p>
          <div className="startup-projects-main">
            <div className="startup-project-text">
              {bigProjects.projects.map((project, i) => {
                return (
                  <div
                    key={i}
                    className="photo-div"
                    onClick={() => openProjectInNewWindow(project.link)}
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
