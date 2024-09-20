import { useState } from "react";

function Panel({ title, children }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <section className="panel">
      <h3>{title}</h3>
      {isActive && children}
      <button onClick={() => setIsActive(!isActive)}>
        {isActive ? "Hide" : "Show"}
      </button>
    </section>
  );
}

function ButtonWithForm({ popForm, setPopForm, addEducation }) {
  const [school, setSchool] = useState("");
  const [degree, setDegree] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    addEducation({
      school,
      degree,
      startDate,
      endDate,
      location,
    });

    setSchool("");
    setDegree("");
    setStartDate("");
    setEndDate("");
    setLocation("");
    setPopForm(false);
  };

  return (
    <div>
      <button onClick={() => setPopForm(true)}>+ Experience</button>
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
              type="date"
              placeholder="Enter start date"
              value={startDate}
              onChange={(event) => setStartDate(event.target.value)}
            />
          </label>
          <label>
            End Date
            <input
              type="date"
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
    <>
      <h2>Education</h2>
      <Panel title="About">
        <ButtonWithForm
          popForm={popForm}
          setPopForm={setPopForm}
          addEducation={addEducation}
        />
      </Panel>
    </>
  );
}

export { Accordion, Panel };
