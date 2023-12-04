import React from "react";

function Signup() {
  return (
    <div className="Signup-container">
      <form className="form-container">
        <h2>Sign up Form</h2>
        <label for="name">
          <div className="form-section">
            <h5>
              First Name <span style={{ color: "red" }}>*</span>
            </h5>
          </div>
        </label>
        <br />
        <input
          type="text"
          placeholder="first name"
          id="username"
          name="username"
          required
        />
        <br />
      </form>
    </div>
  );
}

export default Signup;
