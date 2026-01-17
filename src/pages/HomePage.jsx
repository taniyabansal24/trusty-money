import React from "react";
import { Navbar, Footer } from "../components/layout";
import { HeroSection } from "../sections";
import { TransparencySection } from "../sections/TransparencySection.jsx";
import { SolutionOverview } from "../sections/SolutionOverview.jsx";
import ProblemSection from "../sections/ProblemSection";
import InvoiceDashboard from "../sections/HeroSection/InvoiceDashboard.jsx";

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSection />

        {/* ⬆️ End of Transition Wrapper ⬆️ */}

        <div className="min-h-screen bg-white">
          <SolutionOverview />
          {/* <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-slate-50 py-12">
            <TransparencySection />
          </div> */}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
