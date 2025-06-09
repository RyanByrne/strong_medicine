import { TestimonialAvatar } from '@/components/ui/OptimizedImage'

export default function Testimonials() {
  const testimonials = [
    {
      quote: "I went from needing 3 cups of coffee just to function to waking up naturally with energy. The difference is incredible - I feel like myself again.",
      author: "Sarah M.",
      title: "Marketing Executive",
      location: "San Francisco, CA",
      result: "No more afternoon crashes",
      timeframe: "6 weeks"
    },
    {
      quote: "My anxiety was ruling my life. The SIT practices gave me tools to calm my nervous system. Now I handle stress without falling apart.",
      author: "Michael R.",
      title: "Software Engineer",
      location: "Austin, TX", 
      result: "Off anxiety medication",
      timeframe: "3 months"
    },
    {
      quote: "After years of being told my labs were 'normal,' Strong Medicine found the root cause of my symptoms. I finally have answers and a path forward.",
      author: "Jennifer L.",
      title: "Teacher",
      location: "Denver, CO",
      result: "Digestive issues resolved",
      timeframe: "2 months"
    },
    {
      quote: "I thought brain fog and low energy were just part of aging. This program proved me wrong. At 52, I have more energy than I did at 35.",
      author: "David K.",
      title: "Business Owner",
      location: "Miami, FL",
      result: "Mental clarity restored",
      timeframe: "3 months"
    },
    {
      quote: "As a nurse, I knew I was burned out but didn't know how to fix it. This program helped me heal from the inside out. I love my job again.",
      author: "Lisa P.",
      title: "Registered Nurse",
      location: "Seattle, WA",
      result: "Energy and joy restored",
      timeframe: "8 weeks"
    },
    {
      quote: "The testing revealed hormonal imbalances that explained everything. With targeted support, I'm sleeping through the night for the first time in years.",
      author: "Robert T.",
      title: "Data Scientist",
      location: "Boston, MA",
      result: "Sleep quality transformed",
      timeframe: "5 months"
    }
  ]

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-3">
        <div className="absolute inset-0 bg-gradient-to-tr from-accent/5 via-transparent to-primary-100/20" />
      </div>
      
      <div className="container-custom relative">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-2 bg-accent/15 text-accent font-semibold rounded-full text-sm mb-6 animate-pulse-soft">
            💬 Patient Success Stories
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Real People,
            <span className="block text-gradient">Real Transformations</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our patients say about their health transformation journey.
          </p>
        </div>

        {/* Featured testimonial */}
        <div className="relative max-w-4xl mx-auto mb-16">
          {/* Background glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-accent/10 to-accent/5 blur-3xl" />
          
          <div className="card text-center relative bg-white/95 backdrop-blur-sm border-2 border-accent/10 shadow-2xl">
            <div className="mb-8">
              <div className="relative inline-block">
                <svg className="w-20 h-20 mx-auto text-accent/30 floating-element" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                </svg>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-accent rounded-full animate-pulse-soft" />
              </div>
            </div>
            <blockquote className="text-2xl md:text-3xl font-medium text-gray-900 mb-8 leading-relaxed">
              &ldquo;{testimonials[0].quote}&rdquo;
            </blockquote>
            <div className="flex items-center justify-center gap-4 mb-6">
              <TestimonialAvatar name={testimonials[0].author} className="w-16 h-16" />
            <div className="text-left">
              <div className="font-semibold text-gray-900">{testimonials[0].author}</div>
              <div className="text-gray-700">{testimonials[0].title}</div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6 border-t border-gray-200">
            <div className="text-center">
              <div className="text-lg font-bold text-accent">{testimonials[0].result}</div>
              <div className="text-sm text-gray-700">Result Achieved</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-accent">{testimonials[0].timeframe}</div>
              <div className="text-sm text-gray-700">Time to Results</div>
            </div>
          </div>
          </div>
        </div>

        {/* Grid of additional testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.slice(1).map((testimonial, index) => (
            <div key={index} className="card h-full">
              <div className="mb-6">
                <svg className="w-8 h-8 text-accent/20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                </svg>
              </div>
              <blockquote className="text-gray-700 mb-6 leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <div className="mt-auto">
                <div className="flex items-center gap-3 mb-4">
                  <TestimonialAvatar name={testimonial.author} className="w-12 h-12" />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-sm text-gray-700">{testimonial.title}</div>
                  </div>
                </div>
                <div className="flex justify-between text-sm pt-4 border-t border-gray-100">
                  <span className="text-accent font-medium">{testimonial.result}</span>
                  <span className="text-gray-700">{testimonial.timeframe}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social proof */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 text-sm text-gray-700 mb-4">
            <div className="flex -space-x-2">
              {[1,2,3,4,5].map((i) => (
                <div key={i} className="w-8 h-8 bg-accent rounded-full border-2 border-white flex items-center justify-center">
                  <span className="text-white text-xs font-bold">{i}</span>
                </div>
              ))}
            </div>
            <span>Join 1000+ people who transformed their health</span>
          </div>
        </div>
      </div>
    </section>
  )
}