import React from "react";
import {useState} from "react"


const CallAPIUsingEvent = () => {

  const [getImageUrl, setImageUrl] = useState(null);
  
  const getAPIInfo = (evt) => {
    fetch(`https://dog.ceo/api/breeds/image/random`)
    .then((response) => response.json())
    .then((result) =>  setImageUrl(result.message))
  }

  return (
  <div className="div-par">
    {getImageUrl && <img src={getImageUrl} width="200" height="200"/>}  
    {/* {(getImageUrl != null) ? <img src={getImageUrl} width="200" height="200"/> : null} */}
    <div className="button-container">
      <button type="button" onClick={(e) => {
        getAPIInfo(e);
      }}> Call Get API </button>

      <button type="button" onClick={(e) => {
           setImageUrl(null);
      }}> Clear Get API </button>

      <button type="button" onClick={(e) => {

      }}>Post API</button>
    </div>
  </div>
  )
}

export default CallAPIUsingEvent;