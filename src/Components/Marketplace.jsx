import React, { useState } from "react";
import testImage from "../images/matt.JPG";
import { Link } from "react-router-dom";
import CreatItem from "./marketplace/CreateItem";
import ListItem from "./marketplace/ListItem";

export default function MarketPlace(props){
    const [show, setShow] = useState(false);
    const [items, setItems] = useState([]);


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
        <div>
        <button onClick={()=>handleShow()}>Add item</button>
        </div>
        <div>
        </div>
    </div>
    <ListItem items={items} setItems={setItems}/>


   
</div>
{show ? (<CreatItem setItems={setItems} handleClose={handleClose} user={props.user}/>) : <></>}
        </div>

    )

}