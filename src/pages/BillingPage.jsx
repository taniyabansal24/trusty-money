import React from 'react'
import { Navbar } from '../components/layout'
import HeroSection from '../sections/BillingPage/HeroSection'
import MapBackgroundWrapper from '../components/layout/MapBackgroundWrapper'

const BillingPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar/>
       <section className='section'>
        <HeroSection/>
    </section>
      <section className='section'>

      <MapBackgroundWrapper/>
      </section>
    </div>
  )
}

export default BillingPage