import React from "react";
import Feature1 from "./Features-List/Feature1";
import Feature2 from "./Features-List/Feature2";
import Feature3 from "./Features-List/Feature3";
import './Features-List/Feature.css';


const Feature = ()=>{
    const data1={
        src:"https://web.archive.org/web/20210903174711im_/https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_210,h_398/4x_-_No_min_order_x0bxuf",
        heading:"No Minimum Order",
        description:"Order in for yourself or for the group, with no restrictions on order value"
    }
    const data2={
        src:"https://web.archive.org/web/20210903174711im_/https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_224,h_412/4x_Live_order_zzotwy",
        heading:"Live Order Tracking",
        description:"Know where your order is at all times, from the restaurant to your doorstep"
    }
    const data3={
        src:"https://web.archive.org/web/20210903174711im_/https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_248,h_376/4x_-_Super_fast_delivery_awv7sn",
        heading:"Lightning-Fast Delivery",
        description:"Experience Swiggy's superfast delivery for food delivered fresh & on time"
    }

    return (
        <div className="feature-container">
            <div className="features">
                <Feature1 data={data1}/>
                <Feature2 data={data2}/>
                <Feature3 data={data3}/>
            </div>
        </div>
    )
}

export default Feature;