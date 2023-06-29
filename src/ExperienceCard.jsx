import React, { useState, useEffect } from "react";
import placeholder from "./assets/placeholder.jpg";

/** DESCRIPTION
 *
 * Props:
 *
 * State:
 *
 * PARENT -> ExperienceCard -> {CHILDREN}
 */

function ExperienceCard() {
  return (
    <div className="job-card col-8 mx-auto border border-primary mb-5">
      <div className="col-2 border border-primary hide-on-small">
        <img
          src={placeholder}
          className="img-fluid img-thumbnail rounded-start"
          alt="..."
        />
      </div>
      <div className="d-flex flex-column text-start border border-primary w-100">
        <h2 className="w-100">CarGurus</h2>
        <h5 className="w-100">Sale Bro</h5>
        <h6 className="w-100">Boston</h6>
        <h6 className="w-100">2015-2016</h6>
        <p className="w-100">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugit earum distinctio velit corporis, recusandae praesentium aliquam quae quisquam quo voluptatibus sunt saepe! Soluta tempora omnis, officia corrupti in ducimus est voluptates, fuga nesciunt iusto amet maxime, quod necessitatibus possimus!</p>
      </div>
    </div>
    // <div className="card mb-3 col-8" style={{ "max-width": "760px" }}>
    //   <div className="row g-0">
    //     <div className="col-4 col-md-2">
    //       <img
    //         src={placeholder}
    //         className="img-fluid img-thumbnail rounded-start"
    //         alt="..."
    //       />
    //     </div>
    //     <div className="col-6 text-start">
    //       <h5 className="card-title">Job Title</h5>
    //       <h6 className="card-title">4/2016-5/2017</h6>
    //       <p className="card-text">resume bullets/highlight</p>
    //     </div>
    //   </div>
    // </div>
  );
}

export default ExperienceCard;
