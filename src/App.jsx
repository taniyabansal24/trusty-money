import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import JoinUsPage from "./sections/JoinUsSection";
import AboutUs from "./sections/AboutUsSection";
import { Footer, Navbar } from "./components/layout";
import AboutUsPage from "./pages/AboutUsPage";
import BillingPage from "./pages/BillingPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Home route */}
          <Route path="/" element={<HomePage />} />

          {/* Sign-up route */}
          <Route path="/sign-up" element={<SignUpPage />} />

          {/* Sign-in route */}
          <Route path="/sign-in" element={<SignInPage />} />

          {/* About-us route */}
          <Route path="/about-us" element={<AboutUsPage/>} />

          {/* About-us route */}
          <Route path="/products/billing" element={<BillingPage/>} />

          {/* Redirect any unknown routes to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
