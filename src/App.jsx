import { useState } from "react";
import { GeneralInfo } from "./components/generalInfo";
import "./app.css";
import { Accordion as EducationAccordion } from "./components/Education";
import { Experience } from "./components/Experience";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import { SlArrowDown } from "react-icons/sl";
import { SlArrowUp } from "react-icons/sl";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [educations, setEducations] = useState([]);
  const [experiences, setExperiences] = useState([]);
  const [showEducationForm, setShowEducationForm] = useState(false);
  const [showExperienceForm, setShowExperienceForm] = useState(false);

  const addEducation = (newEducation) => {
    setEducations([...educations, newEducation]);
  };

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

        {/* Buttons to toggle forms */}
        <button
          className="education-button"
          onClick={() => setShowEducationForm(!showEducationForm)}
        >
          {showEducationForm ? (
            <>
              Education <SlArrowUp />
            </>
          ) : (
            <>
              Education <SlArrowDown />
            </>
          )}
        </button>

        <button
          className="experience-button"
          onClick={() => setShowExperienceForm(!showExperienceForm)}
        >
          {showExperienceForm ? (
            <>
              Experience <SlArrowUp />
            </>
          ) : (
            <>
              Experience <SlArrowDown />
            </>
          )}
        </button>

        {/* Conditional rendering for Education Form */}
        {showEducationForm && (
          <EducationAccordion addEducation={addEducation} />
        )}

        {/* Conditional rendering for Experience Form */}
        {showExperienceForm && <Experience addExperience={addExperience} />}
      </div>

      <div className="cv-display">
        <div className="cv-header">
          <div className="user-name">
            <div className="user-first-name">{firstName}</div>
            <div className="user-last-name"> {lastName}</div>
          </div>
          <div className="user-information">
            <div className="div-email">
              <MdEmail style={{ fontSize: "18px", color: "white" }} />
              <div className="user-email">{email}</div>
            </div>
            <div className="div-number">
              <FaPhone style={{ fontSize: "18px", color: "white" }} />
              <div className="user-number">{phoneNumber}</div>
            </div>
            <div className="div-address">
              <IoLocationSharp style={{ fontSize: "18px", color: "white" }} />
              <div className="user-address">{address}</div>
            </div>
          </div>
        </div>

        <div className="cv-education">
          <div className="title-education">
            <h3 className="education">Education</h3>
          </div>
          {educations.map((education, index) => (
            <div key={index}>
              <div className="education-content">
                <div>
                  <div className="cv-date">
                    {education.startDate} - {education.endDate}
                  </div>
                  <div className="cv-location">{education.location}</div>
                </div>
                <div className="school-degree">
                  <div className="cv-school">{education.school}</div>
                  <div className="cv-degree">{education.degree}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="cv-experience">
          <div className="title-experience">
            <h3 className="experience">Professional Experience</h3>
          </div>
          {experiences.map((experience, index) => (
            <div key={index}>
              <div className="experience-content">
                <div>
                  <div className="cv-date">
                    {experience.startDate} - {experience.endDate}
                  </div>
                  <div className="cv-location">{experience.location}</div>
                </div>
                <div className="company-position-description">
                  <div className="cv-company-name">
                    {experience.companyName}
                  </div>
                  <div className="cv-position-title">
                    {experience.positionTitle}
                  </div>
                  <div className="cv-description">{experience.description}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export { App };
