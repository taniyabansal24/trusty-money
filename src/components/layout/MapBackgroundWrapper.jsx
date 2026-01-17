// components/layout/MapBackgroundWrapper.jsx
import React from "react";
import Footer from "./Footer";
import CallToAction from "./CallToAction";
import mapImage from "../../assets/MapImage.png";

const MapBackgroundWrapper = () => {
  return (
    <div className="relative">
      {/* Background container - Remove fixed positioning */}
      <div
  className="absolute inset-0 z-0"
  style={{
    backgroundImage: `url(${mapImage})`,
    backgroundSize: "80%",// Shows full image with space on sides
    backgroundPosition: "top" , // Perfect for footer background
    backgroundRepeat: "no-repeat",
    
  }}
>
        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(180deg, #FFFFFF 0%, #DCE9FF 100%)",
            opacity: 0.85,
          }}
        />
      </div>

      {/* Content container */}
      <div className="relative z-10">
        {/* Add the positioned gradient container for CallToAction */}
        <div className="relative overflow-hidden">
          {/* Your CallToAction section */}
          <CallToAction />
        </div>
        {/* Separation Line */}
        <div className="w-full border-t border-gray-300/50 mx-auto max-w-7xl"></div>
        {/* Footer */}

        <Footer />
      </div>
    </div>
  );
};

export default MapBackgroundWrapper;
