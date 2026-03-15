import React from "react";
import CalendarCheckIcon from "../../components/svg/CalendarCheckIcon";
import CardIconAboutUs from "../../components/svg/CardIconAboutUs";
import BankIconAboutUs from "../../components/svg/BankIconAboutUs";
import DiscountIcon from "../../components/svg/DiscountIcon";
import LayersIconAboutUs from "../../components/svg/LayersIconAboutUs";
import PuzzleIcon from "../../components/svg/PuzzleIcon";
import { Button } from "../../components/ui";
import { Container } from "../../components/ui";

const KeyChallenges = () => {
  const features = [
    {
      icon: <BankIconAboutUs />,
      title: "Unified banking systems",
      description:
        "All your banking needs consolidated into one seamless platform for simplified financial management.",
    },
    {
      icon: <CardIconAboutUs />,
      title: "Transparent FX pricing",
      description:
        "Clear, fair foreign exchange rates with no hidden fees or markups on international transactions.",
    },
    {
      icon: <CalendarCheckIcon />,
      title: "Consistent tax rules",
      description:
        "Tax compliance handled automatically across jurisdictions with up-to-date regulatory alignment.",
    },
    {
      icon: <LayersIconAboutUs />,
      title: "Connected financial tools",
      description:
        "Every financial tool your business needs — integrated, automated, and working together seamlessly.",
    },
    {
      icon: <PuzzleIcon />,
      title: "Seamless global payments",
      description:
        "Send, receive, and manage payments globally without friction or delays across multiple currencies.",
    },
    {
      icon: <DiscountIcon />,
      title: "Automated invoicing & compliance",
      description:
        "Generate, send, and track invoices with built-in compliance for global business operations.",
    },
  ];

  return (
      <Container className="bg-white ">
        {/* Header Section */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="section-hero-heading txt-blue">
            Key challenges <span className="text-[#1b1b1b]">- and the solutions <br /> that drove impact.</span>
          </h2>

          {/* Button */}
          <div className="mt-8">
            {/* <button className="bg-[#073F9E] text-white rounded-full px-8 py-3 hover:bg-[#052d72] transition-colors inline-flex items-center justify-center">
              <span className="text-base md:text-lg font-normal">
                Tackle the Problem
              </span>
            </button> */}
            <Button variant="primary" size="md" shimmer>
              Tackle the Problem
            </Button>
          </div>
        </div>

        {/* Features Section */}
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="mb-12 text-center md:text-left">
            <h3 className="sub-section-heading text-[#101828]">
              Benefits of working with us
            </h3>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-28 gap-y-16 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col items-start">
                {/* Icon */}
                <div className="">{feature.icon}</div>

                {/* Title */}
                <h4 className="feature-title text-[#101828] mb-2">
                  {feature.title}
                </h4>

                {/* Description */}
                <p className="feature-description text-[#6A7282] max-w-lg">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
   </Container>
  );
};

export default KeyChallenges;
