import React from 'react';
import './Contact.css'; 

const Contact = () => {
  return (
    <div>
      {/* Contact Header */}
      <section className="contact-header">
        <h1>Get in Touch</h1>
        <p>We'd love to hear from you!</p>
      </section>

      {/* Contact Content */}
      <div className="contact-content">
        {/* Contact Form */}
        <div className="contact-form">
          <form action="#" method="POST">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input type="tel" id="phone" name="phone" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" required></textarea>
            </div>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="contact-info">
          <h2>Contact Information</h2>
          <div className="info-item">
            <h3>Address</h3>
            <p>7-k-17, near Shivaji park, Sector 5, R C Vyas Colony</p>
            <p>Bhilwara, Rajasthan</p>
          </div>
          <div className="info-item">
            <h3>Email</h3>
            <p>info@lera.co.in</p>
          </div>
          <div className="info-item">
            <h3>Phone</h3>
            <p>+91 9636936926</p>
          </div>
          <div className="info-item">
            <h3>Event Hours</h3>
            <p>January 11-12, 2025</p>
            <p>9:00 AM - 6:00 PM</p>
          </div>
          <div className="social-links">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a href="/" title="Facebook">FB</a>
              <a href="/" title="Twitter">TW</a>
              <a href="/" title="Instagram">IG</a>
              <a href="/" title="LinkedIn">IN</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
