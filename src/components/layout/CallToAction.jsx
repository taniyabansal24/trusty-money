import React from 'react'
import { Container } from '../ui'

const CallToAction = () => {
  return (
    <Container className="pt-16 pb-8">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Header */}
        <div className="mb-10">
          <h2 className="text-blue-900 text-lg font-normal mb-4">
            Build Your Cross-Border Stack — One Layer at a Time
          </h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto leading-relaxed">
            Start with the infrastructure you need today. Scale with confidence as your business grows globally.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          {/* Primary Button - Request a Demo */}
          <button className="bg-blue-900 text-white px-8 py-4 rounded-2xl font-normal text-base shadow-lg hover:shadow-xl hover:bg-blue-800 transition-all duration-200 flex items-center justify-center gap-2">
            Request a Demo
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>

          {/* Secondary Button - Talk to Sales */}
          <button className="bg-white text-blue-900 px-8 py-4 rounded-2xl font-normal text-base border border-gray-200 shadow-sm hover:shadow-md hover:bg-gray-50 transition-all duration-200 flex items-center justify-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Talk to Sales
          </button>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto mb-12">
          {['Enterprise-grade security', 'SOC 2 Type II certified', 'Trusted by 500+ companies'].map((item, index) => (
            <div key={index} className="flex items-center justify-center gap-2 text-gray-700">
              
                <svg className="w-4 h-4 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              
              <span className="text-sm font-normal">{item}</span>
            </div>
          ))}
        </div>

        
      </div>
    </Container>
  )
}

export default CallToAction