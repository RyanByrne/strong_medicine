import type { Metadata } from 'next'
import WaitlistForm from '@/components/forms/WaitlistForm'

export const metadata: Metadata = {
  title: 'Start Your Transformation - STRONGMedicine',
  description: 'Ready to feel amazing? Join our transformation program waitlist and be the first to reclaim your energy, clarity, and vitality.',
}

export default function WaitlistPage() {
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
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left column - Content */}
            <div className="text-left">
              <span className="inline-block px-4 py-2 bg-white/20 text-white font-semibold rounded-full text-sm mb-6 animate-pulse-soft">
                🌟 Your Transformation Awaits
              </span>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Ready to Feel
                <span className="block text-accent">Amazing Again?</span>
              </h1>
              <p className="text-xl text-gray-200 max-w-xl leading-relaxed mb-8">
                Join our exclusive waitlist to be the first to access our proven 3-month transformation program. 
                No more feeling exhausted, dismissed, or stuck. Your vibrant life is waiting.
              </p>
              
              {/* Quick stats */}
              <div className="grid grid-cols-3 gap-6 mb-8 pt-6 border-t border-white/20">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">30 Days</div>
                  <div className="text-xs text-gray-300">To First Results</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">91%</div>
                  <div className="text-xs text-gray-300">Feel Better</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">24/7</div>
                  <div className="text-xs text-gray-300">Support</div>
                </div>
              </div>
            </div>
            
            {/* Right column - Visual */}
            <div className="relative lg:pl-8">
              <div className="relative">
                <div className="aspect-square bg-white/10 rounded-3xl p-8 glass-effect-dark">
                  <div className="h-full w-full bg-gradient-to-br from-accent/20 to-primary-400/20 rounded-2xl flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="w-24 h-24 bg-accent rounded-full mx-auto mb-6 flex items-center justify-center">
                        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-heading font-bold mb-2">Join 1,247 People</h3>
                      <p className="text-gray-200">Who&apos;ve transformed their health with us</p>
                    </div>
                  </div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent rounded-2xl opacity-80 animate-bounce"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary-400 rounded-xl opacity-60 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="section-padding gradient-bg-light relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 via-transparent to-primary-100/20" />
        </div>
        
        <div className="container-custom relative">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 bg-accent/15 text-accent font-semibold rounded-full text-sm mb-6">
                🚀 Reserve Your Spot
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Get Priority Access to Our
                <span className="block text-gradient">Transformation Program</span>
              </h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                Join our exclusive waitlist and be the first to know when enrollment opens. 
                Limited spots available each month.
              </p>
            </div>

            <div className="card max-w-2xl mx-auto relative overflow-hidden">
              {/* Card shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 hover:opacity-100 animate-shimmer transition-opacity duration-500" />
              
              <div className="relative z-10">
                <WaitlistForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-3">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 via-transparent to-accent/5" />
        </div>
        
        <div className="container-custom relative">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-accent/15 text-accent font-semibold rounded-full text-sm mb-6">
              💎 Exclusive Benefits
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Join the Waitlist?
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Get exclusive access, special pricing, and valuable resources while you wait.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                title: "First Access",
                description: "Be the first to enroll when spots open. No waiting, no wondering."
              },
              {
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: "Early Bird Pricing",
                description: "Save $500 with exclusive waitlist member pricing."
              },
              {
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                ),
                title: "Free Resources",
                description: "Get our Energy Recovery Guide + SIT meditation starter pack."
              },
              {
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                ),
                title: "Direct Updates",
                description: "Get insider updates on new breakthroughs and program improvements."
              }
            ].map((benefit, index) => (
              <div 
                key={benefit.title} 
                className="card text-center group hover:-translate-y-3 transition-all duration-500 relative overflow-hidden"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shimmer transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-accent to-primary-600 text-white rounded-2xl mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-heading font-bold text-gray-900 mb-4 group-hover:text-accent transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="section-padding gradient-bg-light relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-bl from-primary-100/30 via-transparent to-accent/10" />
        </div>
        
        <div className="container-custom relative">
          <div className="card max-w-4xl mx-auto text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-accent/10 to-accent/5 blur-3xl opacity-50" />
            <div className="relative">
              <h3 className="font-heading text-2xl font-bold text-gray-900 mb-6">What People Are Saying</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl mb-3">⭐⭐⭐⭐⭐</div>
                  <p className="text-gray-700 italic mb-3">&ldquo;Finally, doctors who actually listen and find real answers.&rdquo;</p>
                  <p className="text-sm text-gray-600">- Sarah M.</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-3">⭐⭐⭐⭐⭐</div>
                  <p className="text-gray-700 italic mb-3">&ldquo;I have my energy back for the first time in years.&rdquo;</p>
                  <p className="text-sm text-gray-600">- Michael R.</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-3">⭐⭐⭐⭐⭐</div>
                  <p className="text-gray-700 italic mb-3">&ldquo;Worth every penny. I feel like myself again.&rdquo;</p>
                  <p className="text-sm text-gray-600">- Jennifer L.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-accent/15 text-accent font-semibold rounded-full text-sm mb-6">
              ❓ Common Questions
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Waitlist Questions
            </h2>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: 'How does the waitlist work?',
                answer: 'Join today and get first access when enrollment opens (usually monthly). We limit each cohort to ensure personalized attention, so waitlist members get priority.'
              },
              {
                question: 'Is there any cost to join?',
                answer: 'Joining the waitlist is completely free. You only pay if you choose to enroll when spots become available.'
              },
              {
                question: 'When does enrollment typically open?',
                answer: 'We open new cohorts monthly, but spots fill quickly. Waitlist members get 48-hour early access before we open to the public.'
              },
              {
                question: 'What if I&apos;m not ready when my spot comes up?',
                answer: 'No problem! You can defer to the next available cohort. We want you to start when you&apos;re truly ready to transform.'
              },
              {
                question: 'Do you really have a 91% success rate?',
                answer: 'Yes! 91% of our clients report significant improvements in their main symptoms within 3 months. We track this carefully because your results matter to us.'
              }
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

      {/* Final CTA */}
      <section className="section-padding gradient-bg relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-primary-400/20" />
        </div>
        
        <div className="container-custom relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
              Your Best Life is Waiting.
              <span className="block text-accent">Don&apos;t Wait Any Longer.</span>
            </h2>
            <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
              Every day you delay is another day of feeling less than amazing. 
              Take the first step toward the energy and vitality you deserve.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-2">🎯</div>
                <div className="text-gray-300 text-sm">Join 1,247 people who&apos;ve transformed their health</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-2">⚡</div>
                <div className="text-gray-300 text-sm">See results in as little as 30 days</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-2">💝</div>
                <div className="text-gray-300 text-sm">30-day money-back guarantee</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}