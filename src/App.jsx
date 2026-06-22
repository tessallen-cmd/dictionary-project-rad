import React from "react";
import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary.jsx";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo  " alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>

        <footer className="App-footer text-center">
          <small>
            coded by Tess Allen & SheCodes
            <br />
            <a
              href="https://github.com/tessallen-cmd/dictionary-project-rad"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted"
            >
              open-sourced on GitHub
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
