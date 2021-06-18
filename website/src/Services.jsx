import React from "react";
// import web from "../src/images/th.jpg";
import Card from "./Card";
import Sdata from "./Sdata";


const Services = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Our Services</h1>
      </div>
      <div className="container-fluid mb-5 ">
   
            <div className="row">
              <div className="col-10 mx-auto">
                <div className="row gy-4"> 
                {/* ****use {} for javascript part**** */}

                {
                  Sdata.map((val,ind) =>{
                    return <Card 
                      key={ind}
                      img_src={val.imgsrc}
                      title_s={val.title}
                    />
                  })
                }
                </div>
              </div>
            </div>
          </div>
     
    </>
  )
}

export default Services;