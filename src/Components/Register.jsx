import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase-config";



export default function Register(props){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleRegistration=(e)=>{
e.preventDefault();

createUserWithEmailAndPassword(auth, email, password).then((userCredential)=>{
    console.log(userCredential);
    props.setUser({
    name:name,
    balance:0.0,
    gamesOwned:0,
    email:email,
    userCredential:userCredential

    })
}).catch((error)=>{
    console.log(error);
})
    }
    return(
<div className="register">
  
   <form action="POST">
   <h1>Register</h1>
    <label for="email">Enter email and new password</label>
    <input onChange={(e)=>setName(e.target.value)}  placeholder="Name" type="text" id="Name" name="Name" />
    <input onChange={(e)=>setEmail(e.target.value)}   placeholder="Email" type="text" id="email" name="email" />
    <input onChange={(e)=>setPassword(e.target.value)} placeholder="Password" type="password" id="password" name="password" />
    <input placeholder="Retype Password" type="password" id="password2" name="password2" />
    <button onClick={(e)=>handleRegistration(e)} type="submit">Create user</button>
    <div>
    </div>
 
   </form>

  

</div>
    )
}