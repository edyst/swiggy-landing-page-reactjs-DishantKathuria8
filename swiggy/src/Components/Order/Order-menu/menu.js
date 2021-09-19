import React from "react";


const Menu = (props)=>{
    const {heading,description}=props
    return(
        <div className="menu">
            <h3 className="heading">{heading}</h3>
            <p className="para">{description}</p>
            <div className="images">
                <a href="/img1"><img className="stores" height="60" width="200" src="https://web.archive.org/web/20210903174711im_/https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_108/play_ip0jfp"  alt="play-store"/></a>
                <a href="/img2"><img className="stores" height="60" width="200" src="https://web.archive.org/web/20210903174711im_/https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_108/iOS_ajgrty"  alt="app-store"/></a>
            </div>
        </div>
    )
}

export default Menu;