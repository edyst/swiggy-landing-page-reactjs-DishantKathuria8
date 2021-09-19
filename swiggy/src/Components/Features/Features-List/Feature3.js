import React from "react";

const Feature3 = (props)=>{
    
    return (
        <div>
             <img className="image" src={props.data.src} alt="Fast Delivery" width="124" height="210" />
             <h4>{props.data.heading}</h4>
             <p className="description">{props.data.description}</p>
        </div>
    )
}

export default Feature3;