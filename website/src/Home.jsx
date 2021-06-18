import React from "react";
import web from "../src/images/img2.gif";
import {NavLink} from 'react-router-dom';
import Commom from "./Commom";
const Home = () =>{
    return(
      <>
         <Commom 
      name="Grow your business with" 
      imgsrc={web} visit='/service'
      btname='Get started'
      />
      </>
    )
  }
  
  export default Home;