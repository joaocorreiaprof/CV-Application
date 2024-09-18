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

function ButtonWithForm({ popForm, setPopForm }) {
  return (
    <div>
      <button onClick={() => setPopForm(true)}>+ Experience</button>
      {popForm && (
        <form>
          <label>
            School
            <input type="text" placeholder="Enter school / university" />
          </label>
          <label>
            Degree
            <input type="text" placeholder="Enter degree / field of study" />
          </label>
          <label>
            Start Date
            <input type="date" placeholder="Enter start date" />
          </label>
          <label>
            End Date
            <input type="date" placeholder="Enter end date" />
          </label>
          <label>
            Location
            <input type="text" placeholder="Enter location" />
          </label>
        </form>
      )}
    </div>
  );
}

export default function Accordion() {
  const [popForm, setPopForm] = useState(false); // Lifted state

  return (
    <>
      <h2>Education</h2>
      <Panel title="About">
        <ButtonWithForm popForm={popForm} setPopForm={setPopForm} />
      </Panel>
    </>
  );
}
