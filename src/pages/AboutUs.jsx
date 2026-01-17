import React from 'react'
import { Container } from '../components/ui'

const AboutUs = () => {
  return (
    <Container>
      <div className="relative w-full min-h-screen bg-white">
        {/* Main Hero Section with Exact Figma Positioning */}
        <section className="relative w-full pt-40 pb-20 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Title Section - Exactly as in Figma */}
            <div className="relative w-full h-[187px] mb-32">
              {/* "Building the Financial" - Left aligned */}
              <h1 className="relative text-5xl md:text-6xl  font-bold leading-[90px] text-[#0F172B]">
  Building the Financial{" "}
  <span className="text-[#073F9E]">
    Infrastructure
  </span>{" "}
  
</h1>
<p className="absolute left-0 bottom-0 text-6xl font-bold leading-[90px] text-[#0F172B] whitespace-nowrap">
    for Global Commerce
  </p>
            </div>

            {/* Subtitle - Centered below title */}
            <div className="relative w-full mb-32">
              <p className="text-center text-xl md:text-2xl text-[#45556C] leading-[28px]">
                Unifying billing, compliance, payments, and treasury into a single, coherent platform
              </p>
            </div>

            {/* Main Content Grid */}
            <div className="grid lg:grid-cols-2 gap-16 relative">
              {/* Left Column - Text Content */}
              <div className="relative">
                {/* Who We Are Section */}
                <div className="relative mb-20">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-14 h-14 bg-[#073F9E] rounded-2xl shadow-lg flex items-center justify-center flex-shrink-0">
                      <div className="relative w-7 h-7">
                        {/* Vertical line middle */}
                        <div className="absolute left-1/2 top-0 transform -translate-x-1/2 w-[2.333px] h-full bg-white"></div>
                        {/* Top horizontal */}
                        <div className="absolute left-1/2 top-1/3 transform -translate-x-1/2 -translate-y-1/2 w-[2.333px] h-2 bg-white"></div>
                        {/* Bottom horizontal */}
                        <div className="absolute left-1/2 bottom-1/6 transform -translate-x-1/2 translate-y-1/2 w-[2.333px] h-4 bg-white"></div>
                        {/* Left side */}
                        <div className="absolute left-1/6 top-1/4 transform -translate-x-1/2 w-3 h-[2.333px] bg-white"></div>
                        {/* Right side */}
                        <div className="absolute right-1/6 top-1/8 transform translate-x-1/2 w-2 h-[2.333px] bg-white"></div>
                      </div>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-normal text-[#0F172B] leading-[40px]">
                      Who We Are
                    </h2>
                  </div>
                  
                  <p className="text-xl md:text-2xl text-[#314158] leading-[40px] mb-8">
                    Trusty Money is a financial infrastructure company building a modern operating system for cross-border commerce.
                  </p>
                  
                  <p className="text-xl md:text-2xl text-[#314158] leading-[40px] mb-12">
                    We are not a payment gateway with add-ons. We are rebuilding the core financial layers that global businesses rely on – billing, compliance, payments, treasury, and reporting – as modular, programmable products.
                  </p>
                  
                  {/* "Us -:" Section */}
                  <div className="relative">
                    <h3 className="text-2xl md:text-3xl text-[#073F9E] font-normal mb-6">Us -:</h3>
                    <p className="text-xl md:text-2xl text-[#314158] leading-[40px]">
                      Our platform is designed for businesses that operate globally by default and need financial systems that scale with complexity, not against it.
                    </p>
                  </div>
                </div>

                {/* Why Now Section */}
                <div className="relative">
                  <h3 className="text-2xl md:text-3xl text-[#073F9E] font-normal mb-6">Why Now?</h3>
                  <p className="text-xl md:text-2xl text-[#314158] leading-[40px]">
                    Globalization has accelerated, but financial infrastructure hasn't kept pace. Businesses face fragmented systems, hidden costs, and compliance hurdles.
                  </p>
                </div>
              </div>

              {/* Right Column - Circular Visualization */}
              <div className="relative lg:sticky lg:top-32">
                <div className="relative w-full aspect-square max-w-[750px] mx-auto">
                  {/* Logo Circle at Center */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                    <div className="w-24 h-24 bg-white rounded-full shadow-2xl flex items-center justify-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-[#073F9E] to-blue-300 rounded"></div>
                    </div>
                  </div>

                  {/* Circles - Exact sizes from Figma */}
                  <div className="absolute inset-0 border-2 border-[#073F9E] rounded-full"></div>
                  <div className="absolute inset-12 border-2 border-[#073F9E] rounded-full"></div>
                  <div className="absolute inset-24 border-2 border-[#073F9E] rounded-full"></div>
                  <div className="absolute inset-36 border-2 border-[#073F9E] rounded-full"></div>
                  
                  {/* Feature Cards - Exact positioning from Figma */}
                  
                  {/* Top-Right: Tax */}
                  <div className="absolute top-[10%] right-[5%] transform -translate-y-1/2">
                    <div className="w-24 h-24 bg-white border border-[rgba(226,232,240,0.7)] shadow-2xl rounded-2xl relative">
                      <div className="absolute inset-0.5 bg-white/0.002 shadow-inner rounded-2xl"></div>
                      <div className="absolute inset-0 bg-white/0.002 ring-2 ring-blue-100 rounded-2xl"></div>
                      <div className="absolute inset-0 flex flex-col items-center justify-center p-2">
                        <div className="w-9 h-9 mb-1 flex items-center justify-center">
                          {/* Tax Icon */}
                          <div className="relative w-6 h-6">
                            <div className="absolute inset-0 border-2 border-[#073F9E] rounded-sm"></div>
                            <div className="absolute left-1/2 top-2/3 transform -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-[#073F9E]"></div>
                          </div>
                        </div>
                        <span className="font-bold text-xs text-[#0F172A]">Tax</span>
                        <span className="text-[10px] text-[#475569] mt-0.5">Compliance</span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom-Right: Billing */}
                  <div className="absolute bottom-[10%] right-[5%] transform translate-y-1/2">
                    <div className="w-24 h-24 bg-white border border-[rgba(226,232,240,0.7)] shadow-2xl rounded-2xl relative">
                      <div className="absolute inset-0.5 bg-white/0.002 shadow-inner rounded-2xl"></div>
                      <div className="absolute inset-0 bg-white/0.002 ring-2 ring-blue-100 rounded-2xl"></div>
                      <div className="absolute inset-0 flex flex-col items-center justify-center p-2">
                        <div className="w-9 h-9 mb-1 flex items-center justify-center">
                          {/* Billing Icon */}
                          <div className="relative w-6 h-6">
                            <div className="absolute left-1/4 top-1/4 w-1/2 h-1/2 border-2 border-[#073F9E]"></div>
                            <div className="absolute right-1/4 top-1/4 w-1/3 h-1/6 border-2 border-[#073F9E]"></div>
                            <div className="absolute left-1/3 bottom-1/3 w-1/6 h-1/6 border-2 border-[#073F9E]"></div>
                            <div className="absolute left-1/3 bottom-1/2 w-1/3 h-[2px] bg-[#073F9E]"></div>
                            <div className="absolute left-1/3 bottom-1/4 w-1/3 h-[2px] bg-[#073F9E]"></div>
                          </div>
                        </div>
                        <span className="font-bold text-xs text-[#0F172A]">Billing</span>
                        <span className="text-[10px] text-[#475569] mt-0.5">Invoices & AR</span>
                      </div>
                    </div>
                  </div>

                  {/* Middle-Left: FX & Treasury */}
                  <div className="absolute top-1/2 left-[15%] transform -translate-y-1/2">
                    <div className="w-24 h-24 bg-white border border-[rgba(226,232,240,0.7)] shadow-2xl rounded-2xl relative">
                      <div className="absolute inset-0.5 bg-white/0.002 shadow-inner rounded-2xl"></div>
                      <div className="absolute inset-0 bg-white/0.002 ring-2 ring-blue-100 rounded-2xl"></div>
                      <div className="absolute inset-0 flex flex-col items-center justify-center p-2">
                        <div className="w-9 h-9 mb-1 flex items-center justify-center">
                          {/* Box Icon */}
                          <div className="relative w-6 h-6">
                            <div className="absolute inset-0 bg-[#073F9E] opacity-90"></div>
                          </div>
                        </div>
                        <span className="font-bold text-xs text-[#0F172A]">FX & Treasury</span>
                        <span className="text-[10px] text-[#475569] mt-0.5">Multi-currency</span>
                      </div>
                    </div>
                  </div>

                  {/* Top-Left: Dashboards */}
                  <div className="absolute top-[25%] left-[25%] transform -translate-y-1/2">
                    <div className="w-24 h-24 bg-white border border-[rgba(226,232,240,0.7)] shadow-2xl rounded-2xl relative">
                      <div className="absolute inset-0.5 bg-white/0.002 shadow-inner rounded-2xl"></div>
                      <div className="absolute inset-0 bg-white/0.002 ring-2 ring-blue-100 rounded-2xl"></div>
                      <div className="absolute inset-0 flex flex-col items-center justify-center p-2">
                        <div className="w-9 h-9 mb-1 flex items-center justify-center">
                          {/* Dashboard Icon */}
                          <div className="relative w-6 h-6">
                            <div className="absolute left-1/3 top-1/4 w-1/3 h-1/2 border-2 border-[#073F9E]"></div>
                            <div className="absolute right-1/4 top-1/4 w-1/4 h-1/4 border-2 border-[#073F9E]"></div>
                          </div>
                        </div>
                        <span className="font-bold text-xs text-[#0F172A]">Dashboards</span>
                        <span className="text-[10px] text-[#475569] mt-0.5">Real-time</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Rest of the sections (Problem & Solution, Leadership Team, Vision, etc.) */}
        {/* You can add the remaining sections here following the same pattern */}
        
      </div>
    </Container>
  )
}

export default AboutUs