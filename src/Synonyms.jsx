import React from "react";
import"./Synonyms";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <ul className="Synonyms">
        {props.synonyms.map(function (synonym, index) {
          return (
            <li key={index} className="synonym">
              <strong>{synonym}</strong>
            </li>
          );
        })}
      </ul>
    );
  } else {
    return null;
  }
}
