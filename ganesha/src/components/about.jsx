import React from 'react';
import '../styles/about.css'

const AboutUs = () => {
  return (
    <div className="about-us">
      {/* Hero Section */}
      <div className="hero-section">
        <img src="/path/to/hero-image.jpg" alt="About Us" className="hero-image" />
        <div className="hero-content">
          <h1>Welcome to Our Company</h1>
          <p>We are committed to delivering the best services to our clients worldwide.</p>
        </div>
      </div>

      {/* Mission Statement */}
      <section className="mission-statement">
        <h2>Our Mission</h2>
        <p>Our mission is to innovate and lead in our industry, providing top-notch solutions that drive success for our clients.</p>
      </section>

      {/* Feature Cards */}
      <section className="feature-section">
        <h2>What We Offer</h2>
        <div className="feature-cards">
          <div className="card">
            <img src="/path/to/feature1.jpg" alt="Feature 1" className="card-image" />
            <div className="card-content">
              <h3>Innovative Solutions</h3>
              <p>We provide cutting-edge technology solutions tailored to your business needs.</p>
            </div>
          </div>

          <div className="card">
            <img src="/path/to/feature2.jpg" alt="Feature 2" className="card-image" />
            <div className="card-content">
              <h3>Expert Team</h3>
              <p>Our team of professionals brings extensive experience and expertise.</p>
            </div>
          </div>

          <div className="card">
            <img src="/path/to/feature3.jpg" alt="Feature 3" className="card-image" />
            <div className="card-content">
              <h3>Client Satisfaction</h3>
              <p>We prioritize our clients’ success, ensuring satisfaction at every step.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <h2>Meet Our Team</h2>
        <div className="team-cards">
          <div className="team-card">
            <img src="/path/to/team-member1.jpg" alt="Team Member 1" className="team-image" />
            <h3>Jane Doe</h3>
            <p>CEO</p>
          </div>

          <div className="team-card">
            <img src="/path/to/team-member2.jpg" alt="Team Member 2" className="team-image" />
            <h3>John Smith</h3>
            <p>CTO</p>
          </div>

          <div className="team-card">
            <img src="/path/to/team-member3.jpg" alt="Team Member 3" className="team-image" />
            <h3>Emily Johnson</h3>
            <p>COO</p>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="testimonials-section">
        <h2>What Our Clients Say</h2>
        <div className="testimonial-cards">
          <div className="testimonial-card">
            <p>"This company transformed our business!"</p>
            <h4>- Client A</h4>
          </div>

          <div className="testimonial-card">
            <p>"Outstanding service and support."</p>
            <h4>- Client B</h4>
          </div>

          <div className="testimonial-card">
            <p>"Highly recommend their innovative solutions."</p>
            <h4>- Client C</h4>
          </div>
        </div>
      </section>

      {/* Footer */}
     
    </div>
  );
};

export default AboutUs;
