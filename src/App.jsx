// App.jsx
import { useState } from "react";
import { GeneralInfo } from "./components/generalInfo";
import "./app.css";
import Accordion from "./components/educationAndExperience";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [experiences, setExperiences] = useState([]);

  const addExperience = (newExperience) => {
    setExperiences([...experiences, newExperience]);
  };

  return (
    <div className="main-content">
      <div className="user-forms">
        <GeneralInfo
          firstName={firstName}
          setFirstName={setFirstName}
          lastName={lastName}
          setLastName={setLastName}
          email={email}
          setEmail={setEmail}
          phoneNumber={phoneNumber}
          setPhoneNumber={setPhoneNumber}
          address={address}
          setAddress={setAddress}
        />
        <Accordion addExperience={addExperience} />
      </div>
      <div className="cv-display">
        <div className="cv-header">
          <div className="user-first-name">First Name: {firstName}</div>
          <div className="user-last-name">Last Name: {lastName}</div>
          <div className="user-email">Email: {email}</div>
          <div className="user-number">Phone Number: {phoneNumber}</div>
          <div className="user-address">Address: {address}</div>
        </div>
        <div className="cv-education">
          {experiences.map((experience, index) => (
            <div key={index} className="cv-experience">
              <div className="cv-school">{experience.school}</div>
              <div className="cv-degree">{experience.degree}</div>
              <div className="cv-start-date">{experience.startDate}</div>
              <div className="cv-end-date">{experience.endDate}</div>
              <div className="cv-location">{experience.location}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export { App };
