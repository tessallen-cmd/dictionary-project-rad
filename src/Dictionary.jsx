import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";
import "./Results.css";
import "./Meaning.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    console.log(response.data);
    setResults(response.data);
  }

  function search() {
    let apiKey = "9117d16f27ad34748062df20bto34069";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    let apiKey = "9117d16f27ad34748062df20bto34069";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=sunset&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  // 1. The "IF" switch sits inside the function now
  if (loaded) {
    return (
      <div className="Dictionary ps-3">
        <div className="row justify-content-center">
          <div className="col-md-6 ">
            <section>
                <h1> What word do you want to look up?</h1>
              <form
                onSubmit={handleSubmit}
                className="d-flex justify-content-center"
              >
                <input
                  type="search"
                  onChange={handleKeywordChange}
                  className="form-control text-center w-100"
                  defaultValue={props.defaultKeyword}
                />
              </form>
              <div className="hint">
                suggested words: sunset, yoga, wine, forest..
              </div>
            </section>
          </div>
        </div>

        <Results results={results} />
      </div>
    );
    // 2. The "ELSE" block perfectly matches the "IF" above it
  } else {
    load();
    return "Loading...";
  }
} // 3. This single brace safely closes the entire component
