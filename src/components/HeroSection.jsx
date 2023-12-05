import React from 'react';
import heroImage from "../assets/img/image-1.png";
import Node from "../assets/img/node.png";
import php from "../assets/img/php.png";
import react from "../assets/img/react.png";
import vuejs from "../assets/img/vuejs.png";
import javaimg from "../assets/img/javaimg.png"
import angukar from "../assets/img/angukar.png";


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
        <br></br>
        <br></br>
      {/* Officially Supported Languages Section */}
      <section className="supported-languages-section">
        <div className="container">
          <h2 style={{ color: "#6a3f3e" }}>Officially Supported Languages</h2>
          <br></br>
        <br></br>
          <br></br>
          <div className="row">
            <div className="col-md-2">
              <img src={Node} alt="Language 1" style={{ width: "100%", height: "auto" }} />
            </div>
            <div className="col-md-2">
              <img src={php} alt="Language 2" style={{ width: "100%", height: "auto" }} />
            </div>
            <div className="col-md-2">
              <img src={react} alt="Language 3" style={{ width: "100%", height: "auto" }} />
            </div>
            <div className="col-md-2">
              <img src={vuejs} alt="Language 4" style={{ width: "100%", height: "auto" }} />
            </div>
            <div className="col-md-2">
              <img src={javaimg} alt="Language 5" style={{ width: "100%", height: "auto" }} />
            </div>
            <div className="col-md-2">
              <img src={angukar} alt="Language 6" style={{ width: "100%", height: "auto" }} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Herosection;
