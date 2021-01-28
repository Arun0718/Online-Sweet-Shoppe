 import './App.css';
 import React, { Component } from "react";
 import "../node_modules/bootstrap/dist/css/bootstrap.css";
 import HomeBg from './Component/HomeBg';
import Navbar from './Component/Navbar';
 import SweetList from './Component/SweetList';
import Customer from './Component/Customer';
import User from './Component/User';
 import Login from './Component/Login';
 import Logout from './Component/Logout';
 import Sweet from './Component/Sweet';
 import SweetActions from './Component/SweetActions';
 import OrderActions from'./Component/OrderActions';
 import PlaceOrder from './Component/PlaceOrder';
 import LoginCust from './Component/LoginCust';
 import Signup from './Component/Signup';
 import { BrowserRouter as Router, Route, Switch,Link,NavLink } from "react-router-dom";
 


class App extends Component {
   state = {};
   render() {
     return (
      
         <Router>           <Navbar />
          
           <Switch>
           
         <Route exact path="/" component={HomeBg}  />

           <Route exact path="/SweetList" component={SweetList}  />
           <Route exact path="/addSweet" component={Sweet}  />
           <Route path="/editSweet/:id" exact component={Sweet}/>
            <Route path="/SweetActions" exact component={SweetActions}/>
            <Route path="/OrderActions" exact component={OrderActions}/>
      
      
           <Route path="/login" exact component={Login}/>
           <Route path="/logout" exact component={Logout}/>
           <Route path="/placeOrder" exact component={PlaceOrder}/>
           <Route path="/loginCust" exact component={LoginCust}/>
           <Route path="/signupCust" exact component={Signup}/>
           <Route path="/customer" exact component={Customer}/>
           <Route path="/user" exact component={User}/>

            
        </Switch>
        </Router>
      
     );
   }
 }

 export default App;
