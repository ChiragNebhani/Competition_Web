import React, { useState } from "react";
import './Gallery.css';

const Gallery = () => {
  const [lightboxImage, setLightboxImage] = useState(null);

  const handleImageClick = (imgSrc) => {
    setLightboxImage(imgSrc);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div>

      {/* Hero Section */}
      <section className="gallery-hero">
        <h1>Our Gallery</h1>
      </section>

      {/* Gallery Section */}
      <div className="gallery-container">
        <div className="gallery-grid">
          {['1', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19'].map((num, index) => (
            <div className="gallery-item" style={{ animationDelay: `${0.1 * index}s` }} key={num} onClick={() => handleImageClick(`./Assets/${num}.jpeg`)}>
              <img src={`./src/assets/images/${num}.jpeg`} alt={`ROBOFEST Event ${num}`} />
              <div className="gallery-overlay">
                <div className="gallery-text">
                  <h3>ROBOFEST 2024</h3>
                  <p>Amazing moments from our event</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <button className="close-lightbox" onClick={closeLightbox}>×</button>
          <div className="lightbox-content">
            <img src={lightboxImage} alt="Enlarged" />
          </div>
        </div>
      )}

    </div>
  );
};

export default Gallery;
