import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./suby/pages/LandingPage";
import ProductMenu from "./suby/components/ProductMenu";
import LoginPage from "./suby/pages/LoginPage";
import SignUpPage from "./suby/pages/SignUpPage"; // Import the SignUp Page
import "./App.css";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products/:firmId/:firmName" element={<ProductMenu />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} /> {/* Add SignUp Route */}
      </Routes>
    </div>
  );
};

export default App;
