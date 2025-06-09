export default function SocialProof() {
  const stats = [
    {
      number: "1,247",
      label: "Lives Transformed",
      description: "Patients who completed our programs"
    },
    {
      number: "91%",
      label: "Success Rate", 
      description: "Achieve their primary health goals"
    },
    {
      number: "30 Days",
      label: "Average Time to Results",
      description: "To see significant improvements"
    },
    {
      number: "4.9/5",
      label: "Patient Satisfaction",
      description: "Based on 500+ reviews"
    }
  ]

  const achievements = [
    "Featured in Functional Medicine Magazine",
    "Top 10 Functional Medicine Practitioners 2023",
    "Published researcher in metabolism and wellness",
    "Speaker at International Wellness Summit",
    "Certified by Institute for Functional Medicine",
    "15+ years clinical experience"
  ]

  const mediaLogos = [
    "Healthline", "Well+Good", "MindBodyGreen", "Functional Medicine News", "Wellness Today", "Health Magazine"
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                {stat.number}
              </div>
              <div className="font-heading text-lg font-semibold text-gray-900 mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-gray-700">
                {stat.description}
              </div>
            </div>
          ))}
        </div>

        {/* Featured In */}
        <div className="text-center mb-16">
          <h3 className="font-heading text-2xl font-bold text-gray-900 mb-8">
            As Featured In
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {mediaLogos.map((logo, index) => (
              <div key={index} className="text-center group">
                <div className="h-16 bg-white rounded-lg flex items-center justify-center hover:bg-accent/5 transition-all duration-300 shadow-sm hover:shadow-md border border-gray-100 px-3">
                  <div className="text-center">
                    <div className="text-sm font-bold text-gray-600 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                      {logo}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="card max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="font-heading text-2xl font-bold text-gray-900 mb-4">
              Recognized Excellence in Functional Medicine
            </h3>
            <p className="text-gray-700">
              Our commitment to advancing functional medicine and patient care has been recognized by leading organizations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700">{achievement}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Trust badges */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-2xl mb-4">
              <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5-2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 className="font-heading text-lg font-semibold text-gray-900 mb-2">
              Science-Based Protocols
            </h4>
            <p className="text-gray-700 text-sm">
              All treatments backed by peer-reviewed research and clinical evidence
            </p>
          </div>
          
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-2xl mb-4">
              <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h4 className="font-heading text-lg font-semibold text-gray-900 mb-2">
              Privacy Protected
            </h4>
            <p className="text-gray-700 text-sm">
              HIPAA compliant with bank-level security for all patient data
            </p>
          </div>
          
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-2xl mb-4">
              <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h4 className="font-heading text-lg font-semibold text-gray-900 mb-2">
              Satisfaction Guaranteed
            </h4>
            <p className="text-gray-700 text-sm">
              30-day money-back guarantee if you&apos;re not completely satisfied
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}