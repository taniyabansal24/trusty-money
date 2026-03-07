import React from 'react'
import { Navbar } from "../components/layout";
import HeroSection from '../sections/ReceivablesAutomation/HeroSection'
import MapBackgroundWrapper from "../components/layout/MapBackgroundWrapper";
import TrackBilling from '../sections/ReceivablesAutomation/TrackBilling';
import RemindersAutomation from '../sections/ReceivablesAutomation/RemindersAutomation';
import SyncSection from '../sections/ReceivablesAutomation/SyncSection';
import FlowChat from '../sections/ReceivablesAutomation/FlowChat';

const ReceivablesAutomation = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="section">
        <HeroSection />
      </section>
      {/* <section className="pt-20 pb-20 md:pt-24 md:pb-24 lg:pt-32">
        <TrackBilling/>
      </section> */}
      <section className="">
        <RemindersAutomation/>
      </section>
      <section className="section">
        <SyncSection/>
      </section>
      <section className="pt-20 md:pt-24">
        <MapBackgroundWrapper />
      </section>
    </div>
  )
}

export default ReceivablesAutomation
