import React, { Component } from 'react';
import axios from 'axios';

class PlaceOrder extends Component {

    
    constructor(props) {
        super(props);
        this.state = this.initialState;
        this.state.show = false;
        this.orderChange = this.orderChange.bind(this);
        this.submitOrder = this.submitOrder.bind(this);
    }
    initialState = {
        id: '',
        productName: '',
        quantity: '',
        deliveryAddress:'',
        branchCity:'',
        branchState:'',
        event:'',
        nameOnTheCard:'',
        cvv:'',
        expiryDate:'',
        cardNo:'',
    };

    componentDidMount() {
        const orderId = +this.props.match.params.id;
        if(orderId) {
            this.findOrderById(orderId);
        }
       
    }
    findOrderById = (orderId) => {
        axios.get("http://localhost:8081/rest/orders/"+orderId)
        .then(response => {
            if(response.data != null){
                this.setState({
                    id: response.data.id,
                    productName: response.data.productName,
        quantity:response.data.quantity ,
        deliveryAddress:response.data.deliveryAddress,
        branchCity:response.data.branchCity,
        branchState:response.data.branchState,
        event:response.data.event,
        nameOnTheCard:response.data.nameOnTheCard,
        cvv:response.data.cvv,
        expiryDate:response.data.expiryDate,
        cardNo:response.data.cardNo
                  
            });
        }
    }).catch((error) => {
        console.error("Error -"+error);
    });
};
        

    resetOrder = () => {
        this.setState(() => this.initialState);
    };

    submitOrder = event => {
        event.preventDefault();

        const order = {
            
                   
                    productName: this.state.productName,
                    quantity:this.state.quantity ,
                    deliveryAddress:this.state.deliveryAddress,
                    branchCity:this.state.branchCity,
                    branchState:this.state.branchState,
                    event:this.state.event,
                    nameOnTheCard:this.state.nameOnTheCard,
                    cvv:this.state.cvv,
                    expiryDate:this.state.expiryDate,
                    cardNo:this.state.cardNo
                   
        };

        axios.post("http://localhost:8081/rest/orders", order)
            .then(response => {
                if(response.data != null){
                    this.setState({"show":true, "method":"post"});
                    setTimeout(() => this.setState({"show":false}),3000);
                } else {
                    this.setState({"show":false});
                }
            });
            this.setState(this.initialState);
        };

    updateOrder = event => {
        event.preventDefault();

        const order = {
                    id: this.state.id,
                    productName: this.state.productName,
                    quantity:this.state.quantity ,
                    deliveryAddress:this.state.deliveryAddress,
                    branchCity:this.state.branchCity,
                    branchState:this.state.branchState,
                    event:this.state.event,
                    nameOnTheCard:this.state.nameOnTheCard,
                    cvv:this.state.cvv,
                    expiryDate:this.state.expiryDate,
                    cardNo:this.state.cardNo
                   
        };
        axios.put("http://localhost:8081/rest/orders", order)
        .then(response => {
            if(response.data != null) {
                this.setState({"show":true, "method":"put"});
                setTimeout(() => this.setState({"show":false}), 3000);
                setTimeout(() => this.orderList(), 3000);
            } else {
                this.setState({"show":false});
            }
        });

    this.setState(this.initialState);
};
        

    orderChange = event => {
        this.setState({
            [event.target.name]:event.target.value
        });
    };

    orderList = () => {
        return this.props.history.push("/OrderActions");
    };


    render() {
        const { productName,quantity,
        deliveryAddress,
        branchCity,
        branchState,
        event,
        nameOnTheCard,
        cvv,
        expiryDate,
        cardNo} = this.state;
        
        return (
            
                
               <div className="background-display">
                   <h2><b><u><center>PLACE ORDER</center></u></b></h2><br />
                   <div class="card col-md-6 offset-md-3 offset-md-3">
                       
                       <form onSubmit={this.handleSubmit} autocomplete="off" >
                <label className="Label"> <b>Product Name:</b> <span style={{ "color": "red" }}>*</span></label>
                                        <select style={{ "width": "100%", "padding": "7px 7px" }}
                                            name="productName"  placeholder="ProductName" className="form-control"
                                            onChange={this.handleInputChange}> <option>Choose The Sweet Product</option>
                                            <option>Gulab Jamun</option>
                                            <option>Jelabi</option>
                                            <option>Mysorepak</option>
                                            <option>RasaGulla</option>
                                            <option>Thirunelveli Halwa</option>
                                            <option>SoanPapdi</option>
                                            <option value={this.state.ProductName}
                                                        onChange={this.handleInputChange} >{this.ProductName}
                                                    </option>)
                                            
                                        </select><br />

                            <label className="Label"> <b>Quantity:</b><span style={{ "color": "red" }}>*</span></label>
                            <input type="number" name="quantity" placeholder="Quantity In gms" class="form-control" min="0.25" max="10.0" 
                             onChange={this.handleInputChange} value={this.state.Quantity} required/><br />

                            <label className="Label"> <b>Delivery Address:</b><span style={{ "color": "red" }}>*</span></label>
                            <input type="text" name="deliveryAddress" placeholder="Delivery Address" class="form-control"
                             onChange={this.handleInputChange} value={this.state.DeliveryAddress} required/><br />

               
                            <label className="Label"> <b>Branch City:</b><span style={{ "color": "red" }}>*</span></label>
                                        <select style={{ "width": "100%", "padding": "7px 7px" }} placeholder="Branch City"
                                            name="branchCity" className="form-control"
                                            onChange={this.handleInputChange}> <option>Choose Branch City</option>
                                            <option>Coimbatore</option>
                                            <option>Banglore</option>
                                            <option>Pune</option>
                                               
                                                    <option value={this.state.branchCity}
                                                        onChange={this.handleInputChange} >{this.BranchCity}
                                                    </option>)
                                            
                                        </select><br />

                            <label className="Label"> <b>Branch State:</b><span style={{ "color": "red" }}>*</span></label>
                                        <select style={{ "width": "100%", "padding": "7px 7px" }} placeholder="Branch State"
                                            name="branchState" className="form-control"
                                            onChange={this.handleInputChange}> <option>Choose Branch State</option>
                                            <option>TamilNadu</option>
                                            <option>Kerala</option>
                                            <option>Karnataka</option>
                                            <option>Maharastra</option>
                                               
                                                    <option value={this.state.branchState}
                                                        onChange={this.handleInputChange} >{this.BranchState}
                                                    </option>)
                                            
                                        </select><br />

                            <label className="Label"> <b>Event:</b></label>
                                        <select style={{ "width": "100%", "padding": "7px 7px" }} placeholder="Event"
                                            name="event" className="form-control"
                                            onChange={this.handleInputChange}> <option>Choose The Event</option>
                                            <option>Bachelor Party</option>
                                             <option>Marriage</option>
                                             <option>Birthday</option>
                                               
                                                    <option value={this.state.Event}
                                                        onChange={this.handleInputChange} >{this.Event}
                                                    </option>)
                                            
                                        </select><br />

                            <label className="Label"> <b>Name On The Card:</b><span style={{ "color": "red" }}>*</span></label>
                            <input type="text" name="nameOnTheCard" placeholder="Name On The Card" class="form-control"
                             onChange={this.handleInputChange} value={this.state.NameOnTheCard} required/><br />

                            <label className="Label"> <b>Cvv:</b><span style={{ "color": "red" }}>*</span></label>
                            <input type="tel" name="cvv"  minLength="3" maxLength="3" placeholder="Enter CVV Number" class="form-control"
                             onChange={this.handleInputChange} value={this.state.Cvv} required/><br />

                            <label className="Label"> <b>Expiry Date:</b><span style={{ "color": "red" }}>*</span></label>
                            <input type="text" name="expiryDate" pattern="(?:0[1-9]|1[0-2])/[0-9]{2}" placeholder="Enter Expiry Date MM/YY" class="form-control"
                             onChange={this.handleInputChange} value={this.state.ExpiryDate} required/><br />

                            <label className="Label"> <b>Card No:</b><span style={{ "color": "red" }}>*</span></label>
                            <input type="tel" name="cardNo" minLength="16" maxLength="16" placeholder="Enter The Card Number" class="form-control" 
                             onChange={this.handleInputChange} value={this.state.CardNo} required/><br />

                
                             

                



            
                       <center>  <button type="submit" class="btn btn-success" >Place Order Now</button> <tab/><tab/><tab/>
                            
                         <button type="submit" class="btn btn-success" >Confirm Order</button> <tab/><tab/><tab/> 
                       
                            <button type="submit" class="btn btn-success" >Add Another Order</button></center> 
                        </form>
        
                       
                    </div>
                </div>
                
            
        
        )
    }
}

export default PlaceOrder;