import React, {Component} from 'react';
import {Card, Table,  ButtonGroup, Button} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faList, faEdit, faTrash} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';
import MyToast from './MyToast';
import axios from 'axios';

export default class SweetActions extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sweets : []
            
        };
    }



    componentDidMount() {
        this.findAllSweets();
    }

    findAllSweets(){
        axios.get("http://localhost:8081/rest/sweets")
            .then(response => response.data)
            .then((data) => {
                this.setState({sweets: data});
            });
    };

   

    deleteSweet = (sweetId) => {
        axios.delete("http://localhost:8081/rest/sweets/"+sweetId)
        .then(response => {
            if(response.data != null) {
                this.setState({"show":true});
                setTimeout(() => this.setState({"show":false}),3000);
                this.setState({
                    sweets:this.state.sweets.filter(sweet => sweet.id !== sweetId)
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
                   <MyToast show = {this.state.show} message = {"Sweet Deleted Successfully."} type = {"danger"}/>
                </div>
                <Card className={"border border-dark bg-dark text-white"}>
                    <Card.Header>
                        
                            <FontAwesomeIcon icon={faList} /> Sweet List
                     </Card.Header>
                 
                    <Card.Body>
                        <Table bordered hover striped variant="dark">
                            <thead>
                                <tr>
                                  <th>Category Name</th>
                                  <th>Product Name</th>
                                  <th> Product Rate </th>
                                  <th>Offer Name</th>
                                  <th>Offer Rate</th>
                                  <th>Image URL</th>
                                  <th>Actions</th> 
                                </tr>
                              </thead>
                              <tbody>
                                {
                                   this.state. sweets.length === 0 ?
                                    <tr align="center">
                                      <td colSpan="6">No Sweets Available.</td>
                                    </tr> :
                                   this.state.sweets.map((sweet) => (
                                    <tr key={sweet.id}>
                                        
                                        <td>{sweet.categoryName}</td>
                                        <td>{sweet.productName}</td>
                                        <td>{sweet.rate}</td>
                                        <td>{sweet.offerName}</td>
                                        <td>{sweet.offerRate}</td>
                                        <td>{sweet.image}</td>
                                         <td>
                                            <ButtonGroup>
                                                <Link to={"editSweet/"+sweet.id} className="btn btn-sm btn-outline-primary"><FontAwesomeIcon icon={faEdit} /></Link>{' '}
                                                <Button size="sm" variant="outline-danger" onClick={this.deleteSweet.bind(this, sweet.id)}><FontAwesomeIcon icon={faTrash} /></Button>
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



