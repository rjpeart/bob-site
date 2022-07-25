import React, { useState, useEffect } from "react";
import Projects from "./Projects";
import Bio from "./Bio.js"
import Header from "./Header.js"

import sanityClient from "../client.js";

const Home = () => {

//   const projectData = [
//     {
//       id: 1,
//       title : "Yeah! Meshi",
//       type: "money",
//       color: "#F2F2F2"
//     },
//     {
//       id: 2,
//       title : "DelftWarez",
//       type: "fun",
//       color: "#D2FF5F"
//     },
//     {
//       id: 3,
//       title : "Listening Post",
//       type: "fun",
//       color: "#82FF5F"
//     },
//     {
//       id: 4,
//       title : "HomeFarm",
//       type: "money",
//       color: "#E0E0E0"
//     },
//     {
//       id: 5,
//       title : "BT",
//       type: "money",
//       color: "#BDBDBD"
//     }
//   ]

  const [projectData, setProject] =  useState(null);

  useEffect(() => {
    sanityClient
        .fetch(`*[_type == "project"]{
            title,
            slug,
            projectType,
            _id,
            color
        }`)
        .then((data) => {
          setProject(data)
        })
        .catch(console.error)
  },[])

  return (
    <div>
      <Header />
      <Projects data={projectData} />
      <Bio />
    </div>
  );
}

export default Home