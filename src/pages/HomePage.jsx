import React from "react";
import { Navbar, Footer } from "../components/layout";
import { HeroSection } from "../sections";
import { TransparencySection } from "../sections/TransparencySection.jsx";
import { SolutionOverview } from "../sections/SolutionOverview.jsx";
import ProblemSection from "../sections/ProblemSection";
import InvoiceDashboard from "../sections/HeroSection/InvoiceDashboard.jsx";
import SecuritySection from "../sections/SecuritySection.jsx";
import TestimonialSection from "../sections/TestimonialSection.jsx";
import FAQ from "../sections/FAQ.jsx";
import MapBackgroundWrapper from "../components/layout/MapBackgroundWrapper.jsx";

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
      
          <ProblemSection />
       
        {/* ⬆️ End of Transition Wrapper ⬆️ */}

        <div className="section">
          <SolutionOverview />
          {/* <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-slate-50 py-12">
            <TransparencySection />
          </div> */}
          <div className="section">
            <SecuritySection />
          </div>
          <div className="section">
            <TestimonialSection />
          </div>
          <div className="section">
            <FAQ />
          </div>
        </div>
      </main>
      <MapBackgroundWrapper />
    </div>
  );
};

export default HomePage;