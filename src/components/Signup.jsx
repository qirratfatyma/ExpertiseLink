import React from "react";

function Signup() {
  return (
    <div className="Signup-container">
      <form className="form-container">
        <h2 style={{ textAlign: "left", fontSize: "24px" }}>Sign up Form</h2>

        <div className="form-section">
          <label htmlFor="firstName">
            <h5>
              First Name <span style={{ color: "red" }}>*</span>
            </h5>
          </label>
          <br />
          <input
            type="text"
            placeholder="First Name"
            id="firstName"
            name="firstName"
            required
          />
        </div>

        <div className="form-section">
          <label htmlFor="lastName">
            <h5>
              Last Name <span style={{ color: "red" }}>*</span>
            </h5>
          </label>
          <br />
          <input
            type="text"
            placeholder="Last Name"
            id="lastName"
            name="lastName"
            required
          />
        </div>

        <div className="form-section">
          <label htmlFor="email">
            <h5>
              Email <span style={{ color: "red" }}>*</span>
            </h5>
          </label>
          <br />
          <input
            type="email"
            placeholder="Email"
            id="email"
            name="email"
            required
          />
        </div>

        <div className="form-section">
          <label htmlFor="companyName">
            <h5>
              Company Name <span style={{ color: "red" }}>*</span>
            </h5>
          </label>
          <br />
          <input
            type="text"
            placeholder="Company Name"
            id="companyName"
            name="companyName"
            required
          />
        </div>

        <div className="form-section">
          <label htmlFor="role">
            <h5>
              Role <span style={{ color: "red" }}>*</span>
            </h5>
          </label>
          <br />
          <input
            type="text"
            placeholder="Role"
            id="role"
            name="role"
            required
          />
        </div>

        <div className="form-section">
          <label htmlFor="countryRegion">
            <h5>
              Country/Region <span style={{ color: "red" }}>*</span>
            </h5>
          </label>
          <br />
          <input
            type="text"
            placeholder="Country/Region"
            id="countryRegion"
            name="countryRegion"
            required
          />
        </div>

        <button type="submit" style={{ fontSize: "18px", backgroundColor: "#6a3f3e", color: "white"  }}>
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default Signup;
