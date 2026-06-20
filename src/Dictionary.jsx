import  React, {useState} from "react";
import axios from"axios";
import Results from "./Results";
import "./Dictionary.css";



export default function Dictionary(){
let[ keyword,setKeyword]=useState("");
let[results, setResults] =useState(null);

function handleResponse(response){
   console.log(response.data);
   setResults(response.data);
}
    function search(event) {
      event.preventDefault();
     
      // 1. Create a clean variable for your API key
      let apiKey = "9117d16f27ad34748062df20bto34069";

      // 2. Change your URL to use BACKTICKS ( ` ) and the ${ } syntax
      let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;

      axios.get(apiUrl).then(handleResponse);
    }



function handleKeywordChange(event){
    setKeyword(event.target.value);
}


    return (
  <div className="Dictionary ps-3">
    {/* Centering the form using Bootstrap utilities */}
    <div className="row justify-content-center">
      <div className="col-md-6 text-center">
        <form onSubmit={search} className="d-flex justify-content-center">
          <input 
            type="search" 
            onChange={handleKeywordChange} 
            className="form-control text-center w-100" 
            placeholder="Search for a word..."
          />
        </form>
      </div>
    </div>
    
    <Results results={results} />
  </div>
);
}