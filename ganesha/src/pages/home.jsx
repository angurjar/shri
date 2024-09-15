import React from 'react';
import '../styles/home.css'; // Make sure to style your components

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          
          <p>Delivering high-quality infrastructure solutions for the oil, gas, telecom, and power sectors.</p>
          <a href="#services" className="cta-button">Explore Our Services</a>
        </div>
        <img src="imge.png" alt="Hero Background" className="hero-img" />
      </section>

      {/* About Us Section */}
      <section id="about" className="about">
        <div className="about-content">
          <h2>About Shri Vinayak Infra</h2>
          <p>With a strong presence in multiple industries, Shri Vinayak Infra is dedicated to providing cutting-edge solutions to meet the growing demands of infrastructure development across India.</p>
          <img src="about-us-image.jpg" alt="Our Company" className="about-img" />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <h2>Our Services</h2>
        <div className="services-grid">
          <div className="service-item">
            <img src="com.png" alt="Service 1" />
            <h3>City Gas Distribution</h3>
            <p>Implementing gas distribution networks across cities, ensuring safe and efficient services.</p>
          </div>
          <div className="service-item">
            <img src="com1.png" alt="Service 2" />
            <h3>Horizontal Directional Drilling</h3>
            <p>Providing rock HDD crossing services, ensuring smooth underground installations.</p>
          </div>
          <div className="service-item">
            <img src="logo.png" alt="Service 3" />
            <h3>MDPE Pipeline Installation</h3>
            <p>Offering high-quality MDPE pipeline installation for urban gas distribution systems.</p>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section id="clients" className="clients">
        <h2>Our Valued Clients</h2>
        <p>Trusted by industry leaders for reliable infrastructure solutions.</p>
        <div className="client-logos">
          <img src="client1-logo.png" alt="Client 1" />
          <img src="client2-logo.png" alt="Client 2" />
          <img src="client3-logo.png" alt="Client 3" />
          {/* Add more client logos as needed */}
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact" className="contact">
        <h2>Get in Touch</h2>
        <form action="submit-form.php" method="post">
          <label htmlFor="name">Your Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Your Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Your Message:</label>
          <textarea id="message" name="message" required></textarea>

          <button type="submit" className="submit-button">Send Message</button>
        </form>
        <div className="contact-info">
          <p>Email: info@shri-vinayak-infra.com</p>
          <p>Phone: +91-1234567890</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
