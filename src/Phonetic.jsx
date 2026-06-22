import React from "react";
import "./Phonetic.css"

export default function Phonetic(props) {
  function handleListen(event) {
    event.preventDefault();
    if (props.word) {
      // Use the browser's built-in speaker system
      const utterance = new SpeechSynthesisUtterance(props.word);
      window.speechSynthesis.speak(utterance);
    }
  }

  return (
    <div
      className="Phonetic"
      style={{ marginTop: "10px", marginBottom: "10px" }}
    >
      <div style={{ marginBottom: "5px" }}>
        {/* Styled exactly like a link, but speaks out loud when clicked! */}
        <button
          onClick={handleListen}
          
        >
          Listen
        </button>
      </div>

      {props.phoneticText && (
        <div className="phonetic-text" style={{ color: "#6c757d" }}>
          {props.phoneticText}
        </div>
      )}
    </div>
  );
}
