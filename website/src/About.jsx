import React from "react";
import web from "../src/images/webdesign.jpg";
// import {NavLink} from 'react-router-dom';
import Commom from "./Commom";
const About = () =>{
    return(
      <>
      <Commom 
      name="Welcome to About page" 
      imgsrc={web} visit='/contact'
      btname='contact now'
      />
      </>
    )
  }
  
  export default About;