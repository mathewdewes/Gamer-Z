import React from "react";
import testImage from "../images/matt.JPG";
import { Link } from "react-router-dom";

export default function MarketPlace(props){
    return(
<div className="listing">
    <div className="listing__item">
        <div className="listing__image"><img src={testImage} alt="test Image" /></div>
        <div>
        <p>{props.name}</p>
        <p>Price: ${props.price}</p>
        </div>
        <div><button><Link  to="/product">View More</Link></button>
        <button onClick={props.delete}>Delete</button></div>
    </div>


   
</div>
    )
}