import React from "react";
import { Container } from "../components/ui";
import { motion } from "framer-motion";
import Quote from "../components/svg/Quote";
import { staggerContainer, staggerItem } from "../utils/animations";

const TestimonialSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "CFO",
      company: "TechFlow Global",
      quote:
        "Trusty Money removed all the hidden FX complexity and saved our team 20+ hours per week on reconciliation.",
      flipQuote:
        "Trusty Money removed all the hidden FX complexity from our international payments. Everything is transparent and compliant.",
      imageColor: "bg-blue-100",
      initials: "SC",
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      role: "Head of Finance",
      company: "Horizon Ventures",
      quote:
        "Real-time FX rates and instant settlements have transformed how we manage our international operations.",
      flipQuote:
        "The best cross-border infrastructure we've used. Security and compliance are built-in, not an afterthought.",
      imageColor: "bg-green-100",
      initials: "MR",
    },
    {
      id: 3,
      name: "Emma Thompson",
      role: "VP Operations",
      company: "CrossLink Commerce",
      quote:
        "Finally, a platform that scales with our global operations while maintaining strict compliance standards.",
      flipQuote:
        "Trusty Money removed all the hidden FX complexity from our international payments. Everything is transparent and compliant.",
      imageColor: "bg-purple-100",
      initials: "ET",
    },
    {
      id: 4,
      name: "David Park",
      role: "Finance Director",
      company: "Global Dynamics",
      quote:
        "Implementation was seamless. The audit-ready documentation alone justifies the investment.",
      flipQuote:
        "Implementation was seamless. The audit-ready documentation saved us countless hours during our compliance review.",
      imageColor: "bg-yellow-100",
      initials: "DP",
    },
    {
      id: 5,
      name: "Lisa Anderson",
      role: "Treasury Manager",
      company: "Infinite Solutions",
      quote:
        "Real-time FX rates and instant settlements have transformed our cash flow management.",
      flipQuote:
        "Trusty Money removed all the hidden FX complexity from our international payments. Everything is transparent and compliant.",
      imageColor: "bg-pink-100",
      initials: "LA",
    },
    {
      id: 6,
      name: "James Wilson",
      role: "COO",
      company: "Nexus Trade",
      quote:
        "The platform's reliability and transparency have earned our full trust for all international payments.",
      flipQuote:
        "Trusty Money removed all the hidden FX complexity from our international payments. Everything is transparent and compliant.",
      imageColor: "bg-indigo-100",
      initials: "JW",
    },
  ];

  return (
    <Container className="">
      {/* Header Section */}
      <div className="text-center my-12">
        <motion.h1
          variants={staggerItem}
          className="section-hero-heading text-gray-900"
        >
          Trusted by{" "}
          <span className="gradient-text relative">
            Finance Teams Worldwide
          </span>
        </motion.h1>
        <p className="section-subtitle text-gray-600 max-w-md mx-auto">
          Leading companies rely on Trusty Money for their cross-border payments
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="flip-card-container h-[220px]">
            {/* Flip Card Container */}
            <div className="flip-card-inner">
              {/* Front Side - Regular Testimonial Card */}
              <div className="flip-card-front">
                {/* User Info */}
                <div className="flex items-center gap-4 text-justify ">
                  {/* Avatar */}
                  <div className="relative">
                    <div
                      className={`w-16 h-16 rounded-full ${testimonial.imageColor} flex items-center justify-center`}
                    >
                      <span className="text-gray-700 font-semibold text-lg">
                        {testimonial.initials}
                      </span>
                    </div>
                   
                  </div>

                  {/* User Details */}
                  <div>
                    <h3 className="text-body font-medium  text-gray-900 text-base">
                      {testimonial.name}
                    </h3>
                    <p className="text-muted">{testimonial.role}</p>
                    <p className="text-gray-400 text-sm">
                      {testimonial.company}
                    </p>
                  </div>
                </div>

                {/* Testimonial Content */}
                {/* Testimonial Content */}
                <div className="mt-6 flex-grow flex items-center justify-center">
                  {/* Quote */}
                  <p className="feature-description text-gray-600 text-center max-w-[300px]">
                    "{testimonial.quote}"
                  </p>
                </div>
              </div>

              {/* Back Side - Blue Quote Card (Exact Figma Design) */}
              <div className="flip-card-back">
                {/* Quote Icon */}
                <div className="mb-2">
                  <Quote className="w-10 h-10 text-white" />
                </div>

                {/* Full Quote - Exact Figma Styling */}
                <div className="quote-text feature-description">
                  <p>"{testimonial.flipQuote}"</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CSS Styles for Flip Card */}
      <style jsx>{`
        .flip-card-container {
          perspective: 1000px;
          cursor: pointer;
        }

        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          text-align: center;
          transition: transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          transform-style: preserve-3d;
          border-radius: 16px;
        }

        .flip-card-container:hover .flip-card-inner {
          transform: rotateY(180deg);
        }

        .flip-card-front,
        .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          border-radius: 16px;
          padding: 1.5rem;
        }

        .flip-card-front {
          background: #f2f7ff;
          box-shadow:
            0px 1px 3px rgba(0, 0, 0, 0.1),
            0px 1px 2px -1px rgba(0, 0, 0, 0.1);
          border: 1px solid #e5e7eb;
          display: flex;
          flex-direction: column;
        }

        .flip-card-back {
          background: #82b2ff;
          box-shadow:
            0px 1px 3px rgba(0, 0, 0, 0.1),
            0px 1px 2px -1px rgba(0, 0, 0, 0.1);
          border: 1px solid #e5e7eb;
          transform: rotateY(180deg);
          display: flex;
          flex-direction: column;
          padding: 2rem 1.5rem;
        }

        /* Quote Text Styling - Exact Figma Design */
        .quote-text {
          width: 100%;
        }

        .quote-text p {
          font-weight: 600;

          line-height: 24px;
          text-align: center;
          color: #ffffff;
          width: 282px;
          margin: 0 auto;
        }
      `}</style>
    </Container>
  );
};

export default TestimonialSection;
