import React from 'react';
import './CompanyPolicy.css';

const CompanyPolicy = () => {
  return (
    <div className="company-policy">
      <header className="policy-header">
        <h1>Our Commitment to Excellence</h1>
        <p>We are dedicated to upholding the highest standards of compliance, quality, and safety in every project we undertake.</p>
      </header>

      <section className="policy-section">
        <h2>Compliance with Statutory and Legal Requirements</h2>
        <p>
          Our company is committed to full compliance with all statutory and legal requirements applicable under the laws of the government. We continually monitor and adapt to regulatory changes to ensure our operations remain within legal boundaries.
        </p>
      </section>

      <section className="policy-section">
        <h2>Promoting HSE Culture</h2>
        <p>
          We actively promote and adopt a Health, Safety, and Environment (HSE) culture at all levels within the company. By providing qualified resources and ongoing training to our employees, we ensure a safe and healthy work environment.
        </p>
      </section>

      <section className="policy-section">
        <h2>Commitment to Quality Standards</h2>
        <p>
          We undertake each project with complete determination, delivering results that meet or exceed quality standards. Our commitment to quality is reflected in every aspect of our operations, from planning to execution.
        </p>
      </section>

      <section className="policy-section">
        <h2>New Policy - Sustainability and Innovation</h2>
        <p>
          Our company is dedicated to sustainability and innovation. We integrate sustainable practices into our operations and continuously seek innovative solutions that reduce environmental impact and enhance efficiency.
        </p>
      </section>

      
    </div>
  );
}

export default CompanyPolicy;
