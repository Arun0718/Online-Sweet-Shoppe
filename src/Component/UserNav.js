import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
class UserNav extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
        

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
          <li className="nav-item">
              <NavLink className="nav-link active" exact to="/addSweet">
                Manage Sweet
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link active" exact to="/OrderActions">
               Order Details
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/logout">
                Logout
              </NavLink>
            </li>
            
          </ul>
        </div>
        
      </nav>
    );
  }
}

export default UserNav;