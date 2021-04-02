  import React , {Component} from 'react';
import AdminHeader from './AdminHeader';
import AdminFooter from './AdminFooter';
import { Label, Button, Row, Col, Form } from 'reactstrap';
import axios from 'axios';

class AddAppart extends Component {
  constructor(props){
    super(props);
    this.state = {
      areaName: '' ,
      description: '',
      shortDescription: '',
      price: '',
      bedrooms: '',
      bathrooms: '',
      balconys: '',
      kitchens: '',
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
    }  else if (e.target.id === 'price') {
        this.setState({ price: e.target.value});
    }else if (e.target.id === 'bedrooms') {
      this.setState({ bedrooms: e.target.value});
    }else if (e.target.id === 'bathrooms') {
      this.setState({ bathrooms: e.target.value});
    }else if (e.target.id === 'balconys') {
      this.setState({ balconys: e.target.value});
    }else if (e.target.id === 'kitchens') {
      this.setState({ kitchens: e.target.value});
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
    formData.set("areaName",this.state.areaName);
    formData.set("description",this.state.description);
    formData.set("price",this.state.price);
    formData.set("bedrooms",this.state.bedrooms);
    formData.set("bathrooms",this.state.bathrooms);
    formData.set("balconys",this.state.balconys);
    formData.set("kitchens",this.state.kitchens);
    axios.post("http://172.105.245.241:3443/appartments", formData, {
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
        <div className="container" style={{ color: "#EEE" }}>
          <h3>Enter Appartment Information</h3>
          <hr />
          <Form onSubmit={this.handleSubmitFinalIsa} id="MyForm">
            <Row className="form-group">
              <Col>
                <Label htmlFor="areaName">Area Name</Label>
                <input style={{ backgroundColor: "#CCC" }} model=".areaName" type="text" onChange={this.onChange} id="areaName" className="form-control" innerRef={(input) => this.areaName = input}></input>  
              </Col>
            </Row>
            <Row className="form-group">
              <Col>
                <Label htmlFor="description">Description</Label>
                <input style={{ backgroundColor: "#CCC" }} style={{ backgroundColor: "#CCC" }} model=".description" type="text" onChange={this.onChange} id="description" className="form-control" innerRef={(input) => this.description = input}></input>  
              </Col>
            </Row>
            <Row className="form-group">
              <Col>
                <Label htmlFor="bedrooms">Bedrooms</Label>
                <input style={{ backgroundColor: "#CCC" }} model=".bedrooms" type="text" onChange={this.onChange} id="bedrooms" className="form-control" innerRef={(input) => this.bedrooms = input}></input>  
              </Col>
            </Row>
            <Row className="form-group">
              <Col>
                <Label htmlFor="bathrooms">Bathrooms</Label>
                <input style={{ backgroundColor: "#CCC" }} model=".bathrooms" type="text" onChange={this.onChange} id="bathrooms" className="form-control" innerRef={(input) => this.bathrooms = input}></input>  
              </Col>
            </Row>
            <Row className="form-group">
              <Col>
                <Label htmlFor="balconys">Balconys</Label>
                <input style={{ backgroundColor: "#CCC" }} model=".balconys" type="text" onChange={this.onChange} id="balconys" className="form-control" innerRef={(input) => this.balconys = input}></input>  
              </Col>
            </Row>
            <Row className="form-group">
              <Col>
                <Label htmlFor="kitchens">Kitchens</Label>
                <input style={{ backgroundColor: "#CCC" }} model=".kitchens" type="text" onChange={this.onChange} id="kitchens" className="form-control" innerRef={(input) => this.kitchens = input}></input>  
              </Col>
            </Row>
            <Row className="form-group">
              <Col>
                <Label htmlFor="price">Price</Label>
                <input style={{ backgroundColor: "#CCC" }} model=".price" type="number" id="price" onChange={this.onChange} className="form-control" innerRef={(input) => this.price = input}></input>
              </Col>
            </Row>
            <Row className="form-group">
              <Col>
                <Label htmlFor="image">Images Upload</Label>
                <input style={{ backgroundColor: "#CCC" }} model=".image" type="file" multiple id="image" onChange={this.onChange} className="form-control" innerRef={(input) => this.image = input}></input>
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
