import './treatmentsection.css';
import React, { useState, useEffect } from 'react';
import capsuleImage from '../media/capsule.jpg';

const medicines = [
  { name: 'Ashwagandha Capsules', price: '₹499', image: capsuleImage },
  { name: 'Triphala Churna', price: '₹349', image: capsuleImage },
  { name: 'Brahmi Syrup', price: '₹299', image: capsuleImage },
  { name: 'Neem Tablets', price: '₹399', image: capsuleImage },
  { name: 'Amla Powder', price: '₹259', image: capsuleImage },
  { name: 'Shilajit Resin', price: '₹899', image: capsuleImage },
  { name: 'Giloy Juice', price: '₹599', image: capsuleImage },
  { name: 'Moringa Capsules', price: '₹699', image: capsuleImage },
  { name: 'Turmeric Tablets', price: '₹399', image: capsuleImage },
  { name: 'Herbal Tea', price: '₹199', image: capsuleImage },
  { name: 'Ayurvedic Face Cream', price: '₹499', image: capsuleImage }, 
  { name: 'Chyawanprash', price: '₹549', image: capsuleImage },
  { name: 'Herbal Shampoo', price: '₹349', image: capsuleImage },
  { name: 'Joint Pain Oil', price: '₹799', image: capsuleImage },
  { name: 'Aloe Vera Gel', price: '₹299', image: capsuleImage }
];

const Medicines = () => {
  const [visibleCount, setVisibleCount] = useState(5);

  const updateVisibleCount = () => {
    const width = window.innerWidth;
    if (width > 1000) {
      setVisibleCount(5); 
    } else if (width <= 1000 && width > 700) {
      setVisibleCount(4); 
    } else if (width <= 700 && width > 530){
      setVisibleCount(3); 
    } else if (width <= 530 && width > 430){
      setVisibleCount(2); 
    }
    else if (width <= 431){
      setVisibleCount(1); 
    }
  };

  useEffect(() => {
    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  const showMore = () => {
    setVisibleCount(prevCount => Math.min(prevCount + visibleCount, medicines.length));
  };

  return (
    <section className="medicines-section">
      <div className="medicines-header">
        <h2 className="section-title">Explore All Medicines</h2>
      </div>
      <div className="medicines-grid">
        {medicines.slice(0, visibleCount).map((medicine, index) => (
          <div className="medicine-cardt" key={index}>
            <img src={medicine.image} alt={medicine.name} className="medicine-image" />
            <h3 className="medicine-name">{medicine.name}</h3>
            <p className="medicine-price">{medicine.price}</p>
          </div>
        ))}
      </div>
      {visibleCount < medicines.length && (
        <div className="see-more-wrapper">
          <a className="see-more-link" onClick={showMore}>
            See More <span className="arrow-icon">&#9662;</span>
          </a>
        </div>
      )}
    </section>
  );
};

export default Medicines;