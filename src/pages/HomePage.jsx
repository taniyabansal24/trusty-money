import React from 'react';
import { Navbar, Footer } from '../components/layout';
import {
  HeroSection,ProblemSection,SolutionSection
} from '../sections';
import Problem from './Problem';


const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <Problem />
        {/* <ProblemSection/> */}
        {/* <SolutionSection/> */}
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
