import React, { useEffect } from "react";
import { Navbar } from "../components/layout";
import AboutUsSection from "../sections/AboutUsSection";
import JoinUsSection from "../sections/JoinUsSection";
import MapBackgroundWrapper from "../components/layout/MapBackgroundWrapper";

const AboutUsPage = () => {

  useEffect(() => {
    if (window.location.hash === "#join-us") {
      const section = document.getElementById("join-us");

      setTimeout(() => {
        section?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />

      <main>
        <div id="about">
          <AboutUsSection />
        </div>

        <div id="join-us">
          <JoinUsSection />
        </div>
      </main>

      <MapBackgroundWrapper />
    </div>
  );
};

export default AboutUsPage;