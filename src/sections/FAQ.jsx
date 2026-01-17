import React, { useState } from 'react'
import { Container } from '../components/ui'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: "How is Trusty Money different from a payment gateway?",
      answer: "Trusty Money is a complete financial infrastructure platform, not just a payment gateway. We provide end-to-end solutions including multi-currency accounts, real-time FX rates, automated compliance, and audit-ready documentation."
    },
    {
      question: "Are there any hidden FX fees?",
      answer: "No hidden fees. We provide complete transparency with real-time FX rates at interbank levels plus a small, flat fee. All costs are displayed upfront before any transaction is processed."
    },
    {
      question: "How do you handle compliance and regulations?",
      answer: "We have built-in compliance with automated AML screening, sanctions checks, and KYC verification. Our platform is designed to meet global regulations including GDPR, PSD2, and SOC 2 standards."
    },
    {
      question: "Can products be used independently?",
      answer: "Yes, all our products are modular. You can use just our multi-currency accounts, only our payment processing, or our compliance tools separately. Many clients start with one product and add others as their needs grow."
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <Container className="py-12 mt-32 pt-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-blue-900 text-lg font-normal mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600 text-lg">
          Everything you need to know about Trusty Money
        </p>
      </div>

      {/* FAQ Items */}
      <div className="max-w-5xl mt-20 mx-auto">
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
              <span className="text-gray-900 font-normal text-base">
                {faq.question}
              </span>
              {/* Plus/Minus Icon */}
              <span className="text-blue-900 text-xl font-light ml-4">
                {openIndex === index ? '−' : '+'}
              </span>
            </button>

            {/* Answer */}
            {openIndex === index && (
              <div className="px-6 pb-6">
                <p className="text-gray-600 text-sm leading-relaxed  pt-4 border-t border-gray-200">
                  {faq.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </Container>
  )
}

export default FAQ