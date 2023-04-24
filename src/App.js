import React from "react";
import "./style.css";
import ImdbComponent from './ImdbComponent'
import FetchDataFromAPI from './FetchDataFromAPI'
import CallAPIUsingEvent from './CallAPIUsingEvent'

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      {/* <ImdbComponent/> */}
      {/* <FetchDataFromAPI/> */}
      <CallAPIUsingEvent/>
    </div>
  );
}
