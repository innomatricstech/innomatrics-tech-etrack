import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"; 
import Logo from "../assets/images/etrack.png";

// Helper function to scroll to an anchor ID
const scrollToHash = (hash) => {
    // Scroll logic remains the same for anchor links
    setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
            const navbarHeight = document.querySelector(".navbar").offsetHeight;
            const elementPosition = element.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
                top: elementPosition - navbarHeight - 20,
                behavior: "smooth",
            });
        }
    }, 100);
};

// **NEW Helper function to scroll to the very top**
const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
};


export default function Navbar() {
    const navigate = useNavigate();

    // Function to handle navigation to an anchor (e.g., #about)
    const handleNav = (e, path, isAnchor = true) => {
        e.preventDefault();
        
        if (isAnchor) {
            // Check if we are ALREADY on the main route ("/")
            if (window.location.pathname !== "/") {
                // If not on the main page, navigate there first
                navigate("/");
            }
            // Now, scroll to the anchor ID
            scrollToHash(path);
        } else {
            // For simple links like Home or a dedicated page, just navigate
            navigate(path);
        }
        
        // Collapse the Bootstrap menu after clicking (optional)
        const toggler = document.querySelector('.navbar-toggler');
        const collapse = document.querySelector('.navbar-collapse');
        if (collapse && collapse.classList.contains('show')) {
            toggler.click(); 
        }
    };

 // Add/remove scroll effect (Kept as is)
 useEffect(() => {
    const navbar = document.querySelector(".navbar");
    const handleScroll = () => {
      if (window.scrollY > 60) navbar.classList.add("scrolled");
      else navbar.classList.remove("scrolled");
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
 }, []);

  return (
    <nav className="navbar navbar-expand-lg fixed-top shadow-sm">
      <div className="container">
        {/* --- 1. Logo (Fixed Left) --- */}
        <div className="navbar-logo me-auto">
          <Link 
            to="/" 
            className="d-flex align-items-center text-decoration-none"
            onClick={scrollToTop} 
          >
            <img
              src={Logo}
              alt="ETrack Logo"
              className="img-fluid"
              style={{ height: "200px", width: "auto" }}
            />
          </Link>
        </div>

        {/* --- 2. Toggle Button for Mobile --- */}
        <button 
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
          aria-controls="navMenu"
          aria-expanded="true"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button> 

        {/* -------------------------------------------------------------
            --- 3. Navbar Links & MOBILE Button (Centered on desktop) ---
            ------------------------------------------------------------- */}
        <div 
          className="collapse navbar-collapse justify-content-center" 
          id="navMenu"
        >
          <ul className="navbar-nav mb-2 mb-lg-0 align-items-center">
            <li className="nav-item">
              <Link 
                className="nav-link" 
                to="/"
                onClick={scrollToTop}
              >Home</Link>
            </li>
            <li className="nav-item">
              <a 
                className="nav-link" 
                href="#about"
                onClick={(e) => handleNav(e, "#about")}
              >About Us</a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#titleservices"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Services
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#titleservices" onClick={(e) => handleNav(e, "#titleservices")}>Title Services</a></li>
                <li><a className="dropdown-item" href="#mortgageservices" onClick={(e) => handleNav(e, "#mortgageservices")}>Mortgage Services</a></li>
                <li><a className="dropdown-item" href="#roofingservices" onClick={(e) => handleNav(e, "#roofingservices")}>Roofing Reports</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a 
                className="nav-link" 
                href="#why"
                onClick={(e) => handleNav(e, "#why")}
              >Why ETrack</a>
            </li>
             <li className="nav-item">
              <a 
                className="nav-link" 
                href="#contact"
                onClick={(e) => handleNav(e, "#contact")}
              >Contact</a>
            </li>
            
            {/* -------------------------------------------------------------------
                --- 4. PHONE NUMBER FOR MOBILE MENU ONLY (d-lg-none) ---
                This item is hidden on large screens but appears when the toggle
                button is clicked on small screens. Added mt-2 for spacing.
                ------------------------------------------------------------------- */}
            <li className="nav-item d-lg-none mt-3"> 
                <a 
                    className="brand-btn btn-sm text-decoration-none" 
                    href="tel:7038806311"
                    onClick={(e) => handleNav(e, "#contact")} 
                >
                    <i className="bi bi-telephone-fill me-1"></i> 703-880-6311
                </a>
            </li>
          </ul>
        </div>
        
        <div className="d-none d-lg-flex">
            <a 
                className="brand-btn btn-sm ms-3 text-decoration-none" 
                href="tel:7038806311" 
                onClick={(e) => handleNav(e, "#contact")}
            >
                <i className="bi bi-telephone-fill me-1"></i> 703-880-6311
            </a>
        </div> 
        
      </div>
    </nav>
  );
}