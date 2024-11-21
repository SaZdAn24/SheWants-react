import React from 'react';
import Slider from 'react-slick';
import './AboutUs.css'; 

import image1 from '../../assets/obout.jpg';
import image2 from '../../assets/obout2.png';
import image3 from '../../assets/obout3.png';

function AboutUs() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  return (
    <main>
      <section id="about" className="about">
        <Slider {...settings}>
          <div>
            <img src={image1} alt="Slide 1" className="slide-image" />
          </div>
          <div>
            <img src={image2} alt="Slide 2" className="slide-image" />
          </div>
          <div>
            <img src={image3} alt="Slide 3" className="slide-image" />
          </div>
        </Slider>
      </section>
    </main>
  );
}

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="slick-arrow slick-next" onClick={onClick}>
      →
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="slick-arrow slick-prev" onClick={onClick}>
      ←
    </div>
  );
};

export default AboutUs;
