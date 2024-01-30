import React, { useState } from 'react';
import './signup.css';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    // Common fields for both donors and recipients
    username: '',
    email: '',
    password: '',
    phoneNumber: '',
    age: '',
    // Donor-specific fields
    donorBloodType: '',
    // Recipient-specific fields
    recipientBloodNeed: '',
  });

  const [isDonor, setIsDonor] = useState(true);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Perform actions with the form data, e.g., send to a server
  };

  return (
    <div className="container">
      <div className="toggle-buttons">
        <h2
          className={isDonor ? 'active' : ''}
          onClick={() => setIsDonor(true)}
        >
          Donor Information
        </h2>
        <h2
          className={!isDonor ? 'active' : ''}
          onClick={() => setIsDonor(false)}
        >
          Recipient Information
        </h2>
      </div>

      <form onSubmit={handleFormSubmit}>
        {isDonor ? (
          <section>
            <label>
              Username:
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Age:
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Phone Number:
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
              />
            </label>
            {/* Other donor-specific fields */}
          </section>
        ) : (
          <section>
            <label>
              Username:
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Age:
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Phone Number:
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
              />
            </label>
            {/* Other recipient-specific fields */}
          </section>
        )}

        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" value={formData.password} onChange={handleInputChange} />
        </label>
        <br />

        {isDonor ? (
          <label>
            Blood Type:
            <input
              type="text"
              name="donorBloodType"
              value={formData.donorBloodType}
              onChange={handleInputChange}
            />
          </label>
        ) : (
          <label>
            Blood Needed:
            <input
              type="text"
              name="recipientBloodNeed"
              value={formData.recipientBloodNeed}
              onChange={handleInputChange}
            />
          </label>
        )}

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignupForm;
