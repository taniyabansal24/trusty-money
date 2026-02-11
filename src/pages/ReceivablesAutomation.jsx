import React from 'react'
import { Navbar } from "../components/layout";
import HeroSection from '../sections/ReceivablesAutomation/HeroSection'
import MapBackgroundWrapper from "../components/layout/MapBackgroundWrapper";
import TrackBilling from '../sections/ReceivablesAutomation/TrackBilling';

const ReceivablesAutomation = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="section">
        <HeroSection />
      </section>
      <section className="pt-20 pb-20 md:pt-24 md:pb-24 lg:pt-32">
        <TrackBilling/>
      </section>
      <section className="py-20 md:py-24">
        
      </section>
      <section className="pb-20 pt-44 lg:pt-52 lg:pb-24">
        
      </section>
      <section className="pt-20 md:pt-24">
        <MapBackgroundWrapper />
      </section>
    </div>
  )
}

export default ReceivablesAutomation
