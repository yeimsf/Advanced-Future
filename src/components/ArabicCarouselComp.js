import React, { useState, Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselCaption,
  CarouselControl,
  CarouselIndicators,
 } from 'reactstrap';

const items = [
  {
    src: require('../assets/Images2/wallpaperflare.com_wallpaper(2).jpg'),
    altText: "Slide 1",
    caption: "العملية والبساطة",
    text: "فن العمارة الذي يعكس أسلوب الحياة العملي",
    header: "Slide 1 Header",
    key: "1"
  },
  {
    src: require('../assets/Images2/wallpaperflare.com_wallpaper.jpg'),
    altText: "Slide 2",
    caption: "الجمال والسلام",
    text: "منظر الخريف الذي يريح الأنظار",
    header: "Slide 2 Header",
    key: "2"
  },
  {
    src: require('../assets/Images2/wallpaperflare.com_wallpaper(4).jpg'),
    altText: "Slide 3",
    caption: "معنى التوافق",
    text: "حياة سالمة و مريحة لأقصى درجة",
    header: "Slide 3 Header",
    key: "3"
  }
];
// 

class ArabicCarouselComp extends Component {
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
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          className="carouselImg"
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img height="500" src={item.src} alt={item.altText} />
          <CarouselCaption captionText={item.text} captionHeader={item.caption} />
        </CarouselItem>
      );
    });

    return (
      <div className="container col-12 col-lg-12 col-xl-9">
      <div className="row-content">
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
      </div>
      </div>
    );
  }
}


export default ArabicCarouselComp;
