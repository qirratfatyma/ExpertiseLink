import React from 'react';
import logo from "../assets/img/logo.png";
import heroImage from "../assets/img/image-1.png";

const Herosection = () => {
  return (
    <div style={{ backgroundColor: "white" }}>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img src={heroImage} alt="Hero" style={{ width: "100%", height: "auto" }} />
            </div>
            <div className="col-md-6" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
              <br></br>
              <h2 style={{ color: "#6a3f3e" }}>ExpertiseLink</h2>
              <br></br>
              <p>
                The ultimate hub for knowledge exchange! Unleash your expertise and join a vibrant community where learning knows no bounds. Swap skills, forge connections, and elevate your mastery in a collaborative ecosystem like never before.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Herosection;
