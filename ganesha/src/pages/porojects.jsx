import React from 'react';
import '../styles/detailSection.css'; // Ensure to include your CSS for styling

const DetailSection = () => {
  const details = [
    {
      title: 'Project One',
      description: 'This is a brief description of Project One. It highlights key features and goals.',
      imageUrl: 'project-one.jpg',
    },
    {
      title: 'Project Two',
      description: 'This is a brief description of Project Two. It highlights key features and goals.',
      imageUrl: 'project-two.jpg',
    },
    {
      title: 'Project Three',
      description: 'This is a brief description of Project Three. It highlights key features and goals.',
      imageUrl: 'project-three.jpg',
    },
    // Add more details as needed
  ];

  return (
    <div className="detail-section">
      <h2>Our Projects</h2>
      <div className="detail-cards">
        {details.map((detail, index) => (
          <div key={index} className="card">
            <img src={detail.imageUrl} alt={detail.title} className="card-image" />
            <div className="card-content">
              <h3 className="card-title">{detail.title}</h3>
              <p className="card-description">{detail.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DetailSection;
