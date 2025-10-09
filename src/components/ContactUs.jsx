import React, { useState } from "react";

export default function ContactUs() {
  // State is only maintained to dynamically update the _replyto hidden field.
  const [form, setForm] = useState({ name: "", email: "", service: "", message: "" });
  
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <section id="contact" className="container section-padding bg-light-section reveal">
      <h2 className="display-4 brand-text mb-4 text-center">Get Started Today</h2>
      <p className="lead text-center mb-5">
        Looking for reliable title search services or mortgage processing? Partner with us for accuracy, speed, and cost efficiency.
      </p>
      <div className="row justify-content-center ">
        
        <div className="col-lg-10 col-xl-9"> {/* Reduced overall container width for a focused look */}
            <div className="row shadow-lg rounded-3 overflow-hidden contact-card-wrapper "> 

                {/* 1. Contact Information Column (Left Side - col-lg-6 for 50/50 split) */}
                <div className="col-lg-6 p-4 contact-info-panel text-white d-flex flex-column">
                    
                    <h3 className="h4 mt-5 text-center text-uppercase fw-bold border-bottom pb-2 border-white text-color">
                        ETrack Title Services Inc.
                    </h3>

                    {/* Contact Details - Updated classes for style and alignment */}
                    <div className="d-flex align-items-start mb-4 contact-detail-item">
                        <i className="bi bi-geo-alt-fill fs-3 me-3 contact-icon text-color "></i> 
                        <div>
                            <h6 className="fw-bold mb-0 text-uppercase text-color">OUR OFFICE</h6>
                            <p className="mb-0 small text-color">21189 Dana CT.</p>
                            <p className="mb-0 small text-color">Ashburn, VA 20148</p>
                        </div>
                    </div>
                    
                    <div className="d-flex align-items-start mb-4 contact-detail-item text-color">
                        <i className="bi bi-headset fs-3 me-3 contact-icon"></i>
                        <div>
                            <h6 className="fw-bold mb-0 text-uppercase text-color">ORDER DESK</h6>
                            <p className="mb-0 small text-color">703-880-6311 (Order Desk)</p>
                            <p className="mb-0 small text-color">703-649-4441</p>
                        </div>
                    </div>
                    
                    <div className="d-flex align-items-start mb-5 contact-detail-item">
                        <i className="bi bi-envelope-fill fs-3 me-3 contact-icon text-color"></i>
                        <div>
                            <h6 className="fw-bold mb-0 text-uppercase text-color">EMAIL US</h6>
                            <a href="mailto:orders@etracktitle.com" className="text-color text-decoration-none small hover-sky-accent">
                                orders@etracktitle.com
                            </a>
                        </div>
                    </div>
                    
                    {/* Embedded Map - Uses utility classes for responsive sizing */}
                    <h6 className="fw-bold mt-auto mb-3 text-center text-uppercase border-top pt-3 border-secondary text-color">FIND US ON THE MAP</h6>
                    <div className="map-embed-container flex-shrink-0 mb-3 ">
                        <iframe
                            src="https://maps.google.com/maps?q=21189%20Dana%20CT.%20Ashburn,%20VA%2020148&t=&z=14&ie=UTF8&iwloc=&output=embed"
                            width="100%"
                            height="80%"
                            style={{ border: '0', borderRadius: '5px' }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="ETrack Title Services Location"
                        ></iframe>
                    </div>

                </div>

                {/* 2. Inquiry Form Column (Right Side - col-lg-6 for 50/50 split) */}
                <div className="col-lg-6 p-5 bg-white d-flex flex-column justify-content-center">
               <h3 className="h4 brand-text mb-4 text-center ">Send Your Inquiry</h3>
                    <form 
                        action="https://formsubmit.co/innomatricstech@gmail.com" 
                        method="POST" 
                    >
                        <input 
                            type="hidden" 
                            name="_next" 
                            value="http://localhost:5173/thank-you" 
                        />
                        <input type="hidden" name="_captcha" value="false" />
                        <input type="hidden" name="_replyto" value={form.email} />

                        {/* Form Layout: Two columns for Name/Email and Phone/Service */}
                        <div className="row">
                            {/* Name Input */}
                            <div className=" mb-4 ">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Full Name"
                                    className="form-control contact-input"
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            
                            {/* Email Input */}
                            <div className=" mb-4  ">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email Address"
                                    className="form-control contact-input"
                                    onChange={handleChange} 
                                    required
                                />
                            </div>
                        </div>

                        <div className="row">
                            {/* Phone Input (Assuming Phone/Subject is desired) */}
                            <div className=" mb-4">
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Phone (Optional)"
                                    className="form-control contact-input"
                                />
                            </div>
                            
                            {/* Service Dropdown (Mapped to Subject in the image) */}
                            <div className="mb-3">
                                <select
                                    name="service"
                                    className="form-select contact-input"
                                    onChange={handleChange} 
                                    required
                                >
                                    <option value="">-- Service Required --</option>
                                    <option value="Title Search/Abstracting">Title Search/Abstracting</option>
                                    <option value="Offshore Title Support">Offshore Title Support</option>
                                    <option value="Mortgage Processing">Mortgage Processing</option>
                                    <option value="Roofing Reports">Roofing Reports</option>
                                    <option value="General Inquiry">General Inquiry</option>
                                </select>
                            </div>
                        </div>
                        
                        {/* Message Textarea - Full width */}
                        <div className="mb-4">
                            <textarea
                                name="message"
                                placeholder="Your Message"
                                rows="5"
                                className="form-control contact-input"
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>
            
                        <button type="submit" className="btn brand-btn w-100 text-white">Send Inquiry</button>
                  </form>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}