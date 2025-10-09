import React from "react";
import Img2 from "../assets/images/1 Row Houses.jpg";

export default function Home() {
  const heroStyle = {
    backgroundImage: `linear-gradient(rgba(10, 25, 49, 0.3), rgba(10, 25, 49, 0.3)), url(${Img2})`,
  };

  return (
    <header id="home" className="hero-section text-center d-flex align-items-center justify-content-center" style={heroStyle}>
      <div className="container">
        <h1 className="display-4 text-white fw-bold mb-3 animate-fade">
          Title Search Services Nationwide | Mortgage Loan Processing & Servicing | Roof & Wall Measurement Reports
        </h1>
        <p className="lead text-white font-weight-bold fw-light animate-fade-delay">
          Accurate • Affordable • Nationwide Coverage
        </p>
        <a href="#titleservices" className="btn btn-lg btn-light text-white mt-4 px-4 shadow-sm brand-btn">
          Explore Our Services
        </a>
      </div>
    </header>
  );
}
