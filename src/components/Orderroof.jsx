import React, { useState } from "react";

const ReportTypes = [
  { name: "Residential Roof ESX Only", price: 10.99 },
  { name: "Residential Roof ESX + PDF", price: 17.99 },
  { name: "Residential Roof ESX + Wall ESX", price: 24.99 },
  { name: "Residential Roof ESX + Wall ESX + PDFs", price: 34.99 },
  { name: "Residential Roof XML Only", price: 14.99 },
  { name: "Residential Roof XML + PDF", price: 19.99 },
  { name: "Residential Roof XML + Wall", price: 34.99 },
  { name: "Sketch Up Wall Report (PDF)", price: 29.99 },
  { name: "Roof PDF (Lengths + Measurements + Squares)", price: 12.99 },
  { name: "Commercial Roof ESX Only", price: 24.99 },
  { name: "Commercial Roof ESX + PDF", price: 34.99 },
];

export default function RoofingOrderForm() {
  const [quantity, setQuantity] = useState(1);
  const [expedited, setExpedited] = useState(false);

  const handleQuantityChange = (delta) => {
    setQuantity(prev => Math.max(1, prev + delta));
  };

  return (
    <section id="roofing-order" className="container section-padding">
      <div className="text-center mb-5">
        <h1 className="display-5 brand-text fw-bold">Order Roof Measurement Reports</h1>
        <div className="mt-3">
          <p className="text-muted mb-1">VIEW SAMPLES (.pdf):</p>
          <a href="#" className="text-decoration-none me-3 brand-text fw-bold">ESX Sample Report (PDF)</a> |
          <a href="#" className="text-decoration-none mx-3 brand-text fw-bold">XML Sample Report (PDF)</a> |
          <a href="#" className="text-decoration-none ms-3 brand-text fw-bold">Sample Wall Report (PDF)</a>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-lg-10">

          {/* --- STEP 1: Address and Map Verification --- */}
          <div className="p-4 border rounded shadow-sm mb-5">
            <h4 className="brand-text mb-3 fw-bold">STEP 1 - Address Verification</h4>
            <p className="text-muted">
              Please enter the Client/Claim address to verify using Google address verification service, then move the Google Maps pin icon to the exact location, and click the confirmation button. This will populate the Latitude and Longitude below.
            </p>
            <p className="text-danger small fw-bold">
              **Please don't forget to verify your claim location, then PIN the map below to confirm the address location and coordinates.
            </p>

            <div className="mb-4">
              <label htmlFor="address" className="form-label fw-bold">Enter Address*</label>
              <input type="text" className="form-control form-control-lg" id="address" placeholder="Enter your address here" required />
            </div>

            {/* Placeholder for Google Map/Satellite */}
            <div style={{ height: '300px', backgroundColor: '#e9ecef', borderRadius: '8px', overflow: 'hidden' }} className="mb-3">
              <div className="d-flex p-2 bg-light border-bottom">
                <button className="btn btn-sm btn-outline-secondary me-2">Map</button>
                <button className="btn btn-sm btn-outline-primary">Satellite</button>
                <button className="btn btn-sm btn-outline-secondary ms-auto"><i className="bi bi-fullscreen"></i></button>
              </div>
              <div className="text-center text-muted d-flex align-items-center justify-content-center h-75">
                [Google Map/Pin Widget Placeholder]
              </div>
            </div>

            <button className="btn brand-btn w-100">Confirm Address & Coordinates</button>
          </div>

          {/* --- STEP 2: Details and Report Selection --- */}
          <div className="p-4 border rounded shadow-sm mb-5">
            <h4 className="brand-text mb-3 fw-bold">STEP 2 - Details & Report Selection</h4>
            <p className="text-muted">
              Enter your Client/Claim name or number, then choose your Report Type, Primary Pitch (select 0/12 if unknown), Secondary Pitch (optional), estimated range of facets, applicable order notes, and upload any files needed to facilitate the order.
            </p>

            <p className="text-muted small mb-3">SKU: RR-INST-1 | Category: <span className="brand-text fw-bold">Roof Reports</span></p>

            {/* Input Fields */}
            <div className="mb-3">
              <label htmlFor="claim-name" className="form-label fw-bold">Name or Claim# (Max 11 Char)*</label>
              <input type="text" className="form-control" id="claim-name" maxLength="11" required />
            </div>
            <div className="mb-3">
              <label htmlFor="latitude" className="form-label fw-bold">Latitude</label>
              <input type="text" className="form-control" id="latitude" disabled />
            </div>
            <div className="mb-4">
              <label htmlFor="longitude" className="form-label fw-bold">Longitude</label>
              <input type="text" className="form-control" id="longitude" disabled />
            </div>

            {/* Report Selection Checkboxes */}
            <h6 className="fw-bold mb-3">Roof Report Type <span className="text-danger">*</span> <span className="small text-muted fw-normal">(Select All The Reports You Need)</span></h6>
            <div className="mb-4 border p-3 rounded bg-light">
              {ReportTypes.map((report, index) => (
                <div key={index} className="form-check report-type-item d-flex justify-content-between align-items-center">
                  <input className="form-check-input" type="checkbox" value="" id={`report-${index}`} />
                  <label className="form-check-label flex-grow-1 ms-2" htmlFor={`report-${index}`}>
                    {report.name}
                  </label>
                  <span className="fw-bold brand-text">${report.price.toFixed(2)}</span>
                </div>
              ))}
            </div>

            {/* Pitch/Facets Dropdowns */}
            <div className="row g-3 mb-4">
              <div className="col-md-4">
                <label htmlFor="facets" className="form-label fw-bold">Number of Facets <span className="text-danger">*</span></label>
                <select id="facets" className="form-select" required>
                  <option value="">Choose an option</option>
                  <option value="1-5">1-5</option>
                  <option value="6-10">6-10</option>
                  <option value="11+">11+</option>
                </select>
              </div>
              <div className="col-md-4">
                <label htmlFor="primary-pitch" className="form-label fw-bold">Primary Pitch <span className="text-danger">*</span></label>
                <select id="primary-pitch" className="form-select" required>
                  <option value="">Choose an option</option>
                  <option value="0/12">0/12 (Unknown)</option>
                  <option value="4/12">4/12</option>
                  <option value="6/12">6/12</option>
                  {/* ... add more pitch options */}
                </select>
              </div>
              <div className="col-md-4">
                <label htmlFor="secondary-pitch" className="form-label fw-bold">Secondary Pitch</label>
                <select id="secondary-pitch" className="form-select">
                  <option value="">Optional</option>
                  <option value="4/12">4/12</option>
                  <option value="6/12">6/12</option>
                  {/* ... add more pitch options */}
                </select>
              </div>
            </div>

            {/* Expedited Delivery */}
            <div className="form-check mb-4">
              <input 
                className="form-check-input" 
                type="checkbox" 
                id="expedited" 
                checked={expedited}
                onChange={(e) => setExpedited(e.target.checked)}
              />
              <label className="form-check-label fw-bold" htmlFor="expedited">
                Request Expedited Delivery? <span className="text-success">Yes. Add $10.00 (4-6 Hour Delivery)</span>
              </label>
            </div>

            {/* Notes */}
            <div className="mb-4">
              <label htmlFor="notes" className="form-label fw-bold">Notes</label>
              <textarea className="form-control" id="notes" rows="3"></textarea>
            </div>

            {/* File Upload */}
            <div className="mb-4">
              <label htmlFor="file-upload" className="form-label fw-bold">File Upload (Optional)</label>
              <div className="file-upload-box">
                <i className="bi bi-cloud-upload file-upload-icon mb-2"></i>
                <p className="mb-1 text-primary">Click to choose your file(s) or Drag and Drop.</p>
              </div>
              <div className="mt-3 text-center">
                <p className="fw-bold mb-0">Max Size: 4 MB</p>
                <p className="fw-bold mb-0">Max Files: 4 Files</p>
                <p className="text-muted small">No files uploaded.</p>
              </div>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="d-flex align-items-center justify-content-center mt-5">
                <div className="input-group w-auto me-3">
                    <button 
                        className="btn btn-outline-secondary" 
                        type="button" 
                        onClick={() => handleQuantityChange(-1)}
                    >
                        -
                    </button>
                    <input 
                        type="text" 
                        className="form-control text-center" 
                        value={quantity} 
                        readOnly 
                        style={{width: '60px'}}
                    />
                    <button 
                        className="btn btn-outline-secondary" 
                        type="button" 
                        onClick={() => handleQuantityChange(1)}
                    >
                        +
                    </button>
                </div>
                <button className="btn brand-btn text-white">
                    <i className="bi bi-cart-plus me-2"></i>
                    ADD TO CART
                </button>
            </div>
            
            <div className="disclaimer text-center">
                * Disclaimer – Please note that [ESX] reserves the right to change pricing at any time.
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}