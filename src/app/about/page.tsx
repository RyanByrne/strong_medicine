import type { Metadata } from 'next'
import Image from 'next/image'
import { AssociationLogo } from '@/components/ui/OptimizedImage'

export const metadata: Metadata = {
  title: 'About STRONGMedicine - Functional Medicine Experts',
  description: 'Meet our team of board-certified functional medicine physicians dedicated to addressing root causes and transforming lives through personalized healthcare.',
}

export default function AboutPage() {
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
            <div className="text-left">
              <span className="inline-block px-4 py-2 bg-white/20 text-white font-semibold rounded-full text-sm mb-6 animate-pulse-soft">
                🏥 Board-Certified Experts
              </span>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Transforming Healthcare
                <span className="block text-accent">One Patient at a Time</span>
              </h1>
              <p className="text-xl text-gray-200 max-w-2xl leading-relaxed mb-8">
                Meet the dedicated team of functional medicine physicians, researchers, and wellness experts committed to addressing root causes and restoring optimal health.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#team" className="btn-primary text-lg px-8 py-4">
                  Meet Our Team
                </a>
                <a href="#credentials" className="btn-secondary text-lg px-8 py-4 bg-white/10 text-white border-white/20 hover:bg-white/20">
                  View Credentials
                </a>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-white/10 rounded-3xl p-8 glass-effect-dark">
                <div className="h-full w-full bg-gradient-to-br from-accent/20 to-primary-400/20 rounded-2xl flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-32 h-32 bg-accent rounded-full mx-auto mb-8 flex items-center justify-center">
                      <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 2C5.58 2 2 5.58 2 10s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zM9 9V6h2v3h3v2h-3v3H9v-3H6V9h3z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-heading font-bold mb-4">15+ Years Experience</h3>
                    <p className="text-gray-200">Transforming lives through functional medicine</p>
                  </div>
                </div>
              </div>
              
              {/* Floating stats */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent rounded-2xl opacity-80 flex items-center justify-center floating-element">
                <div className="text-center text-white">
                  <div className="text-lg font-bold">1000+</div>
                  <div className="text-xs">Patients</div>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-primary-400 rounded-xl opacity-60 flex items-center justify-center animate-pulse-soft">
                <div className="text-center text-white">
                  <div className="text-sm font-bold">91%</div>
                  <div className="text-xs">Success</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section-padding gradient-bg-light relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 via-transparent to-primary-100/20" />
        </div>
        
        <div className="container-custom relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <span className="inline-block px-4 py-2 bg-accent/15 text-accent font-semibold rounded-full text-sm mb-6 animate-shimmer">
                📖 Our Story
              </span>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                We Know What It&apos;s Like
                <span className="block text-gradient">To Feel Dismissed</span>
              </h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  Our founder, Dr. Sarah Johnson, spent years in the conventional medical system feeling exhausted, brain-fogged, and frustrated. Despite normal lab results, she knew something was wrong.
                </p>
                <p>
                  When functional medicine finally gave her answers and her life back, she realized how many people were struggling just like she had - dismissed, unheard, and desperate for real solutions.
                </p>
                <p>
                  That&apos;s why Strong Medicine exists. We&apos;re the doctors who listen, investigate, and never stop until we find your answers. Because you deserve to feel vibrant, not just &apos;fine.&apos;
                </p>
                <div className="grid grid-cols-2 gap-6 pt-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-accent mb-2">2019</div>
                    <div className="text-sm text-gray-700">Founded</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-accent mb-2">1,247</div>
                    <div className="text-sm text-gray-700">People Thriving</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="aspect-[4/5] bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-2xl border border-gray-100 relative overflow-hidden">
                  {/* Timeline visualization */}
                  <h3 className="font-heading text-xl font-bold text-gray-900 mb-8">Our Journey</h3>
                  
                  {/* Timeline line */}
                  <div className="absolute left-12 top-24 bottom-8 w-0.5 bg-gradient-to-b from-accent to-primary-600"></div>
                  
                  <div className="relative space-y-12 mt-4">
                    <div className="flex items-start gap-4 relative">
                      <div className="relative z-10">
                        <div className="w-8 h-8 bg-accent rounded-full animate-pulse-soft border-4 border-white shadow-lg"></div>
                      </div>
                      <div className="flex-1 bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                        <div className="font-semibold text-gray-900">2015</div>
                        <div className="text-sm text-gray-700">Personal Health Crisis</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4 relative">
                      <div className="relative z-10">
                        <div className="w-8 h-8 bg-primary-500 rounded-full border-4 border-white shadow-lg"></div>
                      </div>
                      <div className="flex-1 bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                        <div className="font-semibold text-gray-900">2017</div>
                        <div className="text-sm text-gray-700">Functional Medicine Training</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4 relative">
                      <div className="relative z-10">
                        <div className="w-8 h-8 bg-accent rounded-full border-4 border-white shadow-lg"></div>
                      </div>
                      <div className="flex-1 bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                        <div className="font-semibold text-gray-900">2019</div>
                        <div className="text-sm text-gray-700">STRONGMedicine Founded</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4 relative">
                      <div className="relative z-10">
                        <div className="w-8 h-8 bg-primary-600 rounded-full floating-element border-4 border-white shadow-lg"></div>
                      </div>
                      <div className="flex-1 bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                        <div className="font-semibold text-gray-900">2024</div>
                        <div className="text-sm text-gray-700">Leading Transformation</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent/20 rounded-full blur-xl"></div>
                  <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary-400/20 rounded-full blur-lg"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-3">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 via-transparent to-accent/5" />
        </div>
        
        <div className="container-custom relative">
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-2 bg-accent/15 text-accent font-semibold rounded-full text-sm mb-6">
              🎯 Our Foundation
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Mission, Vision &
              <span className="block text-gradient">Core Values</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Everything we do is guided by our commitment to transformative, patient-centered care.
            </p>
          </div>

          {/* Mission Statement */}
          <div className="card max-w-4xl mx-auto text-center mb-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-accent/10 to-accent/5 blur-3xl opacity-50" />
            <div className="relative">
              <h3 className="font-heading text-2xl font-bold text-gray-900 mb-6">Our Mission</h3>
              <p className="text-xl text-gray-700 leading-relaxed">
                &ldquo;To revolutionize healthcare by addressing root causes, empowering patients with knowledge, and providing personalized treatment plans that restore optimal health and vitality for life.&rdquo;
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                ),
                title: "Patient-Centered",
                description: "Every decision prioritizes your unique needs, goals, and health journey."
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                ),
                title: "Scientific Excellence",
                description: "Evidence-based protocols backed by cutting-edge research and clinical data."
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                ),
                title: "Holistic Integration",
                description: "Addressing mind, body, and spirit for complete wellness transformation."
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                title: "Empowerment",
                description: "Education and tools to take control of your health for lasting results."
              }
            ].map((value, index) => (
              <div 
                key={value.title} 
                className="card text-center group hover:-translate-y-3 transition-all duration-500 relative overflow-hidden"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shimmer transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-accent to-primary-600 text-white rounded-2xl mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-heading font-bold text-gray-900 mb-4 group-hover:text-accent transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="section-padding gradient-bg-light relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-bl from-primary-100/30 via-transparent to-accent/10" />
        </div>
        
        <div className="container-custom relative">
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-2 bg-accent/15 text-accent font-semibold rounded-full text-sm mb-6">
              👨‍⚕️ Expert Team
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Meet Your Health
              <span className="block text-gradient">Transformation Team</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Board-certified physicians and wellness experts dedicated to your health journey.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Dr. Sarah Johnson */}
            <div className="card group hover:shadow-2xl transition-all duration-500">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="relative">
                  <div className="w-32 h-32 bg-gradient-to-br from-accent to-primary-600 rounded-2xl mx-auto flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <div className="text-white text-4xl font-bold">SJ</div>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-heading text-2xl font-bold text-gray-900 mb-2">Dr. Sarah Johnson</h3>
                  <p className="text-accent font-semibold mb-1">Founder & Lead Practitioner</p>
                  <p className="text-sm text-gray-600 mb-4">MD, IFMCP, Board Certified Internal Medicine</p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Dr. Johnson is a board-certified internal medicine physician and Institute for Functional Medicine Certified Practitioner with over 15 years of experience. She specializes in hormone optimization, autoimmune conditions, and metabolic health.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Johns Hopkins Medical School Graduate
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      IFM Certified Practitioner since 2018
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Published researcher in metabolic health
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Michael Chen */}
            <div className="card group hover:shadow-2xl transition-all duration-500">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="relative">
                  <div className="w-32 h-32 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl mx-auto flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <div className="text-white text-4xl font-bold">MC</div>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-heading text-2xl font-bold text-gray-900 mb-2">Michael Chen</h3>
                  <p className="text-accent font-semibold mb-1">Wellness Coach & Exercise Physiologist</p>
                  <p className="text-sm text-gray-600 mb-4">RN, ACSM-CPT, Certified Health Coach</p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Michael bridges conventional medicine and wellness coaching with expertise in stress management, lifestyle optimization, and behavioral change. He specializes in sustainable habit formation and mind-body wellness.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Registered Nurse with 12+ years experience
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      ACSM Certified Personal Trainer
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Stress management specialist
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional team stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">15+</div>
              <div className="text-gray-600">Years Combined Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">6</div>
              <div className="text-gray-600">Board Certifications</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">1000+</div>
              <div className="text-gray-600">Patients Served</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">50+</div>
              <div className="text-gray-600">Hours Continuing Education/Year</div>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials & Associations */}
      <section id="credentials" className="section-padding bg-white border-t border-gray-100">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-accent/15 text-accent font-semibold rounded-full text-sm mb-6">
              🏆 Credentials & Certifications
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Recognized Excellence in Functional Medicine
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our practitioners maintain the highest standards through continuous education and certification with premier medical organizations.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {[
              "Institute for Functional Medicine",
              "American Board of Internal Medicine", 
              "American College of Lifestyle Medicine",
              "International Coach Federation",
              "American Heart Association",
              "Precision Medicine Institute"
            ].map((association, index) => (
              <div key={association} className="text-center group">
                <div className="w-24 h-20 mx-auto mb-4 bg-white rounded-2xl flex items-center justify-center group-hover:bg-accent/5 transition-all duration-300 shadow-sm group-hover:shadow-md border border-gray-100">
                  <AssociationLogo 
                    name={association} 
                    width={80} 
                    height={40}
                    className="group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xs font-medium text-gray-900 mb-1 leading-tight">
                  {association}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding gradient-bg relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-primary-400/20" />
        </div>
        
        <div className="container-custom relative">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Start Your
              <span className="block text-accent">Health Transformation?</span>
            </h2>
            <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed">
              Schedule a consultation with our team to discover how functional medicine can transform your health and vitality.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <a href="/waitlist" className="btn-primary text-lg px-10 py-4">
                Schedule Consultation
              </a>
              <a href="/programs" className="btn-secondary text-lg px-10 py-4 bg-white/10 text-white border-white/20 hover:bg-white/20">
                Explore Programs
              </a>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-2">📞 (555) 123-4567</div>
                <div className="text-gray-300">Call Us Today</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-2">📧 hello@strongmedicine.com</div>
                <div className="text-gray-300">Send Us An Email</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-2">🕒 Mon-Fri 9AM-6PM</div>
                <div className="text-gray-300">Office Hours</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}