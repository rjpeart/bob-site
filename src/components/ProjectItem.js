import React from "react";
const ProjectItem = (props) => {
  return (
    <div
      className="px-8 py-4 transition duration-800"
      style={{ backgroundColor: props.backgroundColor }}
    >
        <h1 className="text-5xl pr-2">{props.projectTitle}</h1>
    </div>
  );
};

export default ProjectItem;
