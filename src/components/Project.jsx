import React from "react";
import "./Project.css";

const Project = ({project}) => {
  return (
    <div className="project">
      <img
        src={project.image}
        alt=""
      />
      <div className="text">
        <p>{project.title}</p>
      </div>
    </div>
  );
};

export default Project;