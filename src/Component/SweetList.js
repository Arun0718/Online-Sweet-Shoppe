import React, { Component } from "react";
import axios from "axios";
import {Link} from 'react-router-dom';



class SweetList extends Component {
  constructor(props){
    super(props);
    this.state={AllSweetData:[]}
  }
  componentDidMount() {
    
    axios.get(`http://localhost:8081/rest/sweets`).then((responseSweetData)=> {
      console.log(responseSweetData);
      this.setState({
        AllSweetData:responseSweetData.data
        });
      });
     
  }
  OrderPage = () =>{
    this.props.history.push('/placeOrder');
}

  

  render() {
   
      
    return(
      <div className="sweetDisplay">
        <div class="row">
          {
             this.state.AllSweetData.map(
               sweet=>
           
                 <div class="card col-md-3 offset-md-1 " key={sweet.sweetId}>
                   <div class="card-header">
                   <img
                                className="center card-img-top d-block w-100"
                                src={process.env.PUBLIC_URL + sweet.image}
                                alt="image"
                                width="150"
                                height="150"/>
                                 
                    </div>
                      <div class="card-body">
                    
                        <label>CategoryName:</label>
                        <div> {sweet.categoryName}</div>
                        <label>productName:</label>
                        <div> {sweet.productName}</div>
                        <label>Rate</label>
                        <div> {sweet.rate}</div>
                        <label>OfferName</label>
                        <div> {sweet.offerName}</div>
                        <label>OfferRate</label>
                        <div> {sweet.offerRate}</div>
                    </div>
                    <div class="card-footer">
                    <button type="submit" className="btn btn-primary" onClick={this.OrderPage}>Proceed To Order</button>
                    

                    </div>
                    <Link to={"/"} className="nav-link">Back to home page</Link>
                  </div>
 
             )
           } 

        </div>
      </div>
         
            
         
      
    )
  }
  
}

export default SweetList;

