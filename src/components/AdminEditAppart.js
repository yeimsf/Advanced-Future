import React, {Component} from 'react';
import AdminHeader from './AdminHeader';
import AdminCardEditComp from './AdminCardEdit';
import { CardGroup , Card, CardImg, CardImgOverlay, CardText, CardBody,
     CardTitle, CardFooter , CardDeck,  Label, Button, Row, Col, Form  } from 'reactstrap';
import { baseUrl } from '../shared/baseUrl';
import '../App.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { FadeTransform } from 'react-animation-components';

// const RenderAppartments = (appartment) => { 
//     return(
//         <div className="col-12">
//             <FadeTransform in
//                 transformProps={{
//                     exitTransform: 'scale(0.5) translateY(-50%)'
//                 }}>
//                 <Card>
//                     <Link to={`/editAppart/${appartment._id}`}>
//                         <CardImg top src={baseUrl + appartment.image[0].image} alt={appartment.areaName} />
//                         <CardImgOverlay>
//                           <CardTitle className="customText">{appartment.areaName}</CardTitle>
//                         </CardImgOverlay>
//                     </Link>
//                 </Card>
//             </FadeTransform>
//         </div>
//     );
// }

class AdminEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      areaName: '' ,
      description: '',
      shortDescription: '',
      price: '',
      image: '',
      appartmentId: ''
    };
    this.onChange = this.onChange.bind(this);
    this.handleSubmitFinalIsa = this.handleSubmitFinalIsa.bind(this);
  }
  onChange(e) {
    if(e.target.id === 'appartmentId'){
      this.setState({appartmentId: e.target.value});}
    else if (e.target.id === 'areaName') {
      this.setState({ areaName: e.target.value });
    } else if (e.target.id === 'description') {
        this.setState({ description: e.target.value });
    } else if (e.target.id === 'shortDescription') {
        this.setState({ shortDescription: e.target.value });
    } else if (e.target.id === 'price') {
        this.setState({ price: e.target.value});
        console.log(e.target.value);
    }else if (e.target.id === 'image') {
      this.setState({ image: e.target.files});
      console.log(e.target.value);
    }
  }
  handleSubmitFinalIsa(e) {
    e.preventDefault()

    var formData = new FormData();
    for (const key of Object.keys(this.state.image)) {
        formData.append('image', this.state.image[key])
    }
    formData.set("shortDescription", this.state.shortDescription);
    formData.set("areaName",this.state.areaName);
    formData.set("description",this.state.description);
    formData.set("price",this.state.price);
    axios.put("https://localhost:3886/appartments/" + this.state.appartmentId, formData, {
    }).then(res => {
        console.log(res.data)
    })
  }
  
  render(){
    const RenderAppartment = this.props.appartments.appartments.map((appartment) => {
      return(
        <div className="col-5">
          <Col>
          <FadeTransform in
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }}>
                <Card>
                    <Link to={`/editAppart/${appartment._id}`}>
                        <CardImg top src={baseUrl + appartment.image[0].image} alt={appartment.areaName} />
                        <CardFooter>{appartment._id}</CardFooter>    
                    </Link>
                </Card>
            </FadeTransform>
            </Col>
        </div>
      );
    });
    return(
      <>
        <AdminHeader auth={this.props.auth} loginUser={this.props.loginUser} logoutUser={this.props.logoutUser}
          />
        <div className="container">
          <h3>Enter Appartment Info</h3>
          <hr />
          <div className="row-content">
            <Row>
              {RenderAppartment}
            </Row>
          </div>
          <div className="row-content">
            <Form onSubmit={this.handleSubmitFinalIsa} id="MyForm">
              <Row className="form-group">
                <Col>
                  <Label htmlFor="appartmentId">ID</Label>
                  <input model=".appartmentId" type="text" onChange={this.onChange} id="appartmentId" className="form-control" innerRef={(input) => this.id = input}></input>  
                </Col>
              </Row>
              <Row className="form-group">
                <Col>
                  <Label htmlFor="areaName">Area Name</Label>
                  <input model=".areaName" type="text" onChange={this.onChange} id="areaName" className="form-control" innerRef={(input) => this.areaName = input}></input>  
                </Col>
              </Row>
              <Row className="form-group">
                <Col>
                  <Label htmlFor="description">Description</Label>
                  <input model=".description" type="text" onChange={this.onChange} id="description" className="form-control" innerRef={(input) => this.description = input}></input>  
                </Col>
              </Row>
              <Row className="form-group">
                <Col>
                  <Label htmlFor="shortDescription">Short Description</Label>
                  <input model=".shortDescription" type="text" onChange={this.onChange} id="shortDescription" className="form-control" innerRef={(input) => this.shortDescription = input}></input>  
                </Col>
              </Row>
              <Row className="form-group">
                <Col>
                  <Label htmlFor="price">Price</Label>
                  <input model=".price" type="number" id="price" onChange={this.onChange} className="form-control" innerRef={(input) => this.price = input}></input>
                </Col>
              </Row>
              <Row className="form-group">
                <Col>
                  <Label htmlFor="image">Images Upload</Label>
                  <input model=".image" type="file" multiple id="image" onChange={this.onChange} className="form-control" innerRef={(input) => this.image = input}></input>
                </Col>
              </Row>
              <Button type="submit" className="bg-primary">Submit</Button>
            </Form>
          </div>
        </div>
      </>
    );
  }
}

export default AdminEdit;
