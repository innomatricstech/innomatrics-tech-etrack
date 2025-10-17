import React, { useState, useEffect } from "react";
// 1. Import all banner images
import HeroImg1 from "../assets/images/1baner.png"; 
import HeroImg2 from "../assets/images/banner 2.png";
import HeroImg3 from "../assets/images/Banner 3.png";

// Data structure linking image and headline only
const heroData = [
    {
        image: HeroImg1,
        headline: "Title Search Services Nationwide"
    },
    {
        image: HeroImg2,
        headline: "Mortgage Loan Processing & Servicing"
    },
    {
        image: HeroImg3,
        headline: "Roof & Wall Measurement Reports"
    }
];

export default function Home() {
    // State to track the currently displayed content index
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Function to move to the next slide
    const handleNext = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroData.length);
    };

    // Function to move to the previous slide
    const handlePrev = () => {
        setCurrentImageIndex((prevIndex) => 
            // Ensures index wraps correctly from 0 to the last item
            (prevIndex - 1 + heroData.length) % heroData.length
        );
    };

    // 2. useEffect hook to handle the automatic content cycling (with restart)
    useEffect(() => {
        // This timer is cleared and reset whenever currentImageIndex changes,
        // which handles both automatic cycling and user interaction.
        const timer = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroData.length);
        }, 5000); 

        return () => clearInterval(timer);
    }, [currentImageIndex]); // Dependency on currentImageIndex

    // Get the current data object (image and headline)
    const currentHero = heroData[currentImageIndex];

    // 3. Dynamic background style using the current image
    const heroStyle = {
        backgroundImage: `linear-gradient(rgba(10, 25, 49, 0.5), rgba(10, 25, 49, 0.5)), url(${currentHero.image})`,
    };

    // Static button data
    const staticCtaText = "Explore Our Services";
    const staticCtaLink = "#titleservices"; 

    return (
        <header 
            id="home" 
            className="hero-section text-center d-flex align-items-center justify-content-center hero-image-transition"
            style={heroStyle}
        >
            
            {/* --- MANUAL NAVIGATION BUTTONS --- */}
            <button className="hero-nav-btn prev-btn" onClick={handlePrev} aria-label="Previous Slide">
                <i className="bi bi-chevron-left"></i>
            </button>
            <button className="hero-nav-btn next-btn" onClick={handleNext} aria-label="Next Slide">
                <i className="bi bi-chevron-right"></i>
            </button>
            {/* --------------------------------- */}

            <div className="container">
                {/* Headline: Uses key to force re-render and restart animation */}
                <h1 
                    key={currentImageIndex + "-h1"} 
                    className="display-4 text-white fw-bold mb-3 hero-text-slide"
                >
                    {currentHero.headline}
                </h1>
                
                {/* Subtext remains static */}
                <p className="lead text-white font-weight-bold fw-light animate-fade-delay">
                    Accurate • Affordable • Nationwide Coverage
                </p>

                {/* Single, Static Button */}
                <a 
                    href={staticCtaLink} 
                    className="btn btn-lg btn-light text-white mt-4 px-4 shadow-sm brand-btn"
                >
                    {staticCtaText}
                </a>
            </div>
        </header>
    );
}