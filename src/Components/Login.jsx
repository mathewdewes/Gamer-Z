import React from "react";


export default function Login(props){
    return(
<div className="login">
  
   <form action="POST">
    <p>Welcome to Gamer-Z</p>
   <h1>Login</h1>
    <label for="newEmail">Register User</label>
    <input onChange={props.newEmail} placeholder="Email" type="text" id="newEmail" name="newEmail" />
    <input onChange={props.newPassword} placeholder="Password" type="text" id="newPassword" name="newPassword" />
    <button type="button" onClick={props.create}>Create User</button>
    <br />
    <label for="email">Login</label>
    <input onChange={props.email} placeholder="Email" type="text" id="email" name="email" />
    <input onChange={props.password} placeholder="Password" type="text" id="password" name="password" />
    <button type="button">Login</button>
    <br />
    <button onClick={props.logOut} type="button">Logout</button>
    <h3>User logged in: {props.currentUser}</h3>
    <div>
    </div>
 
   </form>

  

</div>
    )
}