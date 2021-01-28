import React, {Component} from 'react';
import {Card, Table,  ButtonGroup, Button} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faList, faEdit, faTrash} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';
import MyToast from './MyToast';
import axios from 'axios';

export default class OrderActions extends Component {

    constructor(props) {
        super(props);
        this.state = {
            orders : []
            
        };
    }



    componentDidMount() {
        this.findAllOrders();
    }

    findAllOrders(){
        axios.get("http://localhost:8081/rest/orders")
            .then(response => response.data)
            .then((data) => {
                this.setState({orders: data});
            });
    };

   

    deleteOrder = (orderId) => {
        axios.delete("http://localhost:8081/rest/orders/"+orderId)
        .then(response => {
            if(response.data != null) {
                this.setState({"show":true});
                setTimeout(() => this.setState({"show":false}),3000);
                this.setState({
                    orders:this.state.orders.filter(order => order.id !== orderId)
                });
            } else {
                this.setState({"show":false});
            }
        } );
        
   
    };

    render() {
        
        return (
           <div>
                <div style={{"display":this.state.show ? "block" : "none"}}>
                   <MyToast show = {this.state.show} message = {"Order Deleted Successfully."} type = {"danger"}/>
                </div>
                <Card className={"border border-dark bg-dark text-white"}>
                    <Card.Header>
                        
                            <FontAwesomeIcon icon={faList} /> Order List
                     </Card.Header>
                 
                    <Card.Body>
                        <Table bordered hover striped variant="dark">
                            <thead>
                                <tr>
                                  
                                  <th>Product Name</th>
                                 
                                  <th> Quantity </th>
                                  <th>DeliveryAddress</th>
                                  <th>Branch City</th>
                                  <th>Branch State</th>
				  <th>Event</th>
                                  <th>Name On The Card</th>
                                  <th>Cvv</th>
                                  <th>Expiry Date</th>
                                  <th>Card No</th>
                                  <th>Actions</th> 
                                </tr>
                              </thead>
                              <tbody>
                                {
                                   this.state. orders.length === 0 ?
                                    <tr align="center">
                                      <td colSpan="6">No Orders Available.</td>
                                    </tr> :
                                   this.state.orders.map((order) => (
                                    <tr key={order.id}>
                                        
                                        <td>{order.productName}</td>
                                        <td>{order.quantity}</td>
                                        <td>{order.deliveryAddress}</td>
                                        <td>{order.branchCity}</td>
                                        <td>{order.branchState}</td>
					                    <td>{order.event}</td>
                                        <td>{order.nameOnTheCard}</td>
                                        <td>{order.cvv}</td>
                                        <td>{order.expiryDate}</td>
                                        <td>{order.cardNo}</td>
                                         <td>
                                            <ButtonGroup>
                                                <Link to={"editOrder/"+order.id} className="btn btn-sm btn-outline-primary"><FontAwesomeIcon icon={faEdit} /></Link>{' '}
                                                <Button size="sm" variant="outline-danger" onClick={this.deleteOrder.bind(this, order.id)}><FontAwesomeIcon icon={faTrash} /></Button>
                                            </ButtonGroup>
                                        </td> 
                                    </tr>
                                    ))
                                }
                              </tbody>
                        </Table>
                    </Card.Body>
                    {/* <Card.Footer style={{"textAlign":"right"}}>
                    <Link to={"addOrder"} className="nav-link">Proceed to Order</Link>
                  
                    </Card.Footer> */}
                    <Card.Footer style={{"textAlign":"left"}}>
                    <Link to={"/"} className="nav-link">HomePage</Link>
                  
                    </Card.Footer>
                   
                </Card>
            </div>
        );
    }
}