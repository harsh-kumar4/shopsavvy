import React from "react";
import "./busi.css";

function busi() {
  return (
    <div className="contact">
      <h1>Business Info</h1>
      <form>
        <div className="conti">
          <h2> Business Name</h2>
          <input type="text" />
          <h2>Contact no.</h2>
          <input type="text" />
          <h2>E-mail</h2>
          <input type="text" />
          <h2>Address</h2>
          <textarea type="text" cols="20" rows="10" />
          <h2>Business Description</h2>
          <textarea type="text" cols="20" rows="10" />
        </div>
      </form>
      <button  onClick={()=>{
        alert("response submitted");
        console.log("ho")
      }} className="btn">Submit</button>
    </div>
  );
}

export default busi;
