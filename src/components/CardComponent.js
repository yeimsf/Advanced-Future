import React, { useState, Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselCaption,
  CarouselControl,
  CarouselIndicators,
 } from 'reactstrap';
 import { Card, CardImg, CardImgOverlay, CardText, CardBody,
     CardTitle, Breadcrumb, BreadcrumbItem, Label,
     Modal, ModalHeader, ModalBody, Button, Row, Col } from 'reactstrap';
 import { Link } from 'react-router-dom';
 import { Loading } from './LoadingComponent';
 import { baseUrl } from '../shared/baseUrl';
 import { FadeTransform, Fade, Stagger } from 'react-animation-components';
 
function RenderAppartment({appartment}) {
  return(
    <>
      <CarouselItem
      className="carouselImg col-12"
      onExiting={this.onExiting}
      onExited={this.onExited}
      key={appartment.src}>
        <img height="500" src={appartment.src} alt={appartment.altText} />
        <CarouselCaption captionText={appartment.caption} captionHeader={appartment.caption} />
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

    const slides = this.props.appartments.appartments.map((item) => {
      return (
        <RenderAppartment />
      );
    });
    const cardslide = this.props.appartments.appartments.map((appartment) => {
      return(
        <Card>
          <CardImg top src={baseUrl + appartment.image} alt={appartment.name} />
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
    const carousel = () => 
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators items={this.props.appartments.appartments} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
    return (
      <div className="container col-12">
        <div className="row-content">
          {slides}
          <div className="col-12 col-md-5 m-1">
            <FadeTransform in
              transformProps={{
                exitTransform: 'scale(0.5) translateY(-50%)'}}>
              {cardslide}
            </FadeTransform>
          </div>
        </div>
      </div>
    );
  }
}


export default CardComp;
