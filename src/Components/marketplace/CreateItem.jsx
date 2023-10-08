
import React, { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase-config";
import '../../scss/modal.scss';

export default function CreatItem(props){
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0.0);

    const handleSubmit=async ()=>{
        try{
            const count =  addDoc(collection(db, "Items"), {
                name: name,
                price: price,
                user_id: props.user.userCredential,
              });
              props.setItems(current=>[...current, {
                name: name,
                price: price,
                user_id: props.user.userCredential,
              }])
              props.handleClose()
        } catch(error){
            console.log(error);
        }
       
    }
    return(
        <div className="createItemModal">
            <div className="modelMain">
            <h2>Add Listing</h2>
           <form onSubmit={handleSubmit}>
            <input onChange={(e)=>setName(e.target.value)} type="text" placeholder="Name" name="Name" id="Name" />
            <input onChange={(e)=>setPrice(e.target.value)} type="number" placeholder="Price" name="Price" id="Price" />
            <button>Add Listing</button>
            <button onClick={()=>props.handleClose()}>Close</button>
            </form> 
            </div>
           
        </div>
    )
}