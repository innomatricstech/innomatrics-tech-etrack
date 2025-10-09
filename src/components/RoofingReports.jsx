import React from "react";
// 1. Import the useNavigate hook
import { useNavigate } from "react-router-dom"; 

// Helper function to process pricing data (Kept as is)
const parsePricing = (pricing) => {
  return pricing.map(item => {
    const parts = item.split(" – ");
    const name = parts[0];
    const price = parts.length > 1 ? parts[1] : null;
    return {
      name: name.replace(/ \+\$ /, ' ADDON: ').trim(),
      price: price ? price.trim() : null,
      isAddon: name.includes('Wall ESX only')
    };
  });
};

// 2. Remove the external handleOrderClick function
// The navigation logic will now live inside the component using the hook.

export default function RoofingReports() {
  // 3. Initialize the navigate hook
  const navigate = useNavigate();
  
  const products = ["Residential Roof Sketch", "Commercial Roof Reports", "Elevation Measurement Reports", "Multifamily Roof Sketch Reports"];
  const benefits = ["Save Time & Labor Costs", "Improve Accuracy", "Enhance Safety", "Boost Efficiency"];
  const rawPricing = [
    "Residential Standard Roof Sketch (ESX Only) – $9.00",
    "Residential Complex Roof Sketch (ESX Only) – $15.00",
    "Residential Standard Roof Sketch (ESX + PDF) – $15.00",
    "Commercial Roof Sketch (ESX Only) – $19.00",
    "Commercial Roof Sketch (ESX + PDF Only) – $19.00",
    "Wall ESX only <3000sf +$ 20.00",
  ];
  
  const pricingData = parsePricing(rawPricing);

  return (
    <section id="roofingservices" className="roofing-bg-section section-padding reveal">
      <div className="container">
        <h2 className="display-4 mb-5 text-center">Aerial Roof Sketch Services </h2>

        {/* --- Product and Benefit Cards --- */}
        <div className="row g-4">
          <div className="col-lg-6">
            <div className="feature-card-roofing p-4 h-100">
              <h5 className="mb-3 fw-bold"><i className="bi bi-box-seam me-2"></i>Our Products</h5>
              <ul className="list-unstyled why-list-small">
                {products.map((p, i) => <li key={i}><i className="bi bi-check-circle-fill me-2"></i>{p}</li>)}
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="feature-card-roofing p-4 h-100">
              <h5 className="mb-3 fw-bold"><i className="bi bi-graph-up-arrow me-2"></i>Why Use Aerial Reports?</h5>
              <ul className="list-unstyled why-list-small">
                {benefits.map((b, i) => <li key={i}><i className="bi bi-check-circle-fill me-2"></i>{b}</li>)}
              </ul>
            </div>
          </div>
        </div>

        {/* --- Pricing & Order CTA --- */}
        <div className="mt-5 pt-4">
          <h3 className="text-center mb-4 fw-bold text-uppercase">Pricing & Ordering</h3>

          <div className="row justify-content-center">
            <div className="col-lg-8">
              {/* Attractive Pricing Table Structure */}
              <div className="pricing-header text-center mb-0">
                Measurement Report Options
              </div>
              <ul className="list-unstyled p-0 m-0 price-item-list">
                {pricingData.map((item, i) => (
                  <li key={i} className={item.isAddon ? "addon" : ""}>
                    <span>{item.name}</span>
                    <span className="price-value">{item.price}</span>
                  </li>
                ))}
              </ul>
              
              {/* Button updated to use the navigate function for routing */}
              <div className="text-center mt-4">
                <button 
                  onClick={() => navigate("/roofing-order-page")} // <-- Route defined in App.jsx
                  className="btn btn-primary order-cta-btn"
                >
                  <i className="bi bi-box-arrow-in-right me-2"></i>
                  ORDER REPORTS NOW
                </button>
                <p className="small text-muted mt-3">Click to initiate your order and upload project details.</p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}