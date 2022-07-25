import React, { useState } from "react";

import ProjectList from "./ProjectList";
import Menu from "./Menu";

const Projects = (props) => {
    const [filteredType, setFilteredType] = useState("money")
    const propsData = props.data

    const typeUpdateHandler = (type) => {
        setFilteredType(type)
    }


    const filteredProjects = props.data ? 
        props.data.filter((project) => {
        return project.projectType === filteredType;
        }) : []

    return (
        <div>
            <Menu 
            selected= {filteredType}
            onChangeProjectType={typeUpdateHandler}/>
            {propsData==="null" ? <h1>loading</h1> : <ProjectList data={filteredProjects}/>}
            
        </div>
    )
}

export default Projects;