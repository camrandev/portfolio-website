import React, { useState, useEffect } from "react";
import ExperienceCard from "./ExperienceCard";

/** DESCRIPTION
 *
 * Props:
 *
 * State:
 *
 * PARENT -> Experience -> {CHILDREN}
 */

//TODO:add experience data source to generate experience Cards from
function Experience() {
  //NOTE:dummy data, review
  const jobs = [1, 2, 3, 4];
  function renderJobCards() {
    return jobs.map((job) => <ExperienceCard key={job.name} job={job} />);
  }

  return (
    <div id="experience">
      <h2 className="text-center">Experience</h2>
      <div>
        {renderJobCards()}
      </div>
    </div>
  );
}

export default Experience;
