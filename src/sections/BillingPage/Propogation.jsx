import React, { useState, useEffect } from "react";
import PowerIcon from "../../components/svg/PowerIcon";
import SettingsIcon from "../../components/svg/SettingsIcon";

const Propogation = () => {
  // Proportion Card State
  const [isToggled, setIsToggled] = useState(true);
  const [isAutoMode, setIsAutoMode] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  // Pricing Table Card State
  const [isPricingToggled, setIsPricingToggled] = useState(false); // Default to Fixed
  const [isPricingAutoMode, setIsPricingAutoMode] = useState(true);

  // Settings Panel State - track selected pricing model
  const [selectedPricingModel, setSelectedPricingModel] = useState("Usage Based");

  const days = Array.from({ length: 30 }, (_, i) => {
    const day = i + 1;
    const opacityMap = {
      1: 0.77,
      2: 0.77,
      3: 0.77,
      4: 0.77,
      5: 0.49,
      6: 0.77,
      7: 0.77,
      8: 0.52,
      9: 0.77,
      10: 0.77,
      11: 0.36,
      12: 0.46,
      13: 0.77,
      14: 0.77,
      15: 0.29,
      16: 0.4,
      17: 0.77,
      18: 0.77,
      19: 0.1,
      20: 0.77,
      21: 0.77,
      22: 0.77,
      23: 0.77,
      24: 0.77,
      25: 0.77,
      26: 0.77,
      27: 0.77,
      28: 0.77,
      29: 0.77,
      30: 0.77,
    };

    if (day === 19) {
      return {
        day,
        bgColor: isToggled ? "#CAD5E2" : "#F1F5F9",
        textColor: isToggled ? "#073F9E" : "#CAD5E2",
        opacity: 1,
        isDay19: true,
      };
    }

    if (!isToggled) {
      return {
        day,
        bgColor: "#F1F5F9",
        textColor: "#CAD5E2",
        opacity: 1,
        isDay19: false,
      };
    }

    const bgColor = day >= 20 ? "#F1F5F9" : "#073F9E";
    const textColor =
      day >= 20 ? "#CAD5E2" : day === 31 ? "#073F9E" : "#FFFFFF";
    const opacity = opacityMap[day] || 0.77;

    return { day, bgColor, textColor, opacity, isDay19: false };
  });

  // Animate billing amount change for Proportion Card
  const animateAmountChange = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
    }, 300);
  };

  // Pricing Table Data
  const pricingData = {
    fixed: [
      { from: "0", to: "1000", fee: "$0.3" },
      { from: "1001", to: "5000", fee: "$0.4" },
      { from: "10000", to: "5001", fee: "$0.5" },
    ],
    volume: [
      { from: "$0", to: "$1000", fee: "0.3%" },
      { from: "$1001", to: "$5000", fee: "0.4%" },
      { from: "$10000", to: "$5001", fee: "0.5%" },
    ],
  };

  // Handle Proportion Card auto toggle
  useEffect(() => {
    let interval;
    if (isAutoMode) {
      interval = setInterval(() => {
        setIsToggled((prev) => !prev);
        animateAmountChange();
      }, 2000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isAutoMode]);

  // Handle Pricing Card auto toggle
  useEffect(() => {
    let interval;
    if (isPricingAutoMode) {
      interval = setInterval(() => {
        setIsPricingToggled((prev) => !prev);
      }, 2000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPricingAutoMode]);

  // Proportion Card Handlers
  const handleToggleClick = () => {
    setIsToggled((prev) => !prev);
    animateAmountChange();
  };

  const handleAutoToggle = (e) => {
    e.stopPropagation();
    setIsAutoMode(!isAutoMode);
  };

  // Pricing Card Handlers - Toggle between Fixed and Volume
  const handlePricingToggleClick = () => {
    setIsPricingToggled((prev) => !prev);
  };

  const handlePricingAutoToggle = (e) => {
    e.stopPropagation();
    setIsPricingAutoMode(!isPricingAutoMode);
  };

  // Settings Panel Handlers
  const handlePricingModelClick = (model) => {
    setSelectedPricingModel(model);
  };

  return (
    <div className="relative w-full max-w-full">
      <div className="relative w-full flex flex-col justify-center md:flex-row gap-4 lg:gap-6 items-center">
        {/* Main Proportion Card (unchanged) */}
        <div className="relative w-full md:w-72 bg-white rounded-3xl shadow-[0px_40px_80px_-20px_rgba(7,_63,_158,_0.2)] p-6 overflow-hidden">
          <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-64 h-64 bg-[#073F9E] opacity-10 blur-[80px] rounded-full" />

          <div className="relative flex justify-between items-start mb-6">
            <h2 className="text-lg font-bold text-[#1D293D]">FlexBilling</h2>
            <div className="flex flex-col items-end gap-1">
              <div className="flex items-center gap-2">
                <div
                  className="relative w-14 h-[1.6rem] bg-white border border-[#E2E8F0] rounded-full shadow-inner cursor-pointer"
                  onClick={handleToggleClick}
                  title="Click to toggle manually"
                >
                  <div
                    className={`absolute w-7 h-6 rounded-full shadow-md flex items-center justify-center transition-all top-0 duration-300 ${
                      isToggled ? "left-7 bg-[#073F9E]" : "left-0 bg-white"
                    }`}
                  >
                    <div className="w-3 h-3 flex flex-col items-center justify-between">
                      <PowerIcon
                        size={16}
                        color={isToggled ? "#FFFFFF" : "#90A1B9"}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Billing amount section */}
          <div className="mb-8">
            <div className="flex mb-2">
              <span
                className={`text-2xl font-bold text-[#073F9E] transition-opacity duration-300 ${
                  isAnimating ? "opacity-50" : "opacity-70"
                }`}
              >
                $
              </span>
              <div className="relative text-3xl font-bold ">
                <span
                  className={`absolute left-1 -top-[1px] text-[#073F9E] transition-all duration-300 ${
                    isToggled
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 -translate-y-2"
                  }`}
                >
                  372.77
                </span>
                <span
                  className={`absolute left-1 -top-[1px] transition-all duration-300 text-[#073F9E] ${
                    !isToggled
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-2"
                  }`}
                >
                  860.45
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div
                className={`px-2 py-1 rounded text-xs font-medium bg-[#F1F5F9] text-[#62748E] transition-all duration-300 ${
                  isAnimating ? "scale-95" : "scale-100"
                }`}
              >
                Tier 2
              </div>
              <span
                className={`text-xs font-medium text-[#90A1B9] transition-all duration-300 ${
                  isAnimating ? "opacity-70" : "opacity-100"
                }`}
              >
                $0.05 / request
              </span>
            </div>
          </div>

          {/* Calendar section */}
          <div
            className={`transition-all duration-500 ${
              !isToggled ? "opacity-60" : "opacity-100"
            }`}
          >
            <div className="flex justify-between items-center mb-4">
              <span
                className={`text-xs font-bold transition-colors duration-500 ${
                  isToggled ? "text-[#0F172B]" : "text-[#90A1B9]"
                }`}
              >
                September
              </span>
              <div className="flex gap-1">
                <div
                  className={`w-1 h-1 rounded-full transition-colors duration-500 ${
                    isToggled
                      ? "bg-[#073F9E] opacity-20"
                      : "bg-[#90A1B9] opacity-10"
                  }`}
                />
                <div
                  className={`w-1 h-1 rounded-full transition-colors duration-500 ${
                    isToggled
                      ? "bg-[#073F9E] opacity-50"
                      : "bg-[#90A1B9] opacity-20"
                  }`}
                />
                <div
                  className={`w-1 h-1 rounded-full transition-colors duration-500 ${
                    isToggled ? "bg-[#073F9E]" : "bg-[#90A1B9] opacity-30"
                  }`}
                />
              </div>
            </div>

            <div className="grid grid-cols-6 grid-rows-5 gap-2">
              {days.map(({ day, bgColor, textColor, opacity, isDay19 }) => (
                <div
                  key={day}
                  className="relative flex items-center justify-center"
                >
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center relative transition-all duration-300"
                    style={{
                      backgroundColor: bgColor,
                      opacity: opacity,
                    }}
                  >
                    {isDay19 && isToggled && (
                      <div className="absolute inset-[-1px] border border-[#073F9E] opacity-75 rounded-full transition-opacity duration-300" />
                    )}
                    <span
                      className="text-[9px] font-bold transition-colors duration-300"
                      style={{ color: textColor }}
                    >
                      {day}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right side container */}
        <div className="w-full md:w-fit lg:w-[45%] flex flex-col gap-4 lg:gap-6">
          {/* Pricing Table Card */}
          <div className="lg:absolute right-0 -top-14 lg:-right-14 w-full md:w-72 bg-white border border-[#F1F5F9] rounded-lg shadow-[0px_10px_15px_-3px_rgba(0,_0,_0,_0.1),_0px_4px_6px_-4px_rgba(0,_0,_0,_0.1)] z-10">
            <div className="p-4">
              {/* Table header with toggle */}
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm font-semibold text-black">
                  Pricing
                </span>

                {/* Fixed/Volume Toggle Button */}
                <div className="flex flex-col items-end gap-1">
                  <div
                    className="relative flex items-center justify-start rounded-[32px] bg-neutral-100 px-1 py-1 text-[11px] cursor-pointer w-32 h-8"
                    onClick={handlePricingToggleClick}
                    title="Click to toggle between Fixed and Volume"
                  >
                    {/* Blue background that shifts */}
                    <div
                      className={`absolute z-0 rounded-[32px] bg-[#073F9E] transition-all duration-300 ${
                        isPricingToggled
                          ? "left-16" // Move to Volume position
                          : "left-1" // Stay at Fixed position
                      }`}
                      style={{
                        height: "22px",
                        width: "61px",
                        boxShadow:
                          "rgba(16, 25, 36, 0.1) 0px 2px 5px 0px, rgba(17, 26, 37, 0.05) 0px 0px 0px 1px",
                      }}
                    ></div>

                    {/* Fixed Option */}
                    <div className="relative px-3 py-1 text-left flex-1 flex justify-center">
                      <span
                        className={`font-normal transition-colors duration-300 ${
                          isPricingToggled ? "text-black" : "text-white"
                        }`}
                      >
                        Fixed
                      </span>
                    </div>

                    {/* Volume Option */}
                    <div className="relative px-3 py-1 text-left flex-1 flex justify-center">
                      <span
                        className={`font-normal transition-colors duration-300 ${
                          isPricingToggled ? "text-white" : "text-black"
                        }`}
                      >
                        Volume
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Table with proper alignment */}
              <div className="relative">
                {/* Column headers - centered text */}
                <div className="flex px-2 pb-2 border-b border-[#A4A4A4] text-sm">
                  <div className="w-1/3 flex justify-center">
                    <span className="font-normal text-black">From</span>
                  </div>
                  <div className="w-1/3 flex justify-center">
                    <span className="font-normal text-black">Up to</span>
                  </div>
                  <div className="w-1/3 flex justify-center">
                    <span className="font-normal text-black">Fee</span>
                  </div>
                </div>

                {/* Vertical lines */}
                <div className="absolute left-1/3 w-px h-full bg-[#A4A4A4] top-0" />
                <div className="absolute left-2/3 w-px h-full bg-[#A4A4A4] top-0" />

                {/* Table rows with centered content */}
                <div className="divide-y divide-[#A4A4A4] text-sm">
                  {pricingData[isPricingToggled ? "volume" : "fixed"].map(
                    (row, index) => (
                      <div key={index} className="flex items-center py-5">
                        {/* From column - Perfectly centered */}
                        <div className="relative w-1/3 flex justify-center items-center h-full">
                          <div className="relative w-full h-full flex items-center justify-center">
                            <div className="absolute inset-0 flex items-center justify-center">
                              <span
                                className={`font-normal transition-all duration-300 whitespace-nowrap ${
                                  !isPricingToggled
                                    ? "opacity-100 translate-y-0 text-black"
                                    : "opacity-0 -translate-y-2"
                                }`}
                              >
                                {pricingData.fixed[index].from}
                              </span>
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center">
                              <span
                                className={`font-normal transition-all duration-300 whitespace-nowrap ${
                                  isPricingToggled
                                    ? "opacity-100 translate-y-0 text-black"
                                    : "opacity-0 translate-y-2"
                                }`}
                              >
                                {pricingData.volume[index].from}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Up to column - Perfectly centered */}
                        <div className="relative w-1/3 flex justify-center items-center h-full">
                          <div className="relative w-full h-full flex items-center justify-center">
                            <div className="absolute inset-0 flex items-center justify-center">
                              <span
                                className={`font-normal transition-all duration-300 whitespace-nowrap ${
                                  !isPricingToggled
                                    ? "opacity-100 translate-y-0 text-black"
                                    : "opacity-0 -translate-y-2"
                                }`}
                              >
                                {pricingData.fixed[index].to}
                              </span>
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center">
                              <span
                                className={`font-normal transition-all duration-300 whitespace-nowrap ${
                                  isPricingToggled
                                    ? "opacity-100 translate-y-0 text-black"
                                    : "opacity-0 translate-y-2"
                                }`}
                              >
                                {pricingData.volume[index].to}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Fee column - Perfectly centered */}
                        <div className="relative w-1/3 flex justify-center items-center h-full">
                          <div className="relative w-full h-full flex items-center justify-center">
                            <div className="absolute inset-0 flex items-center justify-center">
                              <span
                                className={`font-normal transition-all duration-300 whitespace-nowrap ${
                                  !isPricingToggled
                                    ? "opacity-100 translate-y-0 text-black"
                                    : "opacity-0 -translate-y-2"
                                }`}
                              >
                                {pricingData.fixed[index].fee}
                              </span>
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center">
                              <span
                                className={`font-normal transition-all duration-300 whitespace-nowrap ${
                                  isPricingToggled
                                    ? "opacity-100 translate-y-0 text-black"
                                    : "opacity-0 translate-y-2"
                                }`}
                              >
                                {pricingData.volume[index].fee}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Settings Panel */}
          <div className="lg:absolute right-0 top-52 lg:-right-14 w-full md:w-72 bg-white border border-[#F1F5F9] rounded-lg shadow-[0px_10px_15px_-3px_rgba(0,_0,_0,_0.1),_0px_4px_6px_-4px_rgba(0,_0,_0,_0.1)] z-10">
            <div className="p-5">
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm font-bold text-[#0F172B]">
                  Pricing Model
                </span>
                <div className="w-4 h-4 flex items-center justify-center">
                  <SettingsIcon size={18} />
                </div>
              </div>

              <div className="space-y-2">
                {/* Free Tiers Option */}
                <div 
                  className="flex justify-between items-center py-1.5 px-3 rounded-lg hover:bg-gray-50 cursor-pointer"
                  onClick={() => handlePricingModelClick("Free Tiers")}
                >
                  <span className="text-sm font-normal text-[#45556C]">
                    Free Tiers
                  </span>
                  <div className={`w-4 h-4 border rounded-full ${selectedPricingModel === "Free Tiers" ? "bg-[#073F9E] border-[#073F9E]" : "border-[#CAD5E2]"}`}>
                    {selectedPricingModel === "Free Tiers" && (
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="w-1.5 h-1.5 bg-white rounded-full" />
                      </div>
                    )}
                  </div>
                </div>

                {/* Hybrid Pricing Option */}
                <div 
                  className="flex justify-between items-center py-1.5 px-3 rounded-lg hover:bg-gray-50 cursor-pointer"
                  onClick={() => handlePricingModelClick("Hybrid Pricing")}
                >
                  <span className="text-sm font-normal text-[#45556C]">
                    Hybrid Pricing
                  </span>
                  <div className={`w-4 h-4 border rounded-full ${selectedPricingModel === "Hybrid Pricing" ? "bg-[#073F9E] border-[#073F9E]" : "border-[#CAD5E2]"}`}>
                    {selectedPricingModel === "Hybrid Pricing" && (
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="w-1.5 h-1.5 bg-white rounded-full" />
                      </div>
                    )}
                  </div>
                </div>

                {/* Usage Based Option */}
                <div 
                  className="flex justify-between items-center py-1.5 px-3 rounded-lg hover:bg-gray-50 cursor-pointer"
                  onClick={() => handlePricingModelClick("Usage Based")}
                >
                  <span className="text-sm font-normal text-[#45556C]">
                    Usage Based
                  </span>
                  <div className={`w-4 h-4 border rounded-full ${selectedPricingModel === "Usage Based" ? "bg-[#073F9E] border-[#073F9E]" : "border-[#CAD5E2]"}`}>
                    {selectedPricingModel === "Usage Based" && (
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="w-1.5 h-1.5 bg-white rounded-full" />
                      </div>
                    )}
                  </div>
                </div>

                {/* Per unit Pricing Option */}
                <div 
                  className="flex justify-between items-center py-1.5 px-3 rounded-lg hover:bg-gray-50 cursor-pointer"
                  onClick={() => handlePricingModelClick("Per unit Pricing")}
                >
                  <span className="text-sm font-normal text-[#45556C]">
                    Per unit Pricing
                  </span>
                  <div className={`w-4 h-4 border rounded-full ${selectedPricingModel === "Per unit Pricing" ? "bg-[#073F9E] border-[#073F9E]" : "border-[#CAD5E2]"}`}>
                    {selectedPricingModel === "Per unit Pricing" && (
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="w-1.5 h-1.5 bg-white rounded-full" />
                      </div>
                    )}
                  </div>
                </div>

                {/* Automatic Proportion Option */}
                <div 
                  className="flex justify-between items-center py-1.5 px-3 rounded-lg hover:bg-gray-50 cursor-pointer"
                  onClick={() => handlePricingModelClick("Automatic Proportion")}
                >
                  <span className="text-sm font-normal text-[#45556C]">
                    Automatic Proportion
                  </span>
                  <div className={`w-4 h-4 border rounded-full ${selectedPricingModel === "Automatic Proportion" ? "bg-[#073F9E] border-[#073F9E]" : "border-[#CAD5E2]"}`}>
                    {selectedPricingModel === "Automatic Proportion" && (
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="w-1.5 h-1.5 bg-white rounded-full" />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Propogation;