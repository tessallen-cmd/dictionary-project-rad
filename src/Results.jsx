import React from "react";
import Meaning from "./Meaning";

export default function Results(props) {
  // 1. Guard Clause: If there is NO data yet, return null (render nothing)
  if (!props.results) {
    return null;
  }

  // 2. Otherwise, we HAVE data! Render everything safely down here:
  return (
    <div className="Results text-center">
      <h2>{props.results.word}</h2>

      {props.results.meanings.map(function (meaning, index) {
        return (
          <div key={index}>
            <Meaning meaning={meaning} />
          </div>
        );
      })}
    </div>
  );
}
