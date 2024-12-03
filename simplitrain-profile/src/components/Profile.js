import React, { useState } from "react";

const Profile = () => {
  const [personalInfo, setPersonalInfo] = useState({
    firstName: "Rohan",
    lastName: "Raushan",
    age: 35,
    gender: "Male",
    address: "2nd Floor, 99, 5th Cross Rd, Koramangala, Bengaluru, Karnataka 560095",
  });

  const [contactInfo, setContactInfo] = useState({
    email: "Rakeshraushan@gmail.com",
    phone: "+91 9922004856",
  });

  const [isEditingPersonal, setIsEditingPersonal] = useState(false);
  const [isEditingContact, setIsEditingContact] = useState(false);

  const handlePersonalChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleContactChange = (e) => {
    const { name, value } = e.target;
    setContactInfo((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section className="profile-details">
      <h2>Profile</h2>

      {/* Personal Information Section */}
      <div className="section">
        <h3>Personal Information</h3>
        {isEditingPersonal ? (
          <>
            <input
              type="text"
              name="firstName"
              value={personalInfo.firstName}
              onChange={handlePersonalChange}
              placeholder="First Name"
            />
            <input
              type="text"
              name="lastName"
              value={personalInfo.lastName}
              onChange={handlePersonalChange}
              placeholder="Last Name"
            />
            <input
              type="number"
              name="age"
              value={personalInfo.age}
              onChange={handlePersonalChange}
              placeholder="Age"
            />
            <input
              type="text"
              name="gender"
              value={personalInfo.gender}
              onChange={handlePersonalChange}
              placeholder="Gender"
            />
            <textarea
              name="address"
              value={personalInfo.address}
              onChange={handlePersonalChange}
              placeholder="Address"
            />
            <button onClick={() => setIsEditingPersonal(false)}>Save</button>
          </>
        ) : (
          <>
            <p>First Name: {personalInfo.firstName}</p>
            <p>Last Name: {personalInfo.lastName}</p>
            <p>Age: {personalInfo.age}</p>
            <p>Gender: {personalInfo.gender}</p>
            <p>Address: {personalInfo.address}</p>
            <button onClick={() => setIsEditingPersonal(true)}>Edit</button>
          </>
        )}
      </div>

      {/* Contact Information Section */}
      <div className="section">
        <h3>Contact Information</h3>
        {isEditingContact ? (
          <>
            <input
              type="email"
              name="email"
              value={contactInfo.email}
              onChange={handleContactChange}
              placeholder="Email"
            />
            <input
              type="tel"
              name="phone"
              value={contactInfo.phone}
              onChange={handleContactChange}
              placeholder="Phone"
            />
            <button onClick={() => setIsEditingContact(false)}>Save</button>
          </>
        ) : (
          <>
            <p>Email: {contactInfo.email}</p>
            <p>Phone: {contactInfo.phone}</p>
            <button onClick={() => setIsEditingContact(true)}>Edit</button>
          </>
        )}
      </div>
    </section>
  );
};

export default Profile;
