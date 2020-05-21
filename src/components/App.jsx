import React, { useState } from "react";

function App() {
const[isMousedOver,setMouseOver]=useState(false)
  function eventhandler()
  {
   setMouseOver(true)
  }
 function eventhandling()
 {
   setMouseOver(true)
 }
 function eventout()
 {
   setMouseOver(false)
 }
  return (
    <div className="container">
      <h1>Hello</h1>
      <input type="text" placeholder="What's your name?" />
      <button style={{backgroundColor:isMousedOver?"black":"white"}} onClick={eventhandler}
      onMouseOver={eventhandling}
      onMouseOut={eventout}>Submit</button>
    </div>
  );
}

export default App;
