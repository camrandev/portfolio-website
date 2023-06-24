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
    <div className="card mb-3" style={{ "max-width": "540px" }}>
      <div className="row g-0">
        <div className="col-md-2">
          <img
            src={placeholder}
            className="img-fluid rounded-start"
            alt="..."
          />
        </div>
        <div className="col-md-10">
          <div className="card-body">
            <h5 className="card-title">Job Title</h5>
            <p className="card-text">resume bullets/highlight</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExperienceCard;
