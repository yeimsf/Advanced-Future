import React, { useState, Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselCaption,
  CarouselControl,
  CarouselIndicators,
  Row , Col
} from 'reactstrap';
import { CardGroup , Card, CardImg, CardImgOverlay, CardText, CardBody,
     CardTitle, CardFooter , CardDeck } from 'reactstrap';
import ArabicHeaderComp from './ArabicHeaderComp';
import ArabicFooterComp from './ArabicFooterComp';
import { baseUrl } from '../shared/baseUrl';
import '../App.css';
import { Link } from 'react-router-dom';

class ArabicCardComp extends Component {
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
        <ArabicHeaderComp auth={this.props.auth}
          loginUser={this.props.loginUser}
          logoutUser={this.props.logoutUser}
           />
        <div dir="rtl" className="container col-12">
          <div className="row row-content col-12 col-sm-6">
            <Card>
              <CardImg top src={baseUrl + this.props.appartment.image[0].image} alt={this.props.appartment.areaName} />
              <CardImgOverlay>
                <CardTitle>{this.props.appartment.areaName}</CardTitle>
              </CardImgOverlay>
              <CardBody>
                <CardTitle>موقع الشقة: {this.props.appartment.areaName}</CardTitle>
                <CardText>التفاصيل: {this.props.appartment.description}</CardText>
                <CardText>السعر: {this.props.appartment.price} EGP</CardText>
                <Row>
                  <Col>
                    <CardText>الغرف: {this.props.appartment.bedrooms}</CardText>
                  </Col>
                  <Col>
                    <CardText>الحمامات: {this.props.appartment.bathrooms}</CardText>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <CardText>البلكونات: {this.props.appartment.balconys}</CardText>
                  </Col>
                  <Col>
                    <CardText>المطبخ: {this.props.appartment.kitchens}</CardText>
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
        <ArabicFooterComp />
      </>
    );
  }
}


export default ArabicCardComp;
