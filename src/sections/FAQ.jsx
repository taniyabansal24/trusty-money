import React, { useState } from "react";
import { Container } from "../components/ui";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "../utils/animations";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is Trusty Money and what services do they provide?",
      answer:
        "Trusty Money is a cross-border payment platform enabling businesses to receive international payments. We provide services such as currency conversions, local collections, remittances, invoicing solutions. We are expanding to import payments, credit services. Stay tuned for exciting product launches!",
    },
    {
      question: "Who can use Trusty Money's services?",
      answer:
        "We are currently live for export businesses of all size and are soon launching our services for freelancers.",
    },
    {
      question: "How much does Trusty Money cost?",
      answer: `
Simple, transparent pricing with no hidden fees:

- Platform fee: 0.99% with $3 minimum per transaction
- Zero FX markup – you get live exchange rates
- No extra fees for local collections in supported currencies`,
    },
    {
      question: "Which currencies do you support?",
      answer:
        "We are currently supporting USD, CAD, EUR, GBP, SGD. We will expand to 150+ countries soon.",
    },
    {
      question: "What documents are required to open a business account?",
      answer: `
Quick 3-step process:

- Sign up online with basic company details
- Digital KYC - upload company registration, bank statements, address proof
- Go live - typically approved within 2-3 business days`,
    },
    {
      question: "How secure is Trusty Money?",
      answer: `
Bank-grade security you can trust:

- RBI regulated - we work with Reserve Bank approved financial institutions
- 100% compliance with Indian regulations and international standards
- Encrypted transactions with enterprise-grade security protocols
- Real-time monitoring for fraud prevention and AML compliance

Every transaction is safe, compliant, and fully tracked.`,
    },
    {
      question: "How do exchange rates work?",
      answer: `
Complete transparency, no surprises:

- Live market rates updated in real-time
- Zero FX markup - you see exactly what you get
- Rate lock - the rate you see is the rate you receive
- Full transparency - no hidden FX fees like traditional providers`,
    },
    {
      question: "Can I use Trusty Money for invoicing?",
      answer: `
Yes! Our smart invoicing system:

- Generate professional invoices with your branding
- Send automatically to your international clients
- Track payment status in real-time on your dashboard
- ERP integration - syncs directly with Tally/Zoho`,
    },
    {
      question: "Can I set up recurring payments?",
      answer:
        "Yes, Trusty Money's platform provides the option to set up recurring payments for regular invoices. This is particularly useful for invoices that need to be paid on a consistent basis, such as monthly or ongoing payments. With Trusty Money's recurring payment feature, you can schedule these payments in advance, and the platform will handle the generation of invoices and processing of transactions according to the specified schedule. This not only streamlines your invoicing process but also ensures that you receive timely and hassle-free payments from your clients.",
    },
    {
      question: "How do I track my payments?",
      answer: `
Complete visibility and control:

- Real-time dashboard showing all payment statuses
- Instant notifications via email and whatsapp
- Transaction history with detailed records
- ERP sync - updates automatically in your accounting system
- Alerts for payments received`,
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Container className="">
      {/* Header */}
      <div className="text-center mb-12">
        <motion.h1
          variants={staggerItem}
          className="section-hero-heading text-gray-900"
        >
          Frequently{" "}
          <span className="gradient-text relative">Asked Questions</span>
        </motion.h1>

        <p className="section-subtitle">
          Everything you need to know about Trusty Money
        </p>
      </div>

      {/* FAQ Items */}
      <div className="max-w-4xl mt-20 mx-auto h-[55vh] overflow-y-scroll">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="mb-4 bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden"
          >
            {/* Question */}
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50"
            >
              <span className="text-gray-900 text-body">{faq.question}</span>
              {/* Plus/Minus Icon */}
              <span className="text-blue-900 text-xl font-light ml-4">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>

            {/* Answer */}
            {openIndex === index && (
              <div className="px-6 pb-6 light-bg">
                <p className="text-mute pt-4 border-t border-gray-200 whitespace-pre-line">
                  {faq.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </Container>
  );
};

export default FAQ;
