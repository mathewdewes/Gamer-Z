import React, { useState } from "react";
import testImage from "../images/matt.JPG";
import { Link } from "react-router-dom";
import CreatItem from "./marketplace/CreateItem";
import ListItem from "./marketplace/ListItem";

export default function MarketPlace(props){
    const [show, setShow] = useState(false);


    const handleClose=()=>{
        setShow(false);

}

    const handleShow=()=>{
        setShow(true);
    }
    return(
        <div className="marketPlace">
            <h1 className="pageHeading">Market Place</h1>
<div className="listing">
    <div className="listing__item">
        <div className="listing__image"><img src={testImage} alt="test Image" /></div>
        <div>
        <h3>Hello</h3>
        <p>Price: $200.00</p>
        <button onClick={()=>handleShow()}>Add item</button>
        </div>
        <div><button><Link  to="/product"><p>View more</p></Link></button>
        <button><p>Delete</p></button></div>
    </div>
    <ListItem/>


   
</div>
{show ? (<CreatItem handleClose={handleClose} user={props.user}/>) : <></>}
        </div>

    )

}