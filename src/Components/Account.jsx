import React from "react";
import testImage from "../images/matt.JPG";

export default function Account(props){
    return(
<div className="account">
    <div className="profile">
    {/* <input placeholder='Name' onChange={(event)=> {setNewName(event.target.value)}} />
         <input placeholder='Age' type="number" onChange={(event)=> {setNewAge(event.target.value)}} />
         <button onClick={createUser}>Create user</button> */}
   
    <img src={testImage} alt="" />
    <div>
    <h2>Mathew Dewes</h2>
    <p>Age: 25</p>
    <p>Balance: $420</p>
    <p>Games owned: 10</p>

    </div>
    <div>
    <p>Bio: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum, consequatur!</p>
    </div>
   

    </div>
    <div>
    <input placeholder='Name' onChange={props.name}/>
         <input placeholder='Price' type="number" onChange={props.price}/>
         <button onClick={props.createUser}>Create Listing</button>
    </div>
   
    <h1>Games Owned</h1>
    <div className="grid">
    <div>
        <h1>Hello</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis fugit incidunt amet nobis. Provident voluptatem omnis eum quam. Expedita, vitae.</p>
    </div>
    <div>
        <h1>Hello</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis fugit incidunt amet nobis. Provident voluptatem omnis eum quam. Expedita, vitae.</p>
    </div>
    </div>
   
</div>
    )
}