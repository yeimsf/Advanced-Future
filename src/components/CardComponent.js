import React, { useState, Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselCaption,
  CarouselControl,
  CarouselIndicators,
 } from 'reactstrap';
 import { Card, CardImg, CardImgOverlay, CardText, CardBody,
     CardTitle } from 'reactstrap';
 import { baseUrl } from '../shared/baseUrl';
 
function RenderAppartment({image}) {
  return(
    <>
      <CarouselItem
      className="carouselImg col-12"
      onExiting={this.onExiting}
      onExited={this.onExited}
      key={image.src}>
        <img height="500" src={image.src} alt={image.altText} />
        <CarouselCaption captionText={image.caption} captionHeader={image.caption} />
        
      </CarouselItem>
    </>
  );
}
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
  onExiting() {
    this.animating = true;
  }
  onExited() {
    this.animating = false;
  }
  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === this.props.appartments.appartments.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }
  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? this.props.appartments.appartments.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }
  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }
  render() {
    const { activeIndex } = this.state;

    const slides = this.props.appartments.appartments.map((appartment) => {
      appartment.image.map((image) => {
        return (
          <RenderAppartment image={image}/>
        );
      });
    });
    const cardslide = this.props.appartments.appartments.map((appartment) => {
      return(
        <Card>
          <CardImg top src={baseUrl + appartment.image[0]} alt={appartment.name} />
          <CardImgOverlay>
            <CardTitle>{appartment.shortDescription}</CardTitle>
          </CardImgOverlay>
          <CardBody>
            <CardTitle>{appartment.name}</CardTitle>
            <CardText>{appartment.description}</CardText>
            <CardText>{appartment.price}</CardText>
          </CardBody>
        </Card>
      );
    });
    return (
      <div className="container col-12">
        <div className="row-content">
          {slides}
          <div className="col-12 col-md-5 m-1">
            {cardslide}
          </div>
        </div>
      </div>
    );
  }
}


export default CardComp;
