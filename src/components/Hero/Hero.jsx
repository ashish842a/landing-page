import React from 'react';
import CountUp from 'react-countup';
import '../Hero/Hero.css';

const AnimatedNumber = ({ start, end }) => {
  return <CountUp start={start} end={end} duration={2} />;
};

const Hero = () => {
  return (
    <div className='hero-section'>
      <div className="hero-left">
        <div className="hero-content">
          <h1>
            Discover <br />
            Most Suitable Property
          </h1>

          <p className='para'>
            Find a variety of properties that suit you very easily
            Forget all difficulties in finding a residence for you
          </p>
          <div className="button-9">Subscribe</div>
          <div className="hero-rating">
            <div className="rating-div">
              <span className='rating-point'>
                <AnimatedNumber start={8500} end={9000} />
                <span style={{ color: "#f39c12" }}>+</span>
              </span> <br /><br />
              <p className='para'>Premium Product</p>
            </div>
            <div className="rating-div">
              <span className='rating-point'>
                <AnimatedNumber start={2000} end={2200} />
                <span style={{ color: "#f39c12" }}>+</span>
              </span>  <br /><br />
              <p className='para'>Premium Product</p>
            </div>
            <div className="rating-div">
              <span className='rating-point'>
                <AnimatedNumber start={0} end={30} />
                <span style={{ color: "#f39c12" }}>+</span>
              </span><br /><br />
              <p className='para'>Premium Product</p>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-right">
        <div className="hero-image">
          <img src="/assets/images/hero-image.png" alt="hero image" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
