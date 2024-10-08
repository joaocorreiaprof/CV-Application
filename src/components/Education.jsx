// Education.jsx
import { useState } from "react";

function ButtonWithForm({ popForm, setPopForm, addEducation }) {
  const [school, setSchool] = useState("");
  const [degree, setDegree] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [location, setLocation] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const buttonStyle = {
    background: isHovered ? "#557377" : "#6f898f",
    color: "#fff",
    padding: "10px 20px",
    fontSize: "15px",
    fontWeight: "600",
    border: "none",
    borderRadius: "25px",
    cursor: "pointer",
    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
    transition: "transform 0.25s ease, background 0.3s ease",
    width: "97%",
    marginTop: "12px",
    marginBottom: "10px",
    transform: isHovered ? "scale(1.05)" : "scale(1)",
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addEducation({ school, degree, startDate, endDate, location });

    // Reset form fields
    setSchool("");
    setDegree("");
    setStartDate("");
    setEndDate("");
    setLocation("");
    setPopForm(false);
  };

  return (
    <div>
      <button
        style={buttonStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setPopForm(true)}
      >
        + Education
      </button>
      {popForm && (
        <form onSubmit={handleSubmit}>
          <label>
            School
            <input
              type="text"
              placeholder="Enter school / university"
              value={school}
              onChange={(event) => setSchool(event.target.value)}
            />
          </label>
          <label>
            Degree
            <input
              type="text"
              placeholder="Enter degree / field of study"
              value={degree}
              onChange={(event) => setDegree(event.target.value)}
            />
          </label>
          <label>
            Start Date
            <input
              type="text"
              placeholder="Enter start date"
              value={startDate}
              onChange={(event) => setStartDate(event.target.value)}
            />
          </label>
          <label>
            End Date
            <input
              type="text"
              placeholder="Enter end date"
              value={endDate}
              onChange={(event) => setEndDate(event.target.value)}
            />
          </label>
          <label>
            Location
            <input
              type="text"
              placeholder="Enter location"
              value={location}
              onChange={(event) => setLocation(event.target.value)}
            />
          </label>
          <button type="submit">Add Education</button>
        </form>
      )}
    </div>
  );
}

function Accordion({ addEducation }) {
  const [popForm, setPopForm] = useState(false);

  return (
    <ButtonWithForm
      popForm={popForm}
      setPopForm={setPopForm}
      addEducation={addEducation}
    />
  );
}

export { Accordion };
