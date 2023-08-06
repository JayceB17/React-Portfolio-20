import React from "react";
import ".project.css";
import WritersCorner from "../../assets/WritersCorner.png"
import WhatWeDrinkin from "../../assets/whatWeDrinkin.png"
import GoldenBuddies from "../../assets/goldenBuddies.png"
import ProjectItem from "../Portfolio.js";

<link rel="stylesheet" type="text/css" href="../style.css"/>

function Projects() {
    return (
      <div className="projects">
        <h1></h1>
        <div className="projectList">
            
            <a href="https://github.com/BrockHanni/Writers-Corner"> 
            <ProjectItem name="Writers Corner" image={WritersCorner} /> 
            </a>

            <a href="https://github.com/13Blackmagic/What-we-drinkin">
            <ProjectItem name="What we drinkin" image={WhatWeDrinkin}/>
            </a>

            <a href="https://github.com/burrielrush/GoldenBuddies">
            <ProjectItem name="Golden Buddies" image={GoldenBuddies}/>
            </a>
      </div>
    </div>
  );
}
export default Projects