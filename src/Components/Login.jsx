import React from "react";
import { Link } from "react-router-dom";


export default function Login(props){
    return(
<div className="login">
  
   <form action="POST">
   <h1>Login</h1>
    <p>Please enter your email and password</p>
    <input  placeholder="Email" type="text" id="email" name="email" />
    <input placeholder="Password" type="text" id="password" name="password" />
    <button type="button">Login</button>
    <button type="button"><Link  to="/register"><p>Register</p></Link></button>
    <div>
    </div>
 
   </form>

  

</div>
    )
}