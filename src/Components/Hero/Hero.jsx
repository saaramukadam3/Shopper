import React from 'react';
import './Hero.css';
import hand_icon from '../Assets/hand_icon.png';
import hero_image from '../Assets/hero_image.png';

const Hero = () => {
  const scrollToLatest = () => {
    const section = document.getElementById("latest-collection");
    section?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className='hero'>
      <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
            <div className="hero-hand-icon">
                <p>new</p>
                <img src={hand_icon} alt="" />
            </div>
            <p>collections</p>
            <p>for everyone</p>
        </div>
        <div>
        <button className="hero-latest-btn" onClick={scrollToLatest}>
          Latest Collection →
        </button>
        </div>
      </div>
      <div className="hero-right">
        <img src={hero_image} alt="" />
      </div>
   </div>     

  )
}

export default Hero
