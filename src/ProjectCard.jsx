import React, { useState, useEffect } from "react";

/** DESCRIPTION
 *
 * Props:
 *
 * State:
 *
 * PARENT -> ProjectCard -> {CHILDREN}
 */

// {
//   name: "example",
//   image: placeholder,
//   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus id velit quis tincidunt. Vestibulum eu suscipit nisl. Sed porttitor nisi ut ligula interdum rutrum.",
// }

function ProjectCard({ project }) {
//TODO:make into links
//TODO:transition to real data/API
//TODO:add a visual hover effect when someone mouses over the project
//TODO:make these a little bit smaller,

  return (
    <div className="card" style={{width: "18rem"}}>
      <img src={project.image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{project.name}</h5>
        <p className="card-text">{project.description}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
