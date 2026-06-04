import React from 'react';
import { useNavigate } from 'react-router-dom';
import v from '../media/mov_bbb.mp4';
import v1 from '../media/v1.mp4';
import './HeroSection.css';
import myPicture from '../media/bgpic.jpg';

function HeroSection() {
  const navigate = useNavigate();

  const handleConsultButtonClick = () => {
    navigate('/signin');
  };

  return (
    <div className="hero-section" style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
      {/* Background Video */}
      {/* <video autoPlay muted loop className="hero-video" style={{ width: '100%', height: '100%', objectFit: 'cover', marginRight:"-10px" }}>
        <source src={v1} type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}

        <img 
          src={myPicture} 
          alt="Description of my picture" 
          style={{ 
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: -1
          }} 
        />



      {/* Hero Content */}
      <div className="hero-content">
        <h2>Find Natural Healing with Ayurveda</h2>
        <p>Consult Certified Ayurvedic Doctors for Holistic Well-Being</p>

        <button
          className="consult-btn"
          onClick={handleConsultButtonClick}
        >
          Book Your Appointment Today
        </button>

        {/* Tabbed Navigation */}
      </div>
    </div>
  );
}

export default HeroSection;
