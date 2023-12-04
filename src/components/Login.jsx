import React from "react";

function Login() {
  return (
    <div className="Login-container" style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <form className="form-container">
        <h2 style={{ textAlign: "center", fontSize: "24px" }}>Log In</h2>

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
          <label htmlFor="password">
            <h5>
              Password <span style={{ color: "red" }}>*</span>
            </h5>
          </label>
          <br />
          <input
            type="password"
            placeholder="Password"
            id="password"
            name="password"
            required
          />
        </div>
        <br></br>
        <button type="submit" style={{ fontSize: "18px", backgroundColor: "#6a3f3e", color: "white" }}>
          Log In
        </button>

        <p style={{ textAlign: "center", marginTop: "10px" }}>
          New to ExpertiseLink?{" "}
          <a href="/signup" style={{ color: "#6a3f3e", textDecoration: "underline" }}>
            Sign up
          </a>
        </p>
      </form>
    </div>
  );
}

export default Login;
