


 import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
 class Navbar extends Component {   state = {};
   render() {
     return (
       <nav className="navbar navbar-expand-lg navbar-light bg-info">
         <a className="navbar-brand">Online Sweet Shop</a>

         <div className="collapse navbar-collapse">
           <ul className="navbar-nav mr-auto">
          

              

               <li className="nav-item">
               <NavLink className="nav-link" exact to="/loginCust">
                Login
               </NavLink>
             </li>

             <li className="nav-item">
               <NavLink className="nav-link" exact to="/login">
                Admin login
               </NavLink>
             </li>

             
             
            {/* <li class="nav-item">
              <NavLink className="nav-link" exact to="/Contact">                 Contact
               </NavLink>
             </li>
            
             <li class="nav-item">
               <NavLink className="nav-link" exact to="/Customer">
                 Customer
               </NavLink>
             </li>
            <li class="nav-item">
              <NavLink className="nav-link" exact to="/Login" >              login
              </NavLink> 
              
            </li> */}
          </ul>
        </div>
        
      </nav>
    );
   }
 }

 export default Navbar;
