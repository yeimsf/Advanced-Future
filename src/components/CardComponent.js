import React, { Component } from 'react';
import { Row , Col } from 'reactstrap';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, CardDeck } from 'reactstrap';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { baseUrl } from '../shared/baseUrl';
import '../App.css';
import { Link } from 'react-router-dom';

class CardComp extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }
  appartment= this.props.appartments.appartments.filter((appartment) => appartment._id === this.props.match.params.appartmentId)[0]
  onExiting() {
    this.animating = true;
  }
  onExited() {
    this.animating = false;
  }
  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === this.props.appartment.image.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }
  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? this.props.appartment.image.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }
  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }
  render() {
    const { activeIndex } = this.state;

    const cardslide = this.props.appartment.image.map((image) => {
      return(
        <>
        <Card>
          <Link to={`/menu/${this.props.appartment._id}/${image._id}`}>
            <CardImg style={{height: "200px"}} width="100%" top src={baseUrl + image.image} alt={this.props.appartment.areaName} />
          </Link>
        </Card>
        </>
      );
    });
    
    return (
      <>
        <Header />
        <div className="container col-12">
          <div className="row row-content col-12 col-sm-6">
            <Card>
              <CardImg top src={baseUrl + this.props.appartment.image[0].image} alt={this.props.appartment.areaName} />
              <CardImgOverlay>
                <CardTitle>{this.props.appartment.areaName}</CardTitle>
              </CardImgOverlay>
              <CardBody>
                <CardTitle>Appartment Location: {this.props.appartment.areaName}</CardTitle>
                <CardText>Description: {this.props.appartment.description}</CardText>
                <CardText>Price: {this.props.appartment.price} EGP</CardText>
                <Row>
                  <Col>
                    <CardText>Bedrooms: {this.props.appartment.bedrooms}</CardText>
                  </Col>
                  <Col>
                    <CardText>Bathrooms: {this.props.appartment.bathrooms}</CardText>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <CardText>Balconys: {this.props.appartment.balconys}</CardText>
                  </Col>
                  <Col>
                    <CardText>Kitchens: {this.props.appartment.kitchens}</CardText>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </div>
          <div className="container row row-content col-12">
            <CardDeck>
              {cardslide}
            </CardDeck>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}


export default CardComp;
