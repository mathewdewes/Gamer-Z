import React from "react";
import testImage from "../images/matt.JPG";

export default function Account(props){
    return(
        <div>
            <h1 className="pageHeading">Account</h1>
<div className="account">
   
   <div className="profile">
  
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
   </div>
  
   <h1>Games Owned</h1>
   <div className="grid">
   <div className="grid__item">
       <h1>Hello</h1>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis fugit incidunt amet nobis. Provident voluptatem omnis eum quam. Expedita, vitae.</p>
   </div>
   <div className="grid__item">
       <h1>Hello</h1>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis fugit incidunt amet nobis. Provident voluptatem omnis eum quam. Expedita, vitae.</p>
   </div>
   <div className="grid__item">
       <h1>Hello</h1>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis fugit incidunt amet nobis. Provident voluptatem omnis eum quam. Expedita, vitae.</p>
   </div>
   </div>
  
</div>
        </div>

    )
}