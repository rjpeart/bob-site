import React from "react";
import './ProjectList.css'

import ProjectItem from "./ProjectItem";

const ProjectList = (props) => {

    return(
        <div>
        {props.data.map((projects) => (
        <ProjectItem
        key={projects.id}
        projectTitle = {projects.title}
        backgroundColor = {projects.color}
        />
        ))}
        </div>
    )
}

export default ProjectList;