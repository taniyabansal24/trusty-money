import React from "react";
import { Navbar } from "../components/layout";
import HeroSection from "../sections/BillingPage/HeroSection";
import MapBackgroundWrapper from "../components/layout/MapBackgroundWrapper";
import SalesToFinance from "../sections/BillingPage/SalesToFinance";

const BillingPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="section">
        <HeroSection />
      </section>
      <section className="section">
        <SalesToFinance/>
      </section>
      <section className="pt-20 md:pt-24">
        <MapBackgroundWrapper />
      </section>
    </div>
  );
};

export default BillingPage;