import React from "react";
import "./Photos.css";

export default function Photos(props) {
  // 1. Safety check: If no photos exist yet, render nothing
  if (!props.photos) {
    return null;
  }

  // 2. Return statement sits inside the function
  return (
    <section className="Photos">
      <div className="row">
        {/* Map through the array of photos */}
        {props.photos.map(function (photo, index) {
          return (
            <div className="col-4" key={index}>
              <a href={photo.src.original} target="_blank" rel="noreferrer">
                <img
                  src={photo.src.landscape}
                  alt={photo.alt}
                  className="img-fluid"
                />
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
} // 3. This single closing brace closes the entire function at the very end
