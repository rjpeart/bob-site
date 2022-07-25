import React from "react";
import { Link } from "react-router-dom";

import ProjectItem from "./ProjectItem";

const ProjectList = (props) => {
  return (
    <div>
      {props.data.map((projects) => (
        <Link to={"/project/" + projects.slug.current}>
          <ProjectItem
            key={projects._id}
            projectTitle={projects.title}
            backgroundColor={projects.color}
          />
        </Link>
      ))}
    </div>
  );
};

export default ProjectList;
