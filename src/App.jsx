import React from "react";
import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary.jsx";

function App() {
  return (
    <div className="App">
      <div classname="container">
        <header className="App-header">
          <img src={logo} className="App-logo  " alt="logo" />
        </header>
        <main>
          <Dictionary />
        </main>

        <footer className= "App-footer ">
          {" "}
          
          <small>coded by SheCodes </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
