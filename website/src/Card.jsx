import React from "react";
import web from "../src/images/th.jpg";
import { NavLink } from "react-router-dom";

const Card = (props) => {
    return (
        <>

            <div className="col-md-4 col-10 mx-auto">
           
                    {/* ****************** CARD start from here******************* */}
                    <div class="card">
                        <img src={props.img_src} class="card-img-top" alt="image" />
                        <div class="card-body">
                            <h5 class="card-title">{props.title_s}</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <NavLink to="" class="btn btn-primary">Go somewhere</NavLink>
                        </div>
                    </div>
                    {/* ****************** CARD end to here******************* */}
            
            </div>
        </>
    )
}

export default Card;

