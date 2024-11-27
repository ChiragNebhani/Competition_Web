import React from "react";
import './about.css';

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <img
          src="/src/assets/aboutpage1.svg"
          alt="Aboutpage Background"
          className="aboutpage-image"
        />
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="about-container">
          <div className="about-text">
            <h2>Our Story</h2>
            <p>ROBOFEST is Bhilwara's premier robotics festival, bringing together young innovators, engineers, and technology enthusiasts. Founded with the vision to promote robotics and artificial intelligence among students, we've become a platform for showcasing talent and fostering innovation.</p>
            <p>Our mission is to inspire the next generation of engineers and scientists by providing them with hands-on experience in robotics and automation. Through our competitions and workshops, we aim to bridge the gap between theoretical knowledge and practical application.</p>
          </div>
          <div className="about-image">
            <img src="./src/assets/Robofest2.svg" alt="ROBOFEST Event" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="features-container">
          <div className="features-grid">
            <div className="feature-card" style={{ animationDelay: "0.2s" }}>
              <div className="feature-icon">🤖</div>
              <h3>Innovation</h3>
              <p>Fostering creativity and innovative thinking through hands-on robotics challenges.</p>
            </div>
            <div className="feature-card" style={{ animationDelay: "0.4s" }}>
              <div className="feature-icon">🎓</div>
              <h3>Education</h3>
              <p>Providing practical learning experiences in robotics and automation.</p>
            </div>
            <div className="feature-card" style={{ animationDelay: "0.6s" }}>
              <div className="feature-icon">🤝</div>
              <h3>Community</h3>
              <p>Building a network of young innovators and technology enthusiasts.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
