import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";

export default function Results(props) {
  if (!props.results) {
    return null;
  }

  return (
    <div className="Results">
        <section>
      <h2>{props.results.word}</h2>

      <div className="phonetic-container">
        <Phonetic
          word={props.results.word}
          phoneticText={props.results.phonetic}
        />
      </div>
      </section>

      {props.results.meanings.map(function (meaning, index) {
        return (
          <section key={index}>
            <Meaning meaning={meaning} />
          </section>
        );
      })}
      
    </div>
  );
}
