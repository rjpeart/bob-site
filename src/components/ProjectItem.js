import React from "react";
import './ProjectItem.css'

const ProjectItem = (props) => {
    return(
        <div className="px-8 py-4 transition duration-800"  style={{backgroundColor: props.backgroundColor}}>
            <h1 className="text-5xl">
                {props.projectTitle}
            </h1>
        </div>
    );
}

export default ProjectItem