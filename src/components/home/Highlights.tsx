export default function Highlights() {
  const features = [
    {
      title: 'Smart Onboarding',
      description: 'Our AI assistant guides you through a personalized assessment. Dr. Johnson reviews every response to create your custom treatment plan.',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      cta: {
        text: 'Start Onboarding',
        href: process.env.NEXT_PUBLIC_CHAT_TOOL_URL || 'http://localhost:3002'
      }
    },
    {
      title: 'Root Cause Medicine',
      description: 'We don&apos;t mask symptoms with medications. Using advanced diagnostics, we identify and address the underlying imbalances causing your health issues.',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
    },
    {
      title: 'Personalized Protocols',
      description: 'Your genetics, lifestyle, and health history are unique. Your treatment should be too. Every protocol is customized to your specific needs.',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
    },
    {
      title: 'Mind-Body Integration',
      description: 'Healing happens when we address stress and trauma. Our SIT method combines breathwork, meditation, and nervous system regulation.',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
    },
  ]

  return (
    <section className="section-padding gradient-bg-light relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-primary-300/10" />
      </div>
      
      <div className="container-custom relative">
        <div className="text-center mb-20 stagger-animation">
          <span className="inline-block px-4 py-2 bg-accent/15 text-accent font-medium rounded-full text-sm mb-6 animate-shimmer">
            🎯 The Strong Medicine Difference
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            A New Approach to
            <span className="block text-gradient">Healing & Wellness</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Traditional medicine treats symptoms. We heal the whole person. Here&apos;s how our approach gets you feeling better, faster.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title} 
              className="card text-center group hover:-translate-y-3 hover:shadow-2xl transition-all duration-500 relative overflow-hidden"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Card shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shimmer transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-accent to-primary-600 text-white rounded-2xl mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-heading font-bold text-gray-900 mb-4 group-hover:text-accent transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {feature.description}
                </p>
                {feature.cta && (
                  <a
                    href={feature.cta.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-medium text-accent hover:text-accent/80 transition-colors group"
                  >
                    {feature.cta.text}
                    <svg className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 text-sm text-gray-700 mb-4">
            <span>✨ Board-certified physicians</span>
            <span>•</span>
            <span>🎯 Evidence-based protocols</span>
            <span>•</span>
            <span>⚡ Proven results</span>
          </div>
        </div>
      </div>
    </section>
  )
}