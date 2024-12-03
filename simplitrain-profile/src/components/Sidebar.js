import React from "react";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="profile-section">
        <img src="profile-placeholder.png" alt="Profile" className="profile-pic" />
        <h2>Rakesh Raushan</h2>
      </div>
      <nav>
        <ul>
          <li>Profile</li>
          <li>Education</li>
          <li>Work Experience</li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
