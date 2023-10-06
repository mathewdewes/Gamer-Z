import React from "react";
import testImage from "../images/matt.JPG";
import { Link } from "react-router-dom";

export default function MarketPlace(props){
    return(
        <div className="marketPlace">
            <h1 className="pageHeading">Market Place</h1>
<div className="listing">
    <div className="listing__item">
        <div className="listing__image"><img src={testImage} alt="test Image" /></div>
        <div>
        <h3>Hello</h3>
        <p>Price: $200.00</p>
        </div>
        <div><button><Link  to="/product"><p>View more</p></Link></button>
        <button><p>Delete</p></button></div>
    </div>


   
</div>
        </div>

    )
}