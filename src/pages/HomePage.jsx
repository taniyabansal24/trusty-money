import React from 'react';
import { Navbar, Footer } from '../components/layout';
import {
  HeroSection,ProblemSection,SolutionSection
} from '../sections';
import Problem from './Problem';
import Phone from './Phone';


const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        {/* Problem Section */}
        <Phone />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
