import React from "react";
import './head.css';
import { NavLink } from "react-router-dom";

function Navbar(){
    return(
        <div id="header">
             <ul style={{overflow:'hidden'}}>
            <li style={{padding:"25px"}}>
                <NavLink style={{color:'black', textDecoration:'none'}}  to='/Home'>Employee</NavLink>
               
            </li>
            <li style={{padding:"25px"}}>
            <NavLink style={{color:'black', textDecoration:'none'}} to='/Piechart'>PieChart</NavLink>
            </li>
            
           </ul>

        </div>
        
        
    )
}

export default Navbar;