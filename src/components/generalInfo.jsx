import "../styles/generalInfo.css";

function GeneralInfo({
  firstName,
  setFirstName,
  lastName,
  setLastName,
  email,
  setEmail,
  phoneNumber,
  setPhoneNumber,
  address,
  setAddress,
}) {
  return (
    <form>
      <h1>Personal Details</h1>
      <label>
        First name
        <input
          type="text"
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
          placeholder="Enter first name"
        />
      </label>
      <label>
        Last name
        <input
          type="text"
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
          placeholder="Enter last name"
        />
      </label>
      <label>
        Email
        <input
          type="text"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Enter email address"
        />
      </label>
      <label>
        Phone number
        <input
          type="text"
          value={phoneNumber}
          onChange={(event) => setPhoneNumber(event.target.value)}
          placeholder="Enter phone number"
        />
      </label>
      <label>
        Address
        <input
          type="text"
          value={address}
          onChange={(event) => setAddress(event.target.value)}
          placeholder="Enter address"
        />
      </label>
    </form>
  );
}

export { GeneralInfo };
