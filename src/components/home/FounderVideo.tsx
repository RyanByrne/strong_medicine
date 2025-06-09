'use client'

import { useState } from 'react'

export default function FounderVideo() {
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlay = () => {
    setIsPlaying(true)
  }

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-primary-300/10" />
      </div>
      
      <div className="container-custom relative">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-accent/15 text-accent font-medium rounded-full text-sm mb-6 animate-shimmer">
            👋 Meet Our Founder
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            A Personal Message from
            <span className="block text-gradient">Dr. Strong Medicine</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Discover the vision behind our functional medicine approach and learn how we&apos;re transforming lives through evidence-based healing.
          </p>
        </div>

        {/* Video Container */}
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-dark-900 to-dark-700">
            {/* Video aspect ratio container */}
            <div className="aspect-video relative">
              {!isPlaying ? (
                // Video thumbnail/placeholder
                <div className="absolute inset-0 bg-gradient-to-br from-dark-900 to-dark-700 flex items-center justify-center group cursor-pointer"
                     onClick={handlePlay}>
                  {/* Background image placeholder */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary-600/20" />
                  
                  {/* Play button */}
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="w-20 h-20 md:w-24 md:h-24 bg-white/90 backdrop-blur rounded-full flex items-center justify-center group-hover:bg-white group-hover:scale-110 transition-all duration-300 shadow-xl">
                      <svg className="w-8 h-8 md:w-10 md:h-10 text-dark-900 ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                    <p className="text-white text-lg font-medium mt-4 group-hover:text-accent transition-colors">
                      Watch Introduction
                    </p>
                    <p className="text-white/70 text-sm mt-1">
                      3 minutes
                    </p>
                  </div>

                  {/* Doctor placeholder image */}
                  <div className="absolute bottom-0 right-0 w-1/3 h-full bg-gradient-to-t from-dark-900/50 to-transparent opacity-60" />
                </div>
              ) : (
                // Actual video element
                <video 
                  className="w-full h-full object-cover"
                  controls
                  autoPlay
                  poster="/images/video-poster.jpg"
                >
                  <source src="/videos/founder-introduction.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
            </div>

            {/* Video info overlay */}
            {!isPlaying && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-dark-900/90 to-transparent p-6 md:p-8">
                <div className="flex items-end justify-between">
                  <div>
                    <h3 className="text-white font-heading font-bold text-xl md:text-2xl mb-2">
                      Welcome to Strong Medicine
                    </h3>
                    <p className="text-white/80 text-sm md:text-base">
                      An introduction to our functional medicine philosophy
                    </p>
                  </div>
                  <div className="text-white/60 text-sm">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                      3:24
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Video description */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/10 text-accent rounded-xl mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h4 className="font-heading font-bold text-lg text-gray-900 mb-2">
                Personal Approach
              </h4>
              <p className="text-gray-600 text-sm">
                Learn about our founder&apos;s journey and commitment to personalized care
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/10 text-accent rounded-xl mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h4 className="font-heading font-bold text-lg text-gray-900 mb-2">
                Evidence-Based
              </h4>
              <p className="text-gray-600 text-sm">
                Discover the science and research behind our treatment protocols
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/10 text-accent rounded-xl mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h4 className="font-heading font-bold text-lg text-gray-900 mb-2">
                Patient-Centered
              </h4>
              <p className="text-gray-600 text-sm">
                See how we put your health goals and wellbeing at the center of everything
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}