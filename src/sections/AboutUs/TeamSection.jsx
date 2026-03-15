import React, { useState } from "react";
import ProfileCardIcon from "../../components/svg/ProfileCardIcon";
import { Button, Container } from "../../components/ui";
import LinkedinIcon from "../../components/svg/LinkedinIcon";
import MailIcon from "../../components/svg/MailIcon";
import Founder from "../../assets/Founder.svg";
import Sunil from "../../assets/sunil-simar.webp";

const TeamSection = () => {
  const [flippedStates, setFlippedStates] = useState({});

  const teamMembers = [
    {
      name: "Founder & CEO",
      title: "Finance & Technology Expert",
      description:
        "Leading the vision for global financial infrastructure with 15+ years of industry experience.",
      image: Founder,
      linkedin: "#",
      email: "#",
      bio: "John has over 15 years of experience in fintech, having previously led product teams at major financial institutions. He holds an MBA from Stanford and is passionate about democratizing access to financial infrastructure.",
      expertise: [
        "Strategic Leadership",
        "Financial Innovation",
        "Global Expansion",
        "Partnership Development",
      ],
    },
    {
      name: "Founding Engineer",
      title: "Platform Architecture & Blockchain Expertise",
      description:
        "Architecting scalable solutions with deep expertise in blockchain and financial systems.",
      image: Sunil,
      linkedin: "#",
      email: "#",
      bio: "Sarah is a seasoned engineer with 12+ years building scalable financial systems. Previously at Stripe and Coinbase, she specializes in blockchain integration and high-throughput transaction processing.",
      expertise: [
        "Blockchain Architecture",
        "Smart Contracts",
        "System Design",
        "Security",
      ],
    },
  ];

  const handleFlip = (index) => {
    setFlippedStates((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <section className="bg-white py-20 md:py-24">
      <Container>
        {/* Header Section */}
        <div className="flex flex-col items-center text-center">
          {/* Icon + Heading */}
          <div className="flex items-center justify-center h-[56px]">
            <ProfileCardIcon className="w-14 h-14" />
            <h2 className="section-hero-heading text-[#0F172B]">
              Our Leadership Team
            </h2>
          </div>

          {/* Subtitle */}
          <p className="section-subtitle">
            Led by experienced professionals from leading fintech institutions
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-14">
          {teamMembers.map((member, index) => (
            <div key={index} className="relative h-[650px] md:h-[550px] perspective-1000">
              {/* Flip Card Container */}
              <div
                className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${
                  flippedStates[index] ? "rotate-y-180" : ""
                }`}
              >
                {/* Front of card */}
                <div
                  className="absolute w-full h-full backface-hidden bg-white border border-[#F3F4F6] rounded-2xl shadow-lg p-8"
                  style={{
                    boxShadow:
                      "0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 8px 10px -6px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  {/* Profile Image with Blur Background */}
                  <div className="relative w-48 h-48 mx-auto mb-6">
                    {/* Blur Background */}
                    <div
                      className="absolute inset-0 rounded-full"
                      style={{
                        background:
                          "linear-gradient(180deg, #073F9E 0%, #0B4DB6 100%)",
                        opacity: 0.2,
                        filter: "blur(24px)",
                      }}
                    />
                    {/* Image Container */}
                    <div className="relative w-48 h-48 rounded-full border-4 border-white shadow-lg overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-[#073F9E] mb-1">
                      {member.name}
                    </h3>
                    <p className="font-medium text-[#4A5565] mb-3">
                      {member.title}
                    </p>
                    <p className="text-[#4A5565] mb-6 max-w-sm mx-auto">
                      {member.description}
                    </p>

                    {/* Social Links */}
                    <div className="flex justify-center gap-3 mb-4">
                      {/* LinkedIn */}
                      <a
                        href={member.linkedin}
                        className="w-12 h-12 bg-[#0A66C2] rounded-full shadow-lg hover:opacity-90 transition-opacity flex items-center justify-center"
                        style={{
                          boxShadow:
                            "0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -4px rgba(0, 0, 0, 0.1)",
                        }}
                      >
                        <LinkedinIcon className="w-5 h-5 text-white" />
                      </a>

                      {/* Email */}
                      <a
                        href={`mailto:${member.email}`}
                        className="w-12 h-12 rounded-full shadow-lg hover:opacity-90 transition-opacity flex items-center justify-center"
                        style={{
                          background:
                            "linear-gradient(180deg, #EA4335 0%, #FBBC04 100%)",
                          boxShadow:
                            "0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -4px rgba(0, 0, 0, 0.1)",
                        }}
                      >
                        <MailIcon className="w-5 h-5 text-white" />
                      </a>
                    </div>

                    {/* Read Bio Button */}
                    <Button
                      variant="primary"
                      size="md"
                      shimmer
                      className="w-4/5"
                      onClick={() => handleFlip(index)}
                    >
                      Read Bio
                    </Button>
                  </div>
                </div>

                {/* Back of card */}
                <div
                  className="absolute w-full h-full backface-hidden rotate-y-180 bg-white border border-[#F3F4F6] rounded-2xl shadow-lg p-8 overflow-y-auto"
                  style={{
                    boxShadow:
                      "0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 8px 10px -6px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <div className="flex flex-col h-full">
                    {/* Profile Image on Back (smaller version) */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 rounded-full border-2 border-white shadow-lg overflow-hidden flex-shrink-0">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[#073F9E]">
                          {member.name}
                        </h3>
                        <p className="text-sm text-[#4A5565]">{member.title}</p>
                      </div>
                    </div>

                    {/* Full Bio */}
                    <div className="flex-1">
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-[#073F9E] mb-3">
                          Biography
                        </h4>
                        <p className="text-[#4A5565] leading-relaxed">
                          {member.bio}
                        </p>
                      </div>

                      {/* Areas of Expertise */}
                      <div>
                        <h4 className="text-lg font-semibold text-[#073F9E] mb-3">
                          Areas of Expertise
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {member.expertise.map((skill, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 bg-[#073F9E]/10 text-[#073F9E] rounded-full text-sm"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Back Button */}
                    <Button
                      variant="outline"
                      size="md"
                      className="w-4/5 mx-auto mt-6"
                      onClick={() => handleFlip(index)}
                    >
                      Back to Profile
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>

      {/* Add these styles to your global CSS or in a style tag */}
      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </section>
  );
};

export default TeamSection;
