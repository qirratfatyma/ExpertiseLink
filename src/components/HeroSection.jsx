import React from "react";
import heroImage from "../assets/img/image-1.png";
import Node from "../assets/img/node.png";
import php from "../assets/img/php.png";
import react from "../assets/img/react.png";
import vuejs from "../assets/img/vuejs.png";
import javaimg from "../assets/img/javaimg.png";
import angukar from "../assets/img/angukar.png";

const Herosection = () => {
  return (
    <div style={{ backgroundColor: "white" }}>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-lg-6 col-md-6">
              <img src={heroImage} alt="Hero" className="Hero-img" />
            </div>
            <div className="col-sm-12 col-lg-6 col-md-6 Hero-text">
              <br></br>
              <h1>ExpertiseLink</h1>
              <br></br>
              <p>
                The ultimate hub for knowledge exchange! Unleash your expertise
                and join a vibrant community where learning knows no bounds.
                Swap skills, forge connections, and elevate your mastery in a
                collaborative ecosystem like never before.
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
          <h1>Officially Supported Languages</h1>
          <div className="row">
            <div className="col-md-2">
              <img
                src={Node}
                alt="Language 1"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
            <div className="col-md-2">
              <img
                src={php}
                alt="Language 2"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
            <div className="col-md-2">
              <img
                src={react}
                alt="Language 3"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
            <div className="col-md-2">
              <img
                src={vuejs}
                alt="Language 4"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
            <div className="col-md-2">
              <img
                src={javaimg}
                alt="Language 5"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
            <div className="col-md-2">
              <img
                src={angukar}
                alt="Language 6"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Herosection;
