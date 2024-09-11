import React from 'react';

const OurTeam = () => {
  return (
    <div className="our-team">
      <h2>Our Team</h2>
      <div className="team-members">
        <div className="team-member">
          <img src="[Image URL]" alt="[Team Member Name]" className="team-member-image" />
          <p><strong>Name:</strong> [Team Member Name]</p>
          <p><strong>Role:</strong> [Team Member Role]</p>
        </div>
        {/* Repeat for more team members */}
      </div>
    </div>
  );
};

export default OurTeam;
