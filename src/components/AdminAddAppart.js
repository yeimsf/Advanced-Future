  import React , {Component} from 'react';
import AdminHeader from './AdminHeader';
import AdminFooter from './AdminFooter';
import { Label, Button, Row, Col, Form } from 'reactstrap';
import { baseUrl } from '../shared/baseUrl';
import axios from 'axios';

class AddAppart extends Component {
  constructor(props){
    super(props);
    this.state = {
      areaName: '' ,
      description: '',
      shortDescription: '',
      price: '',
      image: ''
    };
    this.onChange = this.onChange.bind(this);
    //this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSubmitFinalIsa = this.handleSubmitFinalIsa.bind(this);
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
    }else if (e.target.id === 'image') {
      this.setState({ image: e.target.files});
      console.log(e.target.value);
    }
  }
  // handleSubmit(e) {
  //   e.preventDefault();
  //   fetch((baseUrl+'appartments/'), {
  //     method: 'POST',
  //     headers: {
  //       'Accept': 'application/json', 
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({
  //       areaName: this.state.areaName,
  //       description: this.state.description,
  //       shortDescription: this.state.shortDescription,
  //       price: this.state.price,
  //       image: this.state.imageFile
  //     }),
  //   })
  //   this.setState({
  //     areaName: '' ,
  //     description: '',
  //     shortDescription: '',
  //     price: ''
  //   });
  // }
  // handleSubmitFile(){
  //   fetch((baseUrl+'sendfiles'), {
  //     method: 'POST',
  //     body: JSON.stringify({
  //       imageFile: this.state.imageFile
  //     })
  //   })
  // }
  // handleSubmitForm(){

  //     let data = new FormData();
  //     data.append("imageFile", this.state.image);
  //     data.set("shortDescription", this.state.shortDescription);
  //     data.set("areaName",this.state.areaName);
  //     data.set("description",this.state.description);
  //     data.set("price",this.state.price);
  //     fetch((baseUrl+'appartments/'), {
  //     method: 'POST',
  //     body: data
  //   })
  //   this.setState({
  //     areaName: '' ,
  //     description: '',
  //     shortDescription: '',
  //     price: ''
  //   });
  // }
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
    axios.post("https://localhost:3886/appartments", formData, {
    }).then(res => {
        console.log(res.data)
    })
  }
  render(){
    return(
      <>
        <AdminHeader auth={this.props.auth}
          loginUser={this.props.loginUser}
          logoutUser={this.props.logoutUser}
          />
        <div className="container">
          <h3>Enter Appartment Information</h3>
          <hr />
          <Form onSubmit={this.handleSubmitFinalIsa} id="MyForm">
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
        <AdminFooter />
      </>
    );
  }
}

export default AddAppart;
