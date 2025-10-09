import React from "react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { BrowserRouter, Routes, Route } from "react-router-dom"; 

// --- Component Imports ---
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import TitleServices from "./components/TitleServices";
import MortgageServices from "./components/MortgageServices";
import RoofingReports from "./components/RoofingReports";
import WhyChoose from "./components/WhyChoose";
import Contact from "./components/ContactUs.jsx"; // FormSubmit form
import ThankYou from "./components/ThankYou.jsx"; // Success page
import RoofingOrderForm from "./components/Orderroof"; 
import Footer from "./components/Footer";

// --- Redux/Animation Imports ---
import contactReducer from "./redux/contactSlice";
import useScrollAnimations from "./useScrollAnimations.js";

// --- Styles Imports ---
import "./styles/animations.css"
import "./styles/base.css"
import "./styles/variables.css"

const store = configureStore({
  reducer: { contact: contactReducer },
});

// Component that renders the main single-page layout
const MainLayout = () => {
    useScrollAnimations(); 

    return (
        <main>
            {/* All main landing page sections */}
            <div className="reveal"><Home /></div>
            <div className="reveal"><About /></div>
            <div className="reveal"><TitleServices /></div>
            <div className="reveal"><MortgageServices /></div>
            <div className="reveal"><RoofingReports /></div> 
            <div className="reveal"><WhyChoose /></div>
            <div className="reveal"><Contact /></div>
        </main>
    );
};

export default function App() {
  return (
    <Provider store={store}>
        <BrowserRouter> 
          <Navbar />
            
            <Routes>
                <Route path="/" element={<MainLayout />} />
                <Route path="/thank-you" element={<ThankYou />} />
                <Route path="/roofing-order-page" element={<RoofingOrderForm />} />
            </Routes>

          <Footer />

          <button
            id="backToTop"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            title="Back to Top"
          >
            <i className="bi bi-arrow-up-short fs-3"></i>
          </button>
        </BrowserRouter>
    </Provider>
  );
}