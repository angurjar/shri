import React from 'react';
import '../styles/home.css'; // Ensure to include your CSS for styling

const Home = () => {
  return (
    <div className="home">
     

      <section id="home" className="hero">
        <div className="hero-content">
          <h1>Welcome to Our Company</h1>
          <p>Delivering innovative solutions tailored to your needs.</p>
          <a href="#services" className="cta-button">Explore Our Services</a>
        </div>
      </section>

      <section id="about" className="about">
        <h2>About Us</h2>
        <p>We are a passionate team dedicated to delivering top-notch solutions.</p>
        <img src="about-us-image.jpg" alt="About Us" />
      </section>

      <section id="services" className="services">
        <h2>Our Services</h2>
        <div className="services-grid">
          <div className="service-item">
            <h3>Service 1</h3>
            <p>Description of Service 1.</p>
          </div>
          <div className="service-item">
            <h3>Service 2</h3>
            <p>Description of Service 2.</p>
          </div>
          {/* Add more services as needed */}
        </div>
      </section>

      <section id="clients" className="clients">
        <h2>Our Clients</h2>
        <div className="client-logos">
          <img src="client1-logo.png" alt="Client 1" />
          <img src="client2-logo.png" alt="Client 2" />
          {/* Add more client logos as needed */}
        </div>
      </section>

      <section id="contact" className="contact">
        <h2>Contact Us</h2>
        <form action="submit-form.php" method="post">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>

          <button type="submit">Send Message</button>
        </form>
        <div className="contact-info">
          <p>Email: contact@yourdomain.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
      </section>

     
    </div>
  );
};

export default Home;
