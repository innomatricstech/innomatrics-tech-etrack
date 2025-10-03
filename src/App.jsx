import Logo from "./assets/ETrack.png"
import React, { useState } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import "./App.css"; // Custom CSS (Crucial for the new look)

// --- Redux Setup ---
const contactSlice = createSlice({
  name: "contact",
  initialState: { submissions: [] },
  reducers: {
    addSubmission: (state, action) => {
      // Add a timestamp for better logging/display
      state.submissions.push({...action.payload, timestamp: new Date().toLocaleString()});
    },
  },
});

const { addSubmission } = contactSlice.actions;
const store = configureStore({ reducer: { contact: contactSlice.reducer } });


// Navbar (UPDATED LOGO WRAPPER AND STYLE)
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg brand-bg sticky-top">
      <div className="container">
        {/* ADDED 'Logo' CLASS HERE to match CSS selector for enhanced style */}
        <div className="Logo"> 
          <a className="navbar-brand" href="#">
            <img 
              src={Logo} 
              alt="ETrack Title Services Logo" 
              style={{ 
                height: '75px', // Adjusted size for better integration
                borderRadius: '12px', 
                filter: 'drop-shadow(0 2px 4px rgba(255, 255, 255, 0.4))', // Initial soft shadow
              }}
              className="logo-hover"
            />
          </a>
        </div>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item"><a className="nav-link" href="#home">Home</a></li>
            <li className="nav-item"><a className="nav-link" href="#about">About Us</a></li>
            <li className="nav-item"><a className="nav-link" href="#titleservices">Title Services</a></li>
            <li className="nav-item"><a className="nav-link" href="#mortgageservices">Mortgage Services</a></li>
            <li className="nav-item"><a className="nav-link" href="#roofingservices">Roofing Reports</a></li>
            <li className="nav-item"><a className="nav-link" href="#why">Why ETrack</a></li>
            <li className="nav-item"><a className="nav-link btn btn-outline-light ms-lg-3" href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

// Home Section (Hero)
function Home() {
  return (
    <header id="home" className="hero-section text-center d-flex align-items-center">
      <div className="container">
        {/* Source 12 - Title Search Services USA | Nationwide Title Reports | Outsourced Title Support | Mortgage Loan Processing & Servicing */}
        <h1 className="display-4 text-white fw-bold">Title Search Services USA | Mortgage Loan Processing & Servicing</h1>
        {/* Source 13 - Accurate • Affordable • Nationwide Coverage */}
        <p className="lead text-white-75 mt-3 fw-light">Accurate &bull; Affordable &bull; Nationwide Coverage</p>
        <a href="#titleservices" className="btn btn-lg btn-light mt-4 px-4 shadow-sm">Explore Our Services</a>
      </div>
    </header>
  );
}

// About Section
function About() {
  return (
    <section id="about" className="container section-padding">
      <h2 className="display-4 brand-text mb-4 text-center">About ETrack Title Services Inc.</h2>
      <div className="row justify-content-center">
        <div className="col-lg-8">
          {/* Source 2 - With over 20 years of experience... */}
          <p className="lead text-center">
            With **over 20 years of experience** in the Mortgage and Title industry, ETrack Title Services Inc. is established to serve as a true extension of the title company’s operation.
          </p>
          {/* Source 3 - We specialize in providing nationwide title search... */}
          <p>
            We specialize in providing **nationwide title search, abstracting services and mortgage services**, combining deep industry expertise with a commitment to accuracy, compliance, and speed. Our team delivers **reliable, timely title reports** that help our clients close with confidence.
          </p>
          {/* Source 6 & 10 - What sets ETrack apart... */}
          <p>
            What sets us apart is our ability to offer **scalable, cost-effective support** that adapts to your business. We provide seamless outsourced solutions that reduce overhead and increase operational efficiency. At ETrack, we don’t just deliver title reports—we deliver **peace of mind, operational agility, and trusted partnership** built on decades of experience.
          </p>
          
          <div className="mt-5 p-4 bg-light rounded shadow-sm">
            <h5 className="brand-text text-center mb-3">Who We Serve</h5>
            <div className="row text-center">
                {["Title Companies & Agents", "Lenders & Mortgage Providers", "Real Estate Attorneys", "Investors & REITs", "Underwriters & Settlement Companies"].map((client, i) => (
                    <div key={i} className="col-md-4 col-6 mb-2">
                        <span className="badge bg-primary-light p-2"><i className="bi bi-person-check-fill me-1"></i> {client}</span>
                    </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Separate Title Services Section
function TitleServices() {
  const services = [
    "Current Owner Search – Ownership verification and encumbrance check.",
    "Two-Owner / Full Search – Detailed chain of title and property history.",
    "30/40/60-Year Searches – Extended due diligence for risk management.",
    "Lien & Judgment Search – Identify open mortgages, liens, and judgments.",
    "Tax Search – Verify taxes, delinquencies, and assessments.",
    "Document Retrieval & Recording – Quick access to deeds, mortgages, and public records."
  ];

  const offshoreServices = [
    "Scalable Title Production – From single orders to bulk projects.",
    "Commitment Typing & Data Entry – Fast, accurate document handling.",
    "Quality Review & Verification – Multi-level checks to ensure accuracy.",
    "Cost-Effective Operations – Reduce overhead without sacrificing quality.",
  ];

  return (
    <section id="titleservices" className="brand-bg text-white section-padding-lg">
      <div className="container">
        <h2 className="display-4 mb-5 text-center">Our Title Search & Abstracting Services</h2>
        
        <div className="row mb-5">
            <div className="col-lg-6">
                <h3 className="h4 fw-bold mb-3 text-warning"><i className="bi bi-search me-2"></i> Nationwide Title Search Services USA</h3>
                <p className="lead">We provide reliable and comprehensive **title search services nationwide**, covering all property types—residential, commercial, and industrial.</p>
                <ul className="list-unstyled service-list-white">
                    {services.map((s,i) => <li key={i}><i className="bi bi-pin-map-fill me-2 text-warning"></i> {s}</li>)}
                </ul>
            </div>
            <div className="col-lg-6 mt-4 mt-lg-0">
                <h3 className="h4 fw-bold mb-3 text-warning"><i className="bi bi-globe me-2"></i> Offshore Title Support Services</h3>
                <p className="lead">Leverage our **Offshore title support** to focus on business growth while we handle the heavy lifting.</p>
                <ul className="list-unstyled service-list-white">
                    {offshoreServices.map((s,i) => <li key={i}><i className="bi bi-gear-fill me-2 text-warning"></i> {s}</li>)}
                </ul>
                <p className="mt-4 fst-italic">Our nationwide title reports are customized to meet your specific requirements.</p>
            </div>
        </div>
      </div>
    </section>
  );
}

// Separate Mortgage Services Section
function MortgageServices() {
    const categories = [
        { title: "Loan Origination Support", icon: "bi-file-earmark-text", items: ["Application intake and data entry (1003 form)", "Document collection and validation", "Disclosure verification"] },
        { title: "Loan Processing", icon: "bi-send-check", items: ["Pre-underwriting checks", "Employment and income verification", "Credit report analysis", "Conditions clearing and follow-ups"] },
        { title: "Underwriting Support", icon: "bi-clipboard2-data", items: ["Income calculation (W-2, self-employed)", "Loan eligibility assessment", "Risk analysis and guideline matching"] },
        { title: "Closing & Post-Closing", icon: "bi-check2-square", items: ["Preparing closing packages", "Reviewing signed documents", "Post-funding audits", "Trailing document tracking"] },
    ];
    
    return (
        <section id="mortgageservices" className="container section-padding bg-light-section">
            <h2 className="display-4 brand-text mb-5 text-center">End-to-End Mortgage Services</h2>
            <p className="lead text-center mb-5">
                We support title companies offering in-house mortgage services with end-to-end processing support across FHA, VA, and Conventional loans.
            </p>
            <div className="row g-4">
                {categories.map((cat, i) => (
                    <div key={i} className="col-lg-3 col-md-6">
                        <div className="card h-100 shadow-sm border-0 mortgage-card">
                            <div className="card-body">
                                <i className={`bi ${cat.icon} display-6 brand-text mb-3`}></i>
                                <h5 className="card-title fw-bold">{cat.title}</h5>
                                <ul className="list-unstyled small">
                                    {cat.items.map((item, index) => (
                                        <li key={index} className="d-flex align-items-start mb-1">
                                            <i className="bi bi-dot brand-text me-1 fs-4"></i>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="text-center mt-5">
                <a href="#contact" className="btn brand-btn btn-lg">Request a Free Quote Today</a>
            </div>
        </section>
    );
}

// Separate Roofing Reports Section
function RoofingReports() {
    const products = [
        "Residential Roof Sketch Reports",
        "Commercial Roof Sketch Reports",
        "Wall / Elevation Measurement Reports",
        "Multifamily / Row Houses Roof Sketch Reports"
    ];

    const benefits = [
        "Save Time & Labor Costs – No need for on-site measuring or climbing roofs.",
        "Improve Accuracy – Reduce errors in quotes, bids, and insurance claims.",
        "Enhance Safety – Minimize risks by avoiding manual roof inspections.",
        "Boost Efficiency – Speed up project planning and start work faster.",
    ];

    return (
        <section id="roofingservices" className="container section-padding">
            <h2 className="display-4 brand-text mb-4 text-center">Aerial Roof Sketch Services</h2>
            <p className="lead text-center mb-5">
                We provide accurate, reliable, and ready-to-use **roof measurement reports** powered by high-resolution aerial imagery. Ideal for roofing contractors, insurance adjusters, and estimators.
            </p>

            <div className="row">
                <div className="col-lg-6 mb-4">
                    <div className="p-4 border rounded h-100 shadow-sm">
                        <h3 className="h5 fw-bold brand-text"><i className="bi bi-box-seam me-2"></i> Our Products</h3>
                        <p className="small text-muted">Each report includes exact roof dimensions, detailed layouts, and pitch analysis.</p>
                        <ul className="list-unstyled why-list-small">
                            {products.map((p, i) => <li key={i}><i className="bi bi-check-circle-fill brand-text me-2"></i> {p}</li>)}
                        </ul>
                    </div>
                </div>
                <div className="col-lg-6 mb-4">
                    <div className="p-4 border rounded h-100 shadow-sm">
                        <h3 className="h5 fw-bold brand-text"><i className="bi bi-graph-up-arrow me-2"></i> Why Use Aerial Reports?</h3>
                        <p className="small text-muted">Most reports are delivered within 12 - 24 hours to help you meet tight project timelines.</p>
                        <ul className="list-unstyled why-list-small">
                            {benefits.map((b, i) => <li key={i}><i className="bi bi-check-circle-fill brand-text me-2"></i> {b}</li>)}
                        </ul>
                    </div>
                </div>
            </div>
            <p className="text-center mt-3 small">
                Our roof sketches are fully compatible with **Xactimate®, Symbility, Applicad**, and other estimating platforms.
            </p>
        </section>
    );
}


// Why Choose Us Section
function WhyChoose() {
  const benefits = [
    { title: "Decades of Real Industry Expertise", text: "Led by professionals with deep roots in the title industry, we speak your language and act as a true extension of your team." },
    { title: "Nationwide Reach, Local Insight", text: "Our nationwide abstractor network delivers fast, accurate title searches backed by localized knowledge of state and county requirements." },
    { title: "Speed, Accuracy & Compliance", text: "Every report goes through a strict quality control process, ensuring clean, underwriter-ready results with minimal revisions." },
    { title: "Scalable, Flexible Support", text: "Our services scale with your needs—whether handling volume surges or expanding markets—without the overhead of hiring." },
    { title: "Cost-Effective Without Compromise", text: "We help reduce operational costs by up to 40% through efficient, reliable outsourcing." },
    { title: "White-Glove Customer Service", text: "No ticket systems, no call centers—just real people who know your files and are committed to your success." },
  ];
  return (
    <section id="why" className="brand-bg text-white section-padding-lg">
      <div className="container">
        <h2 className="display-4 mb-5 text-center">Why Partner With ETrack?</h2>
        <div className="row g-4">
            {benefits.map((b, i) => (
                <div key={i} className="col-lg-4 col-md-6">
                    <div className="p-4 h-100 bg-white rounded shadow-lg text-dark card-hover-light">
                        <h4 className="h5 fw-bold brand-text mb-3">{b.title}</h4>
                        <p className="small">{b.text}</p>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}

// Contact Section (No functional change, only presentation)
function Contact() {
  const dispatch = useDispatch();
  const submissions = useSelector(s => s.contact.submissions);
  const [form,setForm] = useState({name:"",email:"",service:"",message:""});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => setForm({...form,[e.target.name]:e.target.value});
  
  const handleSubmit = e => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    dispatch(addSubmission(form));
    setForm({name:"",email:"",service:"",message:""});
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000); // Hide confirmation after 3 seconds
  }

  return (
    <section id="contact" className="container section-padding bg-light-section">
      <h2 className="display-4 brand-text mb-4 text-center">Get Started Today</h2>
      <p className="lead text-center mb-5">
        Looking for reliable title search services, outsourced support, or mortgage services? Partner with us for accuracy, speed, and cost efficiency.
      </p>
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <form onSubmit={handleSubmit} className="p-4 bg-white rounded shadow-lg">
            <h5 className="brand-text text-center mb-4">Inquiry Form - We shall respond within 24 hours.</h5>
            {submitted && (
              <div className="alert alert-success" role="alert">
                <i className="bi bi-check-circle-fill me-2"></i>
                Thank you! Your message has been sent.
              </div>
            )}
            <div className="mb-3">
              <input type="text" name="name" placeholder="Full Name" className="form-control" value={form.name} onChange={handleChange} required/>
            </div>
            <div className="mb-3">
              <input type="email" name="email" placeholder="Email Address" className="form-control" value={form.email} onChange={handleChange} required/>
            </div>
            <div className="mb-3">
              <select name="service" className="form-select" value={form.service} onChange={handleChange} required>
                <option value="">-- Type of Service Required --</option>
                <option value="Title Search/Abstracting">Title Search/Abstracting</option>
                <option value="Offshore Title Support">Offshore Title Support</option>
                <option value="Mortgage Processing">Mortgage Processing</option>
                <option value="Roofing Reports">Roofing Reports</option>
                <option value="General Inquiry">General Inquiry</option>
              </select>
            </div>
            <div className="mb-3">
              <textarea name="message" placeholder="Your Comments / Details" rows="4" className="form-control" value={form.message} onChange={handleChange} required/>
            </div>
            <button type="submit" className="btn brand-btn w-100">Send Inquiry</button>
          </form>

          {submissions.length>0 && (
            <div className="mt-5 p-3 border-top">
              <h5 className="brand-text">Recent Submissions (Demo)</h5>
              <ul className="list-group list-group-flush">
                {submissions.slice(0, 5).map((s,i)=>(
                  <li key={i} className="list-group-item d-flex justify-content-between align-items-center">
                    <div>
                      <strong>{s.name}</strong> ({s.email}) - <small>{s.service || "General"}</small>
                    </div>
                    <small className="text-muted">{s.timestamp}</small>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="brand-bg text-white text-center py-4">
      <div className="container">
        <p className="mb-0">© {new Date().getFullYear()} ETrack Title Services Inc. | All Rights Reserved.</p>
        <p className="small mt-1 mb-0">Address: 21189 Dana CT., Ashburn, VA 20148 | PH: 703-880-6311 (orderdesk)</p>
      </div>
    </footer>
  );
}

// Main App Component
export default function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <main>
        <Home />
        <About />
        <TitleServices />
        <MortgageServices />
        <RoofingReports />
        <WhyChoose />
        <Contact />
      </main>
      <Footer />
    </Provider>
  );
}