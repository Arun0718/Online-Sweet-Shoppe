import CustomerNav from "./CustomerNav";
import { BrowserRouter as Router, Route, Switch,Link,NavLink } from "react-router-dom";
import React, { Component } from "react";
import HomeBg from '../Component/HomeBg';
import SweetList from "./SweetList";


class Customer extends Component {
    state = {};
    render() {
      return (
          <div >
              
        
          <Router>
            <CustomerNav />
            <b><i><center>Customer Page</center></i></b>
            
           <Switch>
           
                <Route exact path="/" component={HomeBg}  />
             
              <Route exact path="/SweetList" component={SweetList}  />
 
              
            </Switch>
         </Router>
         </div>
        
      );
    }
  }
  
  export default Customer;