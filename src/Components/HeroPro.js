import React, { Component } from "react";
import "./HeroPro.css";


class HeroPro extends Component  {
    render(){
  return (
    <div className="hero-img">
      <div className="heading">
        <h1>{this.props.heading}</h1>
        <p>{this.props.text}</p>
      </div>
    </div>
  );
    }

};

export default HeroPro;
