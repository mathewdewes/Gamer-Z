import React from "react";
import { Link } from "react-router-dom";

export default function NavBar(){
    return(
       <nav>
    <div>
            <h1>Gamer-Z</h1>
        </div>
        
    <div>
        <ul>
                <li><a >Your balance: $20.00</a></li>
                <li><Link to="/market">Market place</Link></li>
                <li><Link to="/account">Account</Link></li>
                <li><Link to="/">Logout</Link></li>
            </ul>
</div>
           
            
     
       </nav>
    )
}