  import React , {Component} from 'react';
import AdminHeader from './AdminHeader';
import * as ActionCreators from '../redux/ActionCreators';
import Footer from './FooterComponent';
import AdminFooter from './AdminFooter';
import CarouselComp from './CarouselComponent';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem, Label,
    Modal, ModalHeader, ModalBody, Button, Row, Col, Form } from 'reactstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import FormData from 'form-data';
import { baseUrl } from '../shared/baseUrl';

class AddAppart extends Component {
  constructor(props){
    super(props);
    this.state = {
      areaName: '' ,
      description: '',
      shortDescription: '',
      price: ''
    };
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  onChange(e) {
      if (e.target.id === 'areaName') {
        this.setState({ areaName: e.target.value });
    } else if (e.target.id === 'description') {
        this.setState({ description: e.target.value });
    } else if (e.target.id === 'shortDescription') {
        this.setState({ shortDescription: e.target.value });
    } else if (e.target.id === 'price') {
        this.setState({ price: e.target.value});
        console.log(e.target.value);
    }
  }
  // handleSubmit(values) {
  //   let formData = new FormData();
  //   formData.append('areaName',values.areaName);
  //   formData.append('description',values.description);
  //   formData.append('shortDescription',values.shortDescription);
  //   formData.append('price',values.price);
  //   //formData.append('imageFile',values.imageFile , {uri: photo.uri, name: 'image.jpg', type: 'image/jpeg'});
    
  //   this.props.postAppartment({
  //     areaName: values.areaName,
  //     description: values.description,
  //     shortDescription: values.shortDescription,
  //     price: values.price
  //   });
  // }
  handleSubmit(e) {
    e.preventDefault();
    fetch((baseUrl+'appartments/'), {
      method: 'POST',
      headers: {
        'Accept': 'application/json', 
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        areaName: this.state.areaName,
        description: this.state.description,
        shortDescription: this.state.shortDescription,
        price: this.state.price
      })
    })
    this.setState({
      areaName: '' ,
      description: '',
      shortDescription: '',
      price: ''
    });
  }

  render(){
    return(
      <>
        <AdminHeader />
        <div className="container">
          <h3>Enter Appartment Information</h3>
          <hr />
          <Form onSubmit={this.handleSubmit}>
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
                <Label htmlFor="imagesUpload">Images Upload</Label>
                <input model=".imageFile" type="file" multiple id="imageFile" className="form-control" innerRef={(input) => this.imageFile = input}></input>
              </Col>
            </Row>
            <Button type="submit" className="bg-primary">Submit</Button>
          </Form>
        </div>
        <AdminFooter />
      </>
    );
  }
}

export default AddAppart;
