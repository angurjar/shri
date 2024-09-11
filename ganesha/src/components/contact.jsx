import React from 'react';
import '../styles/contact.css'; // Ensure to include your CSS for styling

// Import your company logo and other images


const ContactUs = () => {
  return (
    <div className="contact-us">
      <div className="contact-header">
        <h2>Contact Us</h2>
      </div>

      <div className="contact-content">
        <div className="contact-info">
          <h3>Corporate Office:</h3>
          <p>Shri Vinayak Infra</p>
          <p>Shakuntla Heights, Flat no-2, Akriti Retreat, Bhopal, India</p>
          <p>Phone: 8368411797, 8989791157</p>

          <h3>Corporate Office:</h3>
          <p>H.No.-160/B, DK 5, Danishkunj, Kolar, Bhopal (M.P.)</p>

          <h3>Registered Office:</h3>
          <p>Flat no S2, Akriti Retreat, Bawadia kalan, Bhopal (M.P.)</p>
        </div>

        <div className="contact-image">
        
        </div>
      </div>

      <div className="how-to-use">
        <h3>How to Use Our Services</h3>
        <p>We offer a wide range of services tailored to your needs. To get started:</p>
        <ul>
          <li>Browse through our <a href="/services">Services Page</a> to find what suits you.</li>
          <li>Contact our team for a detailed consultation.</li>
          <li>Sign up on our platform and enjoy seamless service delivery.</li>
        </ul>
        <p>Our team is always here to assist you with any inquiries or support you need. Feel free to reach out using the contact details provided, or visit our offices for a face-to-face meeting.</p>
      </div>
      
     
    </div>
  );
};

export default ContactUs;
