import React from "react";

export default function TitleServices() {
  const services = [
    { icon: "map-check-fill", name: "Current Owner Search – Ownership verification and encumbrance check." },
    { icon: "layers-fill", name: "Two-Owner / Full Search – Detailed chain of title and property history." },
    { icon: "hourglass-split", name: "30/40/60-Year Searches – Extended due diligence for risk management." },
    { icon: "file-earmark-lock-fill", name: "Lien & Judgment Search – Identify open mortgages, liens, and judgments." },
    { icon: "bank-fill", name: "Tax Search – Verify taxes, delinquencies, and assessments." },
    { icon: "clipboard-data-fill", name: "Document Retrieval & Recording – Quick access to deeds, mortgages, and public records." },
  ];

  const offshore = [
    { icon: "graph-up", name: "Scalable Title Production – From single orders to bulk projects." },
    { icon: "keyboard-fill", name: "Commitment Typing & Data Entry – Fast, accurate document handling." },
    { icon: "shield-check-fill", name: "Quality Review & Verification – Multi-level checks to ensure accuracy." },
    { icon: "currency-dollar", name: "Cost-Effective Operations – Reduce overhead without sacrificing quality." },
  ];

  return (
    // CHANGE: Changed back to 'brand-bg' (dark blue)
    <section id="titleservices" className="brand-bg section-padding-lg reveal">
      <div className="container">
        {/* ADDED: 'text-light' to make the title white on the dark background */}
        <h2 className="display-4 mb-5 text-center text-light">Title Services</h2> 
        
        <div className="row g-4">
          
          {/* Nationwide Title Search Services Card */}
          <div className="col-lg-6 service-card-wrapper">
            <div className="service-card reveal fade-zoom">
              {/* ADDED: 'brand-text' to ensure consistent coloring, will be updated in CSS for light text */}
              <h4 className="fw-bold mb-4 brand-text"> 
                <i className="bi bi-geo-alt-fill me-3"></i> Nationwide Title Search Services
              </h4>
              <ul className="list-unstyled service-list">
                {services.map((s, i) => (
                  <li key={i}>
                    <i className={`bi bi-${s.icon} me-3`}></i>
                    {s.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Offshore Title Support Services Card */}
          <div className="col-lg-6 service-card-wrapper">
            <div className="service-card reveal fade-zoom">
              {/* ADDED: 'brand-text' to ensure consistent coloring, will be updated in CSS for light text */}
              <h4 className="fw-bold mb-4 brand-text">
                <i className="bi bi-globe me-3"></i> Offshore Title Support Services
              </h4>
              <ul className="list-unstyled service-list">
                {offshore.map((s, i) => (
                  <li key={i}>
                    <i className={`bi bi-${s.icon} me-3`}></i>
                    {s.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}