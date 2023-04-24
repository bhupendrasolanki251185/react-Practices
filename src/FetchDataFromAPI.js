import React from "react"
import {useState, useEffect} from "react"


function callAPIExternally (mess){
  fetch(`https://dog.ceo/api/breeds/image/random`)
  .then((response) => response.json())
  .then((result) => {
    setData(result);
    console.log(result);
  });
 alert("hellodfdsafdsafasd asdf sda fsadf asdf")
}


const FetchDataFromAPI = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://dog.ceo/api/breeds/image/random`)
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      setError(result.status);
      return setData(result.message);
    })
    .catch((err) => setError(err));
  }, []);

  if(error == "error") return <pre> {JSON.stringify(error)} </pre>;
  console.log(data, error)
  if (!data) return null;
  return (
    <div className="App">
      <h1>React & APIs</h1>
      <h2>
        Make a call to this endpoint: https://dog.ceo/api/breeds/image/random
        and display the image on the message field of its payload on the screen!
      </h2>
      <img src={data} width="200" height="200"></img>
      <div>
        <button type="button" onClick={(e) => {
          callAPIExternally();
          <h1>test</h1>
        }}> Call API </button>
      </div>
    </div>
  )
};

export default FetchDataFromAPI;