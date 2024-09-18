// App.jsx
import { useState } from "react";
import { GeneralInfo } from "./components/generalInfo";
import "./app.css";
import Accordion from "./components/educationAndExperience";

function App() {
  // State for personal details
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");

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
        <Accordion />
      </div>
      <div className="cv-display">
        <div className="cv-header">
          <div className="user-first-name">First Name: {firstName}</div>
          <div className="user-last-name">Last Name: {lastName}</div>
          <div className="user-email">Email: {email}</div>
          <div className="user-number">Phone Number: {phoneNumber}</div>
          <div className="user-address">Address: {address}</div>
        </div>
      </div>
    </div>
  );
}

export { App };
