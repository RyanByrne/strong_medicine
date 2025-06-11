import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { client } from '@/lib/sanity.client'
import { SESSIONS_QUERY } from '@/lib/sanity.queries'
import { urlForImage } from '@/lib/sanity.image'

export const metadata: Metadata = {
  title: 'SIT Meditation Library - STRONGMedicine',
  description: 'Explore our library of guided meditation, breathwork, and mindfulness sessions. Stillness, Introspection, and Transformation for your wellness journey.',
}

interface SitSession {
  _id: string
  title: string
  slug: string
  category: string
  description: string
  duration: number
  difficulty?: string
  thumbnail?: any
}

async function getSessions(): Promise<SitSession[]> {
  return client.fetch(SESSIONS_QUERY)
}

export default async function SitLibraryPage() {
  const sessions = await getSessions()

  const categories = [
    { value: 'all', label: 'All Sessions', icon: '🧘', color: 'from-accent to-primary-600' },
    { value: 'breathwork', label: 'Breathwork', icon: '🫁', color: 'from-blue-500 to-blue-600' },
    { value: 'mindfulness', label: 'Mindfulness', icon: '🌱', color: 'from-green-500 to-green-600' },
    { value: 'movement', label: 'Movement', icon: '🏃', color: 'from-orange-500 to-orange-600' },
    { value: 'guided-meditation', label: 'Guided Meditation', icon: '💫', color: 'from-purple-500 to-purple-600' },
    { value: 'sound-healing', label: 'Sound Healing', icon: '🎵', color: 'from-pink-500 to-pink-600' },
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
              🧘 SIT Practice
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              SIT Meditation Library
              <span className="block text-accent">Stillness • Introspection • Transformation</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed mb-8">
              Discover guided meditation, breathwork, and mindfulness sessions designed to support your wellness journey and inner transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#sessions" className="btn-primary text-lg px-8 py-4">
                Explore Sessions
              </a>
              <a href="#benefits" className="btn-secondary text-lg px-8 py-4 bg-white/10 text-white border-white/20 hover:bg-white/20">
                Learn Benefits
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="section-padding gradient-bg-light relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 via-transparent to-primary-100/20" />
        </div>
        
        <div className="container-custom relative">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-accent/15 text-accent font-semibold rounded-full text-sm mb-6">
              🎯 Categories
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Find Your Perfect
              <span className="block text-gradient">Practice</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose from various meditation styles and techniques to support your specific wellness goals.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
            {categories.map((category, index) => (
              <div
                key={category.value}
                className="card text-center group hover:-translate-y-2 transition-all duration-300 cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl mx-auto mb-4 flex items-center justify-center text-white text-2xl group-hover:scale-110 transition-transform duration-300`}>
                  {category.icon}
                </div>
                <h3 className="text-sm font-medium text-gray-900 group-hover:text-accent transition-colors duration-300">
                  {category.label}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sessions Grid */}
      <section id="sessions" className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-accent/15 text-accent font-semibold rounded-full text-sm mb-6">
              📚 Session Library
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Guided Sessions for Every Need
            </h2>
          </div>

          {sessions.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sessions.map((session, index) => (
                <Link
                  key={session._id}
                  href={`/sit-library/${session.slug}`}
                  className="card group hover:-translate-y-2 hover:shadow-2xl transition-all duration-500"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shimmer transition-opacity duration-500 rounded-2xl" />
                  
                  <div className="relative overflow-hidden rounded-xl mb-6">
                    <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 relative">
                      {session.thumbnail ? (
                        <Image
                          src={urlForImage(session.thumbnail).width(400).height(225).url()}
                          alt={session.title}
                          width={400}
                          height={225}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-accent/20 to-primary-400/20">
                          <div className="text-6xl opacity-50">🧘</div>
                        </div>
                      )}
                      
                      {/* Duration badge */}
                      <div className="absolute bottom-3 right-3 bg-black/75 text-white px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
                        {session.duration} min
                      </div>

                      {/* Play overlay */}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                          <svg className="w-8 h-8 text-gray-900 ml-1" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M8 5v10l8-5-8-5z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="inline-block px-3 py-1 bg-accent/15 text-accent text-sm font-medium rounded-full capitalize">
                        {session.category.replace('-', ' ')}
                      </span>
                      {session.difficulty && (
                        <span className="text-sm text-gray-500 capitalize bg-gray-100 px-2 py-1 rounded">
                          {session.difficulty}
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-xl font-heading font-bold text-gray-900 group-hover:text-accent transition-colors duration-300">
                      {session.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed">
                      {session.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="text-8xl mb-6 opacity-20">🧘</div>
              <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">Coming Soon</h3>
              <p className="text-lg text-gray-600 mb-2">Our meditation library is being carefully curated.</p>
              <p className="text-gray-500">Check back soon for transformative sessions!</p>
              <div className="mt-8">
                <a 
                  href={process.env.NEXT_PUBLIC_CHAT_TOOL_URL || 'http://localhost:3002'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Get Started
                </a>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="section-padding gradient-bg-light">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-accent/15 text-accent font-semibold rounded-full text-sm mb-6">
              ✨ Benefits
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Practice
              <span className="block text-gradient">Meditation?</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Scientific research shows consistent meditation practice creates profound positive changes in both mind and body.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: '🧠',
                title: 'Reduce Stress & Anxiety',
                description: 'Regular meditation practice significantly reduces cortisol levels and activates the body\'s relaxation response.',
                stat: '58% reduction',
                statLabel: 'in anxiety symptoms'
              },
              {
                icon: '🎯',
                title: 'Improve Focus & Clarity',
                description: 'Enhance concentration, mental clarity, and cognitive performance through mindfulness training.',
                stat: '23% improvement',
                statLabel: 'in attention span'
              },
              {
                icon: '😴',
                title: 'Better Sleep Quality',
                description: 'Develop healthy sleep patterns and improve rest quality with evening meditation practices.',
                stat: '42% better',
                statLabel: 'sleep quality'
              },
              {
                icon: '❤️',
                title: 'Heart Health',
                description: 'Lower blood pressure and improve cardiovascular health through stress reduction.',
                stat: '10-15%',
                statLabel: 'BP reduction'
              },
              {
                icon: '🔬',
                title: 'Boost Immune Function',
                description: 'Strengthen your immune system and increase resistance to illness and inflammation.',
                stat: '20% increase',
                statLabel: 'in antibody production'
              },
              {
                icon: '🌱',
                title: 'Emotional Resilience',
                description: 'Build emotional intelligence and develop better coping mechanisms for life\'s challenges.',
                stat: '65% improvement',
                statLabel: 'in emotional regulation'
              }
            ].map((benefit, index) => (
              <div 
                key={benefit.title}
                className="card text-center group hover:-translate-y-2 transition-all duration-500"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-5xl mb-6">{benefit.icon}</div>
                <h3 className="text-xl font-heading font-bold text-gray-900 mb-4 group-hover:text-accent transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {benefit.description}
                </p>
                <div className="bg-accent/10 rounded-xl p-4">
                  <div className="text-2xl font-bold text-accent mb-1">{benefit.stat}</div>
                  <div className="text-sm text-gray-600">{benefit.statLabel}</div>
                </div>
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
              Start Your Meditation
              <span className="block text-accent">Journey Today</span>
            </h2>
            <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed">
              Join thousands who have transformed their lives through consistent meditation practice.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <a href="/programs" className="btn-primary text-lg px-10 py-4">
                Explore Programs
              </a>
              <a 
                href={process.env.NEXT_PUBLIC_CHAT_TOOL_URL || 'http://localhost:3002'}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-lg px-10 py-4 bg-white/10 text-white border-white/20 hover:bg-white/20"
              >
                Get Started
              </a>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-2">🎧 Audio Sessions</div>
                <div className="text-gray-300">High-quality guided meditations</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-2">📱 Mobile Access</div>
                <div className="text-gray-300">Practice anywhere, anytime</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-2">👥 Community Support</div>
                <div className="text-gray-300">Connect with fellow practitioners</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}