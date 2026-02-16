import React from "react";
import { Navbar } from "../components/layout";
import HeroSection from "../sections/BillingPage/HeroSection";
import MapBackgroundWrapper from "../components/layout/MapBackgroundWrapper";
import SalesToFinance from "../sections/BillingPage/SalesToFinance";
import DynamicBilling from "../sections/BillingPage/DynamicBilling";
import UsageMetering from "../sections/BillingPage/UsageMetering";

const BillingPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="section">
        <HeroSection />
      </section>
      <section className="pt-20 pb-20 md:pt-24 md:pb-24 lg:pt-32">
        <DynamicBilling />
      </section>
      <section className="py-20 md:py-24">
        <UsageMetering />
      </section>
      <section className="pb-20 pt-44 lg:pt-72 lg:pb-24">
        <SalesToFinance />
      </section>
      <section className="pt-20 md:pt-28">
        <MapBackgroundWrapper />
      </section>
    </div>
  );
};

export default BillingPage;
