import React from "react";

const Feature2 = (props)=>{
    
    return (
        <div>
             <img src={props.data.src} alt="Live-Order" width="120" height="206" />
            <h4>{props.data.heading}</h4>
            <p className="description">{props.data.description}</p>
        </div>
    )
}

export default Feature2;