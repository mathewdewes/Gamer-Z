import React from "react";
import testImage from "../images/matt.JPG";

export default function Product(){
    return(
<div className="product">
    <img src={testImage} alt="" />
    <h1>Product name</h1>
    <p className="product__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis nulla vel id debitis repellat ipsa, placeat perspiciatis non esse obcaecati!</p>
    <button>Purchase</button>
<button>Return to Market</button>
</div>
    )
}