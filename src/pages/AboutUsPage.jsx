import React from 'react'
import { Navbar } from '../components/layout'
import AboutUsSection from '../sections/AboutUsSection'
import JoinUsSection from '../sections/JoinUsSection'
import MapBackgroundWrapper from '../components/layout/MapBackgroundWrapper'

const AboutUsPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <div >
            <AboutUsSection/>
        </div>
        <div className="section">
            <JoinUsSection/>
        </div>
      </main>
      <MapBackgroundWrapper/>
    </div>
  )
}

export default AboutUsPage