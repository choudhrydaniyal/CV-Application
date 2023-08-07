import { useState } from "react";
import PropTypes from "prop-types";

export default function General({ onGeneralSubmit }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    school: "",
    study: "",
    date: "",
    company: "",
    position: "",
    responsibilities: "",
    dateOfJoining: "",
    dateOfLeaving: "",
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onGeneralSubmit(formData);
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  return (
    <div>
      <h2>CV Generator</h2>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </label>
          <br />
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </label>
          <br />
          <label>
            PhoneNo:
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
            />
          </label>
          <br />
          <label>
            School Name:
            <input
              type="text"
              name="school"
              value={formData.school}
              onChange={handleInputChange}
              required
            />
          </label>
          <br />
          <label>
            Title Of Study:
            <input
              type="text"
              name="study"
              value={formData.study}
              onChange={handleInputChange}
              required
            />
          </label>
          <br />
          <label>
            Date Of Study:
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              required
            />
          </label>
          <br />
          <label>
            Company Name:
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              required
            />
          </label>
          <br />
          <label>
            Position Title:
            <input
              type="text"
              name="position"
              value={formData.position}
              onChange={handleInputChange}
              required
            />
          </label>
          <br />
          <label>
            Main Responsibilities:
            <input
              type="text"
              name="responsibilities"
              value={formData.responsibilities}
              onChange={handleInputChange}
              required
            />
          </label>
          <br />
          <label>
            Date Of Joining:
            <input
              type="date"
              name="dateOfJoining"
              value={formData.dateOfJoining}
              onChange={handleInputChange}
              required
            />
          </label>
          <br />
          <label>
            Date Of Leaving:
            <input
              type="date"
              name="dateOfLeaving"
              value={formData.dateOfLeaving}
              onChange={handleInputChange}
              required
            />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
  );
}

General.propTypes = {
  onGeneralSubmit: PropTypes.func.isRequired,
};
