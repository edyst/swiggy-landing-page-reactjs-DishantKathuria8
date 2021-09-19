import React from "react";

const Feature1 = (props)=>{
    
    return (
        <div>
            <img src={props.data.src} alt="Minimum-order" width="115" height="200" />
            <h4>{props.data.heading}</h4>
            <p className="description">{props.data.description}</p>
        </div>
    )
}

export default Feature1;