import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


const MyCarousel = () => {
    // Owl Carousel settings
    const options = {
      items: 3,
      loop: true,
      margin: 10,
      autoplay: true,
      autoplayTimeout: 3000,
      responsive: {
        0: {
          items: 1
        },
        768: {
          items: 2
        },
        992: {
          items: 3
        }
      }
    };
  
    return (
      <OwlCarousel className="owl-theme" {...options}>
        <div className="item"><h4>1</h4></div>
        <div className="item"><h4>2</h4></div>
        <div className="item"><h4>3</h4></div>
        <div className="item"><h4>4</h4></div>
        <div className="item"><h4>5</h4></div>
        <div className="item"><h4>6</h4></div>
        {/* Add more items as needed */}
      </OwlCarousel>
    );
  };
  
  export default MyCarousel;
  