import  React, {useState} from "react";
import axios from"axios";
import "./Dictionary.css";


export default function Dictionary(){
let[ keyword,setKeyword]=useState("");

function handleResponse(response){
    console.log(response.data);
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


    return(
    <div className= "Dictionary ps-3">
      <form onSubmit={search}>
        <input type ="search" onChange={handleKeywordChange} /> 
        </form>    
    </div>
    );
}