'use client'

import { useState } from 'react'

export default function FAQ() {
  const [openItem, setOpenItem] = useState<number | null>(0)

  const faqs = [
    {
      question: "I've tried everything. How is this different?",
      answer: "Unlike quick fixes or one-size-fits-all approaches, we use advanced testing to uncover YOUR specific imbalances. We don't guess - we test. Then we create a personalized protocol that addresses your unique root causes, not just symptoms. Plus, you get weekly support to ensure it actually works."
    },
    {
      question: "How quickly will I start feeling better?",
      answer: "Most people notice improvements in energy and mental clarity within 2-3 weeks. Better sleep often comes first, followed by reduced brain fog and steadier energy. By week 6-8, you'll likely see significant changes in your main symptoms. We track your progress weekly to ensure you're on the right path."
    },
    {
      question: "What exactly is the SIT method?",
      answer: "SIT (Stress, Inflammation & Trauma-informed) is our proprietary mind-body protocol. It combines specific breathing techniques, guided meditations, and nervous system regulation practices. Think of it as meditation that actually works - designed specifically to reduce inflammation, improve sleep, and calm anxiety. Takes just 10-15 minutes daily."
    },
    {
      question: "Is this only for people with serious health issues?",
      answer: "Not at all. While we help people with chronic fatigue, digestive issues, hormonal imbalances, and autoimmune conditions, we also work with high performers who want to optimize their health. If you're tired of feeling 'just okay' and want to feel truly vibrant, this program is for you."
    },
    {
      question: "What kind of testing do you do?",
      answer: "We run comprehensive panels that your regular doctor probably hasn't ordered: advanced hormone testing, gut microbiome analysis, food sensitivity testing, nutrient levels, inflammation markers, and metabolic function. These tests reveal hidden imbalances that standard labs miss. Testing is customized based on your symptoms."
    },
    {
      question: "Does insurance cover this?",
      answer: "Functional medicine typically isn't covered by insurance, but we provide superbills you can submit for potential reimbursement. Many clients use HSA/FSA funds. We also offer payment plans to make this investment in your health manageable. Most people find it costs less than continuing to feel terrible."
    },
    {
      question: "I don't live nearby. Can I still work with you?",
      answer: "Absolutely! Our program is 100% virtual, so you can transform your health from anywhere. We ship test kits to your door, conduct video consultations, and provide support through our app. Many of our biggest success stories have never set foot in an office. Distance is no barrier to feeling better."
    },
    {
      question: "What happens after the 3 months?",
      answer: "By month 3, you'll have the knowledge and tools to maintain your results. We provide a detailed maintenance plan and teach you how to listen to your body. Many clients feel so good they continue with quarterly check-ins or our advanced optimization program, but it's not required. Our goal is to empower you, not create dependency."
    }
  ]

  return (
    <section className="section-padding bg-cream-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent font-medium rounded-full text-sm mb-6">
            ❓ Common Questions
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked
            <span className="block text-gradient">Questions</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Get answers to the most common questions about our functional medicine approach and programs.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="card">
                <button
                  className="w-full text-left flex items-center justify-between py-2"
                  onClick={() => setOpenItem(openItem === index ? null : index)}
                >
                  <h3 className="font-heading text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <div className={`flex-shrink-0 w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center transition-transform duration-200 ${
                    openItem === index ? 'rotate-180' : ''
                  }`}>
                    <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                
                {openItem === index && (
                  <div className="mt-4 pb-2">
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="text-center mt-12 p-8 bg-white rounded-2xl shadow-sm">
            <h3 className="font-heading text-xl font-bold text-gray-900 mb-4">
              Still have questions?
            </h3>
            <p className="text-gray-700 mb-6">
              Schedule a free 15-minute consultation to discuss your specific health goals and see if our program is right for you.
            </p>
            <button className="btn-primary">
              Schedule Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}