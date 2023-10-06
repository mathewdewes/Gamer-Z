import React from "react";


export default function Register(){
    return(
<div className="register">
  
   <form action="POST">
   <h1>Register</h1>
    <label for="email">Enter email and new password</label>
    <input  placeholder="Email" type="text" id="email" name="email" />
    <input placeholder="Password" type="text" id="password" name="password" />
    <button type="button">Create user</button>
    <div>
    </div>
 
   </form>

  

</div>
    )
}