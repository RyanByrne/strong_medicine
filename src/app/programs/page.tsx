import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Health Transformation Programs - STRONGMedicine',
  description: 'Explore our comprehensive functional health programs designed to transform your wellness journey through personalized care and evidence-based protocols.',
}

export default function ProgramsPage() {
  const programs = [
    {
      title: '3-Month Transformation',
      slug: '3-month-transformation',
      duration: '3 Months',
      price: '$1,497',
      originalPrice: '$1,997',
      description: 'Perfect for busy professionals ready to reclaim their energy and feel like themselves again. Get to the root of what\'s been holding you back.',
      features: [
        'Complete health & symptom assessment',
        'Advanced functional lab testing',
        'Custom nutrition & supplement protocol',
        'Weekly 1-on-1 coaching calls (12 total)',
        'SIT practice library & training',
        'Lab results interpretation & optimization',
        'Direct messaging support',
        '30-day money-back guarantee',
      ],
      highlighted: true,
      badge: 'Most Popular',
      icon: '🔄'
    },
    {
      title: '12-Month Total Renewal',
      slug: '12-month-total-renewal',
      duration: '12 Months',
      price: '$4,997',
      originalPrice: '$7,997',
      description: 'For complex health challenges or those who want the deepest level of support. Complete transformation of body, mind, and energy.',
      features: [
        'Everything in 3-Month Transformation',
        'Expanded lab panels & retesting',
        'Bi-weekly coaching calls (24 total)',
        'Advanced protocols for complex cases',
        'Hormone & gut optimization',
        'Stress resilience training',
        'Sleep & energy optimization',
        '24/7 priority support',
        'Family consultation included',
      ],
      highlighted: false,
      badge: 'Best Value',
      icon: '🚀'
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative section-padding gradient-bg overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-primary-400/20" />
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full translate-x-48 -translate-y-48 floating-element" />
        <div className="absolute bottom-0 left-0 w-128 h-128 bg-primary-300/10 rounded-full -translate-x-64 translate-y-64 animate-pulse-soft" />
        
        <div className="container-custom relative">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-white/20 text-white font-semibold rounded-full text-sm mb-6 animate-pulse-soft">
              💪 Transformation Programs
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Stop Managing Symptoms.
              <span className="block text-accent">Start Actually Healing.</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed mb-8">
              Two comprehensive programs. Same proven methodology. The only difference? Time and depth of support. Both get you feeling amazing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#programs" className="btn-primary text-lg px-8 py-4">
                View Programs
              </a>
              <a href="#comparison" className="btn-secondary text-lg px-8 py-4 bg-white/10 text-white border-white/20 hover:bg-white/20">
                Compare Options
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section id="programs" className="section-padding gradient-bg-light relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 via-transparent to-primary-100/20" />
        </div>
        
        <div className="container-custom relative">
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-2 bg-accent/15 text-accent font-semibold rounded-full text-sm mb-6">
              🎯 Our Programs
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Choose Your
              <span className="block text-gradient">Health Transformation</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Both programs include personalized functional medicine protocols, but differ in duration and depth of support.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {programs.map((program, index) => (
              <div
                key={program.slug}
                className={`relative group hover:-translate-y-3 transition-all duration-500 ${
                  program.highlighted ? '' : ''
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Badge */}
                {program.badge && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20">
                    <span className={`px-4 py-2 rounded-full text-sm font-semibold text-white shadow-lg ${
                      program.highlighted ? 'bg-accent' : 'bg-primary-600'
                    }`}>
                      {program.badge}
                    </span>
                  </div>
                )}

                {/* Card content */}
                <div className={`card overflow-hidden ${
                  program.highlighted ? 'border-2 border-accent shadow-2xl' : ''
                }`}>
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shimmer transition-opacity duration-500" />
                  
                  <div className="relative z-10 p-8 pt-6">
                  {/* Icon and title */}
                  <div className="text-center mb-8">
                    <div className="text-6xl mb-4">{program.icon}</div>
                    <h3 className="font-heading text-2xl font-bold text-gray-900 mb-2">
                      {program.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      {program.description}
                    </p>
                    
                    {/* Pricing */}
                    <div className="flex items-center justify-center gap-4 mb-6">
                      <div className="text-center">
                        <div className="flex items-center justify-center gap-2">
                          <span className="text-4xl font-bold text-accent">
                            {program.price}
                          </span>
                          {program.originalPrice && (
                            <span className="text-lg text-gray-500 line-through">
                              {program.originalPrice}
                            </span>
                          )}
                        </div>
                        <div className="text-sm text-gray-600">{program.duration} • Save ${parseInt(program.originalPrice?.replace('$', '').replace(',', '') || '0') - parseInt(program.price.replace('$', '').replace(',', ''))}</div>
                      </div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-4 mb-8">
                    {program.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-6 h-6 bg-accent/15 rounded-full flex items-center justify-center mt-0.5">
                          <svg className="w-3 h-3 text-accent" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-gray-700 leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <div className="text-center">
                    <Link
                      href="/waitlist"
                      className={`btn-primary w-full group-hover:scale-105 transition-transform duration-300 ${
                        program.highlighted 
                          ? 'bg-gradient-to-r from-accent to-primary-600 hover:from-accent/90 hover:to-primary-700' 
                          : ''
                      }`}
                    >
                      Join Waitlist
                    </Link>
                    <p className="text-xs text-gray-500 mt-2">30-day money-back guarantee</p>
                  </div>
                </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section id="comparison" className="section-padding bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-3">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 via-transparent to-accent/5" />
        </div>
        
        <div className="container-custom relative">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-accent/15 text-accent font-semibold rounded-full text-sm mb-6">
              🤔 Decision Guide
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Which Program is Right for You?
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="card group hover:shadow-xl transition-all duration-300">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary-600 rounded-2xl mx-auto mb-4 flex items-center justify-center text-white text-2xl">
                  🔄
                </div>
                <h3 className="text-xl font-heading font-bold text-gray-900 mb-2">Choose the 3-Month Reset if you:</h3>
              </div>
              <ul className="space-y-4 text-gray-700">
                {[
                  'Want to jumpstart your health journey',
                  'Need to address specific health concerns',
                  'Prefer a shorter commitment to test the approach',
                  'Want to establish healthy habits quickly',
                  'Have a moderate budget for health investment'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 bg-accent/15 rounded-full flex items-center justify-center mt-1">
                      <svg className="w-3 h-3 text-accent" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card group hover:shadow-xl transition-all duration-300">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl mx-auto mb-4 flex items-center justify-center text-white text-2xl">
                  🚀
                </div>
                <h3 className="text-xl font-heading font-bold text-gray-900 mb-2">Choose the 12-Month Plan if you:</h3>
              </div>
              <ul className="space-y-4 text-gray-700">
                {[
                  'Have complex or chronic health issues',
                  'Want comprehensive support and accountability',
                  'Are committed to long-term transformation',
                  'Want the best value and most resources',
                  'Prefer deeper, more sustained health changes'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 bg-primary-500/15 rounded-full flex items-center justify-center mt-1">
                      <svg className="w-3 h-3 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding gradient-bg-light">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-accent/15 text-accent font-semibold rounded-full text-sm mb-6">
              ❓ FAQ
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to know about our transformation programs.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: 'What\'s included in the initial assessment?',
                answer: 'The initial assessment includes a comprehensive health history review, lifestyle evaluation, nutritional analysis, and recommendations for functional lab testing based on your specific needs. We also assess your stress levels, sleep patterns, and current symptoms to create a personalized treatment plan.',
              },
              {
                question: 'Can I upgrade from the 3-month to 12-month program?',
                answer: 'Absolutely! If you start with the 3-month program and want to continue, you can upgrade to the 12-month program with a credit for what you\'ve already paid. Many clients find such success with the initial program that they want to continue their transformation journey.',
              },
              {
                question: 'Are lab tests included in the program price?',
                answer: 'Lab test interpretations and recommendations are included in both programs, but the actual lab costs are separate. We\'ll help you find the most cost-effective testing options, including using insurance when possible. Most comprehensive panels range from $200-800.',
              },
              {
                question: 'What if I need to pause my program?',
                answer: 'Life happens! Both programs allow for one pause of up to 30 days if needed for medical or personal reasons. We want to ensure you get the full value from your investment when you\'re ready to fully participate.',
              },
              {
                question: 'Do you offer payment plans?',
                answer: 'Yes! We offer flexible payment plans for both programs. The 3-month program can be split into 3 monthly payments, and the 12-month program can be divided into 6 or 12 monthly payments to make it more accessible.',
              },
              {
                question: 'What makes your approach different?',
                answer: 'Unlike conventional medicine that treats symptoms, we use functional medicine to identify and address root causes. Our approach combines advanced lab testing, personalized nutrition, lifestyle modifications, and ongoing support to create lasting health transformations rather than temporary fixes.',
              },
            ].map((faq, index) => (
              <div key={index} className="card group hover:shadow-lg transition-all duration-300">
                <h3 className="text-lg font-heading font-bold text-gray-900 mb-3 group-hover:text-accent transition-colors duration-300">
                  {faq.question}
                </h3>
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding gradient-bg relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-primary-400/20" />
        </div>
        
        <div className="container-custom relative">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform
              <span className="block text-accent">Your Health?</span>
            </h2>
            <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed">
              Join our waitlist to be the first to know when enrollment opens and receive exclusive early-bird pricing.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <a href="/waitlist" className="btn-primary text-lg px-10 py-4">
                Join the Waitlist
              </a>
              <a href="/about" className="btn-secondary text-lg px-10 py-4 bg-white/10 text-white border-white/20 hover:bg-white/20">
                Meet Our Team
              </a>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-2">💬 Free Consultation</div>
                <div className="text-gray-300">15-minute discovery call</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-2">💰 Payment Plans</div>
                <div className="text-gray-300">Flexible financing available</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-2">🔒 30-Day Guarantee</div>
                <div className="text-gray-300">Risk-free investment</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}