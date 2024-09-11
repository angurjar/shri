import React from 'react';
import '../styles/community.css'; // Make sure to include your CSS for styling

// Import your images


const Community = () => {
  return (
    <div className="community-page">
      <header className="community-header">
        <h1>Our Community</h1>
        <p>Welcome to our vibrant and diverse community. We are proud to bring together people from all walks of life.</p>
      </header>

      <section className="community-events">
        <h2>Upcoming Events</h2>
        <div className="events-grid">
          <div className="event-card">
           
            <h3>Community Picnic</h3>
            <p>Join us for a fun-filled day at the park with games, food, and entertainment for all ages!</p>
          </div>
          <div className="event-card">
          
            <h3>Charity Run</h3>
            <p>Participate in our annual charity run to support local causes and stay fit!</p>
          </div>
          {/* Add more events as needed */}
        </div>
      </section>

      <section className="community-members">
        <h2>Meet Our Members</h2>
        <div className="members-grid">
          <div className="member-card">
         
            <h3>Jane Doe</h3>
            <p>Jane is an active volunteer who organizes community events and helps with charity drives.</p>
          </div>
          <div className="member-card">
           
            <h3>John Smith</h3>
            <p>John is our resident expert in sustainability and leads environmental initiatives.</p>
          </div>
          {/* Add more members as needed */}
        </div>
      </section>

      <section className="community-gallery">
        <h2>Gallery</h2>
        <div className="gallery-grid">
        
          {/* Add more gallery images as needed */}
        </div>
      </section>

      <footer className="community-footer">
        <p>&copy; 2024 Our Community. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Community;
