import Link from 'next/link'

export default function Programs() {
  const programs = [
    {
      title: '3-Month Transformation',
      description: 'Our signature program for busy professionals who are ready to reclaim their energy and feel like themselves again. Perfect if you\'re tired of quick fixes that don\'t last.',
      features: [
        'Complete health & lab assessment',
        'Custom nutrition protocol',
        'Weekly 1-on-1 coaching calls',
        'Daily SIT practice library',
      ],
      price: '$1,497',
      duration: '3 months',
      highlighted: true,
    },
    {
      title: '12-Month Total Renewal',
      description: 'For those with complex health challenges or who want comprehensive support. This deep-dive program addresses multiple systems for complete transformation.',
      features: [
        'Everything in 3-Month program',
        'Expanded testing & analysis',
        'Bi-weekly coaching calls',
        '24/7 priority support',
      ],
      price: '$4,997',
      duration: '12 months',
      highlighted: false,
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Choose Your Path
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Both programs include the same proven methodology. The difference? Time and depth of support.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {programs.map((program) => (
            <div
              key={program.title}
              className={`rounded-2xl p-8 ${
                program.highlighted
                  ? 'bg-white shadow-xl border-2 border-primary-500'
                  : 'bg-white shadow-lg border border-gray-200'
              }`}
            >
              {program.highlighted && (
                <span className="inline-block px-3 py-1 text-sm font-semibold text-primary-600 bg-primary-100 rounded-full mb-4">
                  Most Popular
                </span>
              )}
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {program.title}
              </h3>
              <p className="text-gray-700 mb-6">
                {program.description}
              </p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">{program.price}</span>
                <span className="text-gray-700 ml-2">/ {program.duration}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {program.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className="w-5 h-5 text-primary-500 mt-0.5 mr-3 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/waitlist"
                className={`block w-full text-center px-6 py-3 rounded-lg font-semibold transition-colors ${
                  program.highlighted
                    ? 'bg-primary-600 text-white hover:bg-primary-700'
                    : 'bg-gray-800 text-white hover:bg-gray-900'
                }`}
              >
                Join Waitlist
              </Link>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            href="/programs"
            className="text-primary-600 hover:text-primary-700 font-semibold"
          >
            View detailed program information →
          </Link>
        </div>
      </div>
    </section>
  )
}