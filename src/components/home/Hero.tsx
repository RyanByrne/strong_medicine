import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-bg">
      
      {/* Animated mesh gradient overlay */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-primary-400/20 animate-pulse-soft" />
      </div>
      
      {/* Enhanced decorative elements */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-accent/25 rounded-full mix-blend-multiply filter blur-3xl opacity-80 animate-blob floating-element" />
      <div className="absolute top-40 right-10 w-96 h-96 bg-primary-300/35 rounded-full mix-blend-multiply filter blur-3xl opacity-80 animate-blob animation-delay-2000" />
      <div className="absolute -bottom-8 left-20 w-96 h-96 bg-accent/15 rounded-full mix-blend-multiply filter blur-3xl opacity-80 animate-blob animation-delay-4000" />
      
      {/* Additional floating elements */}
      <div className="absolute top-1/3 left-1/4 w-4 h-4 bg-accent/60 rounded-full animate-pulse-soft animation-delay-1000" />
      <div className="absolute top-1/2 right-1/3 w-6 h-6 bg-primary-400/50 rounded-full floating-element animation-delay-3000" />
      <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-accent/40 rounded-full animate-pulse-soft animation-delay-5000" />
      
      <div className="relative container-custom pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Content */}
          <div className="text-left">
            <div className="mb-8">
              <span className="inline-block px-4 py-2 bg-accent/10 text-accent font-medium rounded-full text-sm mb-6">
                🌟 Personalized Functional Medicine
              </span>
              <h1 className="font-heading font-bold text-white mb-6 leading-tight">
                Finally Feel Like
                <span className="block text-gradient bg-gradient-to-r from-accent to-primary-400 bg-clip-text text-transparent">
                  Yourself Again
                </span>
              </h1>
              <p className="text-xl text-gray-200 max-w-xl leading-relaxed">
                Stop managing symptoms. Start healing. Our evidence-based approach combines advanced diagnostics, personalized nutrition, and mind-body medicine to restore your energy, clarity, and vitality.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={process.env.NEXT_PUBLIC_CHAT_TOOL_URL || 'http://localhost:3002'}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-lg px-8 py-4 bg-gradient-to-r from-accent to-emerald-500 hover:from-accent/90 hover:to-emerald-600 flex items-center justify-center group"
              >
                <svg className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                Free Health Screening
              </a>
              <Link
                href="/programs"
                className="btn-secondary text-lg px-8 py-4 bg-white/10 text-white border-white/20 hover:bg-white/20"
              >
                View Programs
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">1,247</div>
                <div className="text-sm text-gray-300">Lives Transformed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">91%</div>
                <div className="text-sm text-gray-300">Report Feeling Better</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">30</div>
                <div className="text-sm text-gray-300">Days to First Results</div>
              </div>
            </div>
          </div>
          
          {/* Right column - Visual */}
          <div className="relative lg:pl-8">
            <div className="relative">
              {/* Placeholder for hero image/illustration */}
              <div className="aspect-square bg-white/10 rounded-3xl p-8 glass-effect">
                <div className="h-full w-full bg-gradient-to-br from-accent/20 to-primary-400/20 rounded-2xl flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-24 h-24 bg-accent rounded-full mx-auto mb-6 flex items-center justify-center">
                      <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-heading font-bold mb-2">Whole-Person Medicine</h3>
                    <p className="text-gray-200">Where science meets compassionate care</p>
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
  )
}