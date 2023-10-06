import React from "react";
import { Link } from "react-router-dom";

export default function NavBar(props){
    return(
       <nav>
    <div>
            <h1>Gamer-Z</h1>
        </div>
        
    <div>
        <ul>
                <li><a >Your balance: $20.00</a></li>
                <li><Link to="/market"><p>Market Place</p></Link></li>
                <li><Link to="/account"><p>Account</p></Link></li>
                <li><Link to="/login"><a onClick={()=>props.handleLogout}>Logout</a></Link></li>
            </ul>
</div>
           
            
     
       </nav>
    )
}