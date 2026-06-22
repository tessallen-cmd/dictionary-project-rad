import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  console.log(props.meaning); // Take a look at this flat structure in your console!

  return (
    <div className="Meaning my-3">
      {/* 1. Displays the part of speech (Noun, Verb, etc.) */}
      <h3>{props.meaning.partOfSpeech}</h3>

      {/* 2. Displays the definition and example stacked and bold */}
      <div className="definition-block">
        <div className="mb-2">
         <div className="definition">
          {props.meaning.definition}
          </div>
        </div>

        {/* 3. Safely display the example if it exists */}
        {props.meaning.example && (
          <div className="mb-2">
            
            <div className=" example text-muted">
                {props.meaning.example}
                </div>
          </div>
        )}
      </div>

      {/* 4. Synonyms safely outside the paragraph block */}
      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}
