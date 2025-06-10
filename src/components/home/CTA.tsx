import Link from 'next/link'

export default function CTA() {
  return (
    <section className="section-padding gradient-bg relative overflow-hidden">
      {/* Enhanced background decorations */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-primary-400/20" />
      </div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent/15 rounded-full -translate-x-48 -translate-y-48 animate-pulse-soft"></div>
      <div className="absolute bottom-0 right-0 w-128 h-128 bg-primary-300/20 rounded-full translate-x-64 translate-y-64 floating-element"></div>
      <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-accent/10 rounded-full floating-element animation-delay-2000"></div>
      
      <div className="container-custom relative">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-2 bg-white/20 text-white font-semibold rounded-full text-sm mb-6 animate-pulse-soft">
            🚀 Ready to Feel Better?
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
            Your Energy is Waiting.
            <span className="block text-accent">Your Life is Waiting.</span>
          </h2>
          <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed">
            Every day you wait is another day of feeling less than your best. Take the first step toward the energy, clarity, and vitality you deserve.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <a
              href={process.env.NEXT_PUBLIC_CHAT_TOOL_URL || 'http://localhost:3002'}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg px-10 py-4 group bg-gradient-to-r from-accent to-emerald-500 hover:from-accent/90 hover:to-emerald-600 border-0"
            >
              <svg className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              Free Health Assessment
            </a>
            <Link
              href="/waitlist"
              className="btn-secondary text-lg px-10 py-4 bg-white/10 text-white border-white/20 hover:bg-white/20"
            >
              Join the Reset Program
              <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
          
          {/* Social proof */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-white/20">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">💰</div>
              <div className="text-gray-300">Payment Plans Available</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">🔒</div>
              <div className="text-gray-300">100% Confidential</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">✅</div>
              <div className="text-gray-300">30-Day Guarantee</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}