import React, { useState} from "react";
import './Projects.css'

import ProjectList from "./ProjectList";
import Menu from "./Menu";

const Projects = (props) => {
    const [filteredType, setFilteredType] = useState("money")

    const typeUpdateHandler = (type) => {
        setFilteredType(type)
    }

    const filteredProjects = props.data.filter((project) => {
        return project.type === filteredType;
      });

    return (
        <div>
            <Menu 
            selected= {filteredType}
            onChangeProjectType={typeUpdateHandler}/>
            <ProjectList data={filteredProjects}/>
        </div>
    )
}

export default Projects;