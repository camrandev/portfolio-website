import React, { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import placeholder from "./assets/placeholder.jpg";


/** DESCRIPTION
 *
 * Props:
 *
 * State:
 *
 * PARENT -> Projects -> {CHILDREN}
 */

const data = [
  {
    name: "example",
    image: placeholder,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus id velit quis tincidunt. Vestibulum eu suscipit nisl. Sed porttitor nisi ut ligula interdum rutrum.",
  },
  {
    name: "example",
    image: placeholder,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus id velit quis tincidunt. Vestibulum eu suscipit nisl. Sed porttitor nisi ut ligula interdum rutrum.",
  },
];

function Projects() {
  //state to hold project objects, so I can easily swap them out -> dont need a DB, as this is just links
  const [projects, setProjects] = useState(data);

  //TODO:factor this out to be reusable + take a component as an argument
  function renderProjectCards() {
    return projects.map(project => (
      <ProjectCard key={project.name} project={project} />
    ));
  }

  return (
    <div id="projects">
      <h1>Projects</h1>
      <div className="d-flex justify-content-evenly">

      {renderProjectCards()}
      </div>
    </div>
  );
}

export default Projects;
