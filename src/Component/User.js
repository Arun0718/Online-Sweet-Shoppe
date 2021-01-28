
import UserNav from "./UserNav";
import { BrowserRouter as Router, Route, Switch,Link,NavLink } from "react-router-dom";
import React, { Component } from "react";

import Logout from "./Logout";
import Sweet from "./Sweet";
import OrderActions from "./OrderActions";


class Customer extends Component {
    state = {};
    render() {
      return (
          <div >
              
        
          <Router>
            <UserNav />
            <b><i><center>Admin  Page</center></i></b>
            
           <Switch>
           
                <Route exact path="/logout" component={Logout}  />
             
              <Route exact path="/addSweet" component={Sweet}  />
              <Route exact path="/OrderActions" component={OrderActions}  />
 
              
            </Switch>
         </Router>
         </div>
        
      );
    }
  }
  
  export default Customer;