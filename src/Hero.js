// import logo from "./logo.svg";
import "./App.css";
import background from "./MovieNights4.jpg";
import React from 'react';
import 'antd/dist/antd.css';


function Hero() {

  

  return (
    
      <div
        className="Hearo"
        style={{
          height: "50vh",
          width: "100%",
          backgroundColor: "RED",
          backgroundImage: "url(" + background + ")",
        }}
      >
        <h1 id="test-Txt-l1">let's have</h1>
        <h1 id="test-Txt-l2">a</h1>
        <h1 id="test-Txt-l3">Magical Movie Night</h1>
      </div>
      
  );
}

export default Hero;
