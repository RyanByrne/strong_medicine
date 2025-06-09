export default function Process() {
  const steps = [
    {
      number: "01",
      title: "Discovery Call & Assessment",
      description: "We start with a comprehensive evaluation of your health history, symptoms, and goals to understand exactly what's been holding you back.",
      features: ["90-minute initial consultation", "Complete health history review", "Symptom pattern analysis", "Goal setting session"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      )
    },
    {
      number: "02", 
      title: "Testing & Root Cause Analysis",
      description: "Using advanced functional labs, we uncover hidden imbalances in hormones, gut health, nutrients, and inflammation that drive your symptoms.",
      features: ["Comprehensive lab panel", "Biomarker analysis", "Gut microbiome testing", "Inflammation markers"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a1 1 0 01-1-1V9a1 1 0 011-1h1a2 2 0 100-4H4a1 1 0 01-1-1V4a1 1 0 011-1h3a1 1 0 011 1v1z" />
        </svg>
      )
    },
    {
      number: "03",
      title: "Your Personalized Healing Plan", 
      description: "Based on your unique results, we create a customized protocol addressing nutrition, supplements, stress management, and lifestyle.",
      features: ["Custom nutrition plan", "Targeted supplementation", "SIT practice prescription", "Lifestyle optimization"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      number: "04",
      title: "Ongoing Support & Optimization",
      description: "With weekly check-ins and continuous monitoring, we adjust your protocol to ensure you're seeing results and feeling your best.",
      features: ["Weekly coaching calls", "Protocol adjustments", "Progress monitoring", "24/7 message support"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      )
    }
  ]

  return (
    <section className="section-padding gradient-bg-light relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-bl from-primary-100/30 via-transparent to-accent/10" />
      </div>
      
      <div className="container-custom relative">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-2 bg-accent/15 text-accent font-semibold rounded-full text-sm mb-6 animate-shimmer">
            🗺️ Your Transformation Journey
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Your Path from
            <span className="block text-gradient">Exhausted to Energized</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            In just 3 months, we&apos;ll identify what&apos;s been draining your energy, create a personalized healing plan, 
            and support you every step of the way.
          </p>
        </div>

        <div className="relative">
          {/* Progress line */}
          <div className="absolute top-24 left-8 right-8 h-0.5 bg-gradient-to-r from-accent to-primary-600 hidden lg:block"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                {/* Step card */}
                <div className="card text-center relative z-10 h-full">
                  {/* Step number */}
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-accent to-primary-600 text-white rounded-2xl mb-6 relative">
                    <span className="text-xl font-bold">{step.number}</span>
                    {/* Progress dot */}
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-accent rounded-full border-4 border-white hidden lg:block"></div>
                  </div>
                  
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/10 text-accent rounded-xl mb-6">
                    {step.icon}
                  </div>

                  <h3 className="font-heading text-xl font-bold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 text-sm text-gray-700">
                    {step.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <svg className="w-4 h-4 text-accent mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Arrow for mobile */}
                {index < steps.length - 1 && (
                  <div className="flex justify-center mt-6 lg:hidden">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 text-sm text-gray-700 mb-6">
            <span>⏱️ 3-month program</span>
            <span>•</span>
            <span>📞 Weekly 1-on-1 calls</span>
            <span>•</span>
            <span>📊 Real-time support</span>
          </div>
        </div>
      </div>
    </section>
  )
}