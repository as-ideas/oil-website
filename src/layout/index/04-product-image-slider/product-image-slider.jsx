import React from "react";
import Slider from "react-slick";

import './product-image-slider.scss'


const settings = {
  arrows: true,
  centerMode: false,
  dots: false,
  infinite: true,
  speed: 500,
  lazyLoad: 'ondemand',
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 480,
      settings: {
        // arrows: false,
        // centerMode: true,
        // centerPadding: '20px',
        slidesToShow: 1
      }
    }
  ]
};

const GalleryImage = ({image}) => {
  return <div className="product-image-slider__item">
    <img src={image}/>
  </div>
};

export default class ProductImageSlider extends React.Component {
  render() {
    return (
      <div id="product-image-slider" className="product-image-slider section">
        <div className="product-image-slider-content section-content">
          <Slider {...settings}>
            <GalleryImage image={require('./images/example-1.png')}/>
            <GalleryImage image={require('./images/example-2.png')}/>
            <GalleryImage image={require('./images/example-3.png')}/>
          </Slider>
        </div>
      </div>
    );
  }
}
