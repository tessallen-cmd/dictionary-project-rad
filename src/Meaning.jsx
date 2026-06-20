import React from "react";

export default function Meaning(props) {
  console.log(props.meaning); // Take a look at this flat structure in your console!

  return (
    <div className="Meaning text-center my-3">
      {/* 1. Displays the part of speech (Noun, Verb, etc.) */}
      <h3>{props.meaning.partOfSpeech}</h3>

      {/* 2. Displays the definition directly (no loop needed!) */}
      <div className="definition-block">
        <p>
          {props.meaning.definition}
          <br />
          {/* 3. Safely display the example if it exists */}
          {props.meaning.example && <em>Example: {props.meaning.example}</em>}
        </p>
      </div>
    </div>
  );
}
