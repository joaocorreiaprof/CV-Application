import { useState } from "react";

function ButtonWithExperienceForm({ popForm, setPopForm, addExperience }) {
  const [companyName, setCompanyName] = useState("");
  const [positionTitle, setPositionTitle] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
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

    addExperience({
      companyName,
      positionTitle,
      startDate,
      endDate,
      location,
      description,
    });

    setCompanyName("");
    setPositionTitle("");
    setStartDate("");
    setEndDate("");
    setLocation("");
    setDescription("");
    setPopForm(false); // Close form after submission
  };

  return (
    <div>
      <button
        style={buttonStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setPopForm(!popForm)}
      >
        + Experience
      </button>
      {popForm && (
        <div>
          <form onSubmit={handleSubmit}>
            <label>
              Company Name
              <input
                type="text"
                placeholder="Enter company name"
                value={companyName}
                onChange={(event) => setCompanyName(event.target.value)}
              />
            </label>
            <label>
              Position Title
              <input
                type="text"
                placeholder="Enter position title"
                value={positionTitle}
                onChange={(event) => setPositionTitle(event.target.value)}
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
            <label>
              Description
              <textarea
                placeholder="Enter description"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
              />
            </label>
            <button type="submit">Add Experience</button>
          </form>
        </div>
      )}
    </div>
  );
}

function Experience({ addExperience }) {
  const [popForm, setPopForm] = useState(false);

  return (
    <ButtonWithExperienceForm
      popForm={popForm}
      setPopForm={setPopForm}
      addExperience={addExperience}
    />
  );
}

export { Experience };
