import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";
import "./Results.css";
import "./Meaning.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    console.log(response.data);
    setResults(response.data);
  }

  function handleImageResponse(response) {
    console.log(response.data.photos);
    setPhotos(response.data.photos);
  }

  function search() {
    let apiKey = "9117d16f27ad34748062df20bto34069";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);

    // Triggers images on user search
    let imageApiKey = "9117d16f27ad34748062df20bto34069";
    let imageApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${imageApiKey}`;
    axios.get(imageApiUrl).then(handleImageResponse);
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
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${props.defaultKeyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);

    // Triggers images on initial page load
    let imageApiKey = "9117d16f27ad34748062df20bto34069";
    let imageApiUrl = `https://api.shecodes.io/images/v1/search?query=${props.defaultKeyword}&key=${imageApiKey}`;
    axios.get(imageApiUrl).then(handleImageResponse);
  }

  if (loaded) {
    return (
      <div className="Dictionary ps-3">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <section>
              <h1>What word do you want to look up?</h1>
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
        {/* Changed tag to <Photos /> to perfectly match your import at the top */}
        
        <Results results={results} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
