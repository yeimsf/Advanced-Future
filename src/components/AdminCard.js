import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardFooter, Button, Form, Input , Row, Col } from 'reactstrap';
import { baseUrl } from '../shared/baseUrl';
import axios from 'axios';
import '../App.css';

class AdminCardComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
        appartmentId: '' 
      };
    this.onChange = this.onChange.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }
  onChange(e) {
    if (e.target.id === 'appartmentId') {
      this.setState({ appartmentId: e.target.value });
    }
  }
  handleRemove(){
    this.props.delAppartment(this.state.appartmentId);
    /*var id = this.state.appartmentId;
    axios.post("http://172.105.245.241:3443/appartments/"+this.state.appartmentId, { credentials: 'same-origin' }).then(res => {
        console.log(res)
    });*/
//		  .catch(error => { console.log(error) });
  }
  render() {
    const appartmentRender = this.props.appartments.appartments.map((appartment) => {   
        var x = 1;
        return(    
            <Card key={appartment._id}>
              <CardImg top src={baseUrl + appartment.image[0].image} alt={appartment.name} />
              <CardBody>
                <CardTitle>Appartment Number: {x}</CardTitle>
                <CardText>Appartment Description: {appartment.description}</CardText>
                <CardText>Appartment Price: {appartment.price}</CardText>
              </CardBody>
              <CardFooter>
                  <CardText>App ID: {appartment._id}</CardText>
              </CardFooter>
            </Card>
        );
        x++;
    })
    return (
      <>
        <div className="container col-12">
            <div className="row row-content col-12 col-sm-6">
                {appartmentRender}
            </div>
            <div className="row row-content col-12 col-sm-6 justify-content-center">
                <Form onSubmit={this.handleRemove}>
                    <Row>
                        <Col>
                            <Input className="formBack" onChange={this.onChange} type="text" id="appartmentId" name="appartmentId" placeholder="Enter ID" innerRef={(input) => this.appartmentId = input} />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Button className="offset-sm-3 col-sm-5 buttonmr formBackButton" type="submit" value="submit">Remove</Button>
                        </Col>
                    </Row>
                </Form>
            </div>
        </div>
      </>
    );
  }
}
export default AdminCardComp;
