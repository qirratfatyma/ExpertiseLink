import React from "react";

function Signup() {
  return (
    <div className="Signup-container" style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <form className="form-container">
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
        <div className="form-section"> <label htmlFor="lastName"> 
        <h5> Last Name <span style={{ color: "red" }}>*</span> </h5>
         </label> <br /> <input type="text" placeholder="Last Name" id="lastName" name="lastName" required /> </div>
          <div className="form-section"> <label htmlFor="email"> <h5> Email <span style={{ color: "red" }}>*</span> 
          </h5> </label> <br /> <input type="email" placeholder="Email" id="email" name="email" required /> </div> 
          <div className="form-section"> <label htmlFor="companyName"> <h5> Company Name <span style={{ color: "red" }}>*</span> </h5> </label> <br /> 
          <input type="text" placeholder="Company Name" id="companyName" name="companyName" required /> </div> 
          <div className="form-section"> <label htmlFor="role"> <h5> Role <span style={{ color: "red" }}>*</span> </h5> </label> <br />
           <input type="text" placeholder="Role" id="role" name="role" required /> </div> 
           <div className="form-section"> <label htmlFor="countryRegion"> <h5> Country/Region <span style={{ color: "red" }}>*</span> </h5> </label> <br /> 
           <input type="text" placeholder="Country/Region" id="countryRegion" name="countryRegion" required /> </div>

        <button type="submit" style={{ fontSize: "18px", backgroundColor: "#6a3f3e", color: "white" }}>
          Sign Up
        </button>

        <p style={{ textAlign: "center", marginTop: "5px", fontSize: "14px" }}>
          Signing up signifies that you have read and agree to the Terms of Service and our Privacy Policy. Cookie Preferences.
          {" "}
        </p>
      </form>
    </div>
  );
}

export default Signup;
