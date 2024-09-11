import React from 'react';
import '../styles/services.css'; // Make sure to include your CSS for styling

const ImageGallery = () => {
  // Array of images with titles and descriptions
  const images = [
    {
      src: '/path_to_image1.png', // Replace with your image paths
      title: 'City Gas Distribution Project',
      description: 'A comprehensive city gas distribution network project in Rajasthan.',
    },
    {
      src: '/path_to_image2.png',
      title: 'Horizontal Directional Drilling',
      description: 'Rock HDD crossing project completed successfully.',
    },
    {
      src: '/path_to_image3.png',
      title: 'MDPE Pipeline Installation',
      description: 'High-quality pipeline installation for urban gas distribution.',
    },
    // Add more images as needed
  ];

  const services = [
    {
      title: 'Gas Pipeline Installation',
      description: 'Expert installation of MDPE and HDPE pipelines for urban and rural gas distribution.',
    },
    {
      title: 'Horizontal Directional Drilling',
      description: 'Advanced HDD techniques for crossing rivers, roads, and other obstacles.',
    },
    {
      title: 'City Gas Distribution',
      description: 'End-to-end services for city gas distribution networks, including design, implementation, and maintenance.',
    },
    // Add more services as needed
  ];

  const equipment = [
    {
      name: 'Directional Drilling Rig',
      description: 'State-of-the-art drilling rig capable of rock and soil HDD operations.',
    },
    {
      name: 'MDPE Welding Machines',
      description: 'High-efficiency welding machines for MDPE pipeline installations.',
    },
    {
      name: 'Pipeline Inspection Tools',
      description: 'Advanced tools for pipeline inspection and quality assurance.',
    },
    // Add more equipment as needed
  ];

  const workProcess = [
    {
      step: '1. Site Survey',
      description: 'Conducting detailed site surveys to assess the project requirements and constraints.',
    },
    {
      step: '2. Design & Planning',
      description: 'Creating comprehensive designs and planning the workflow for efficient execution.',
    },
    {
      step: '3. Equipment Setup',
      description: 'Setting up the required equipment and ensuring all safety protocols are in place.',
    },
    {
      step: '4. Execution',
      description: 'Carrying out the project with precision, adhering to quality and safety standards.',
    },
    {
      step: '5. Inspection & Testing',
      description: 'Inspecting and testing the completed work to ensure it meets all specifications.',
    },
    {
      step: '6. Project Handover',
      description: 'Finalizing the project and handing over to the client with all necessary documentation.',
    },
    // Add more steps as needed
  ];

  return (
    <div className="image-gallery">
      <h2>Our Projects & Services</h2>
      <div className="image-grid">
        {images.map((image, index) => (
          <div key={index} className="image-card">
            <img src={image.src} alt={image.title} />
            <h4>{image.title}</h4>
            <p>{image.description}</p>
          </div>
        ))}
      </div>

      <section className="services-section">
        <h3>Our Services</h3>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <h4>{service.title}</h4>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="equipment-section">
        <h3>Equipment & Tools</h3>
        <div className="equipment-grid">
          {equipment.map((item, index) => (
            <div key={index} className="equipment-card">
              <h4>{item.name}</h4>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="work-process-section">
        <h3>Our Work Process</h3>
        <div className="work-process-grid">
          {workProcess.map((step, index) => (
            <div key={index} className="work-process-card">
              <h4>{step.step}</h4>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

export default ImageGallery;
