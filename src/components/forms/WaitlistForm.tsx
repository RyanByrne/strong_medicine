'use client'

import { useState } from 'react'

export default function WaitlistForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    program: '',
    healthGoals: '',
    referral: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    console.log('Form submitted:', formData)
    setIsSubmitted(true)
    setIsSubmitting(false)
  }

  if (isSubmitted) {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
        <p className="text-gray-600">
          You&apos;ve been added to our waitlist. We&apos;ll notify you as soon as enrollment opens.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-2">
            First Name *
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            required
            value={formData.firstName}
            onChange={handleChange}
            className="input-base"
            aria-describedby={errors.firstName ? 'firstName-error' : undefined}
          />
          {errors.firstName && (
            <p id="firstName-error" className="mt-1 text-sm text-red-600">{errors.firstName}</p>
          )}
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-2">
            Last Name *
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            required
            value={formData.lastName}
            onChange={handleChange}
            className="input-base"
            aria-describedby={errors.lastName ? 'lastName-error' : undefined}
          />
          {errors.lastName && (
            <p id="lastName-error" className="mt-1 text-sm text-red-600">{errors.lastName}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
          Email Address *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="input-base"
          aria-describedby={errors.email ? 'email-error' : undefined}
        />
        {errors.email && (
          <p id="email-error" className="mt-1 text-sm text-red-600">{errors.email}</p>
        )}
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
          Phone Number
          <span className="text-gray-500 font-normal ml-1">(Optional)</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="input-base"
          placeholder="(555) 123-4567"
        />
      </div>

      <div>
        <label htmlFor="program" className="block text-sm font-semibold text-gray-700 mb-2">
          Which program are you interested in? *
        </label>
        <select
          id="program"
          name="program"
          required
          value={formData.program}
          onChange={handleChange}
          className="input-base"
          aria-describedby={errors.program ? 'program-error' : undefined}
        >
          <option value="">Select a program</option>
          <option value="3-month">3-Month Reset Program</option>
          <option value="12-month">12-Month Functional Health Plan</option>
          <option value="both">I&apos;m interested in both</option>
          <option value="unsure">I&apos;m not sure yet</option>
        </select>
        {errors.program && (
          <p id="program-error" className="mt-1 text-sm text-red-600">{errors.program}</p>
        )}
      </div>

      <div>
        <label htmlFor="healthGoals" className="block text-sm font-semibold text-gray-700 mb-2">
          What are your primary health goals?
          <span className="text-gray-500 font-normal ml-1">(Optional)</span>
        </label>
        <textarea
          id="healthGoals"
          name="healthGoals"
          rows={4}
          value={formData.healthGoals}
          onChange={handleChange}
          className="input-base resize-none"
          placeholder="Tell us about your health goals and what you hope to achieve..."
        />
      </div>

      <div>
        <label htmlFor="referral" className="block text-sm font-semibold text-gray-700 mb-2">
          How did you hear about us?
          <span className="text-gray-500 font-normal ml-1">(Optional)</span>
        </label>
        <input
          type="text"
          id="referral"
          name="referral"
          value={formData.referral}
          onChange={handleChange}
          className="input-base"
          placeholder="Social media, friend referral, etc."
        />
      </div>

      <div className="pt-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className={`btn-primary w-full ${isSubmitting ? 'btn-loading' : ''}`}
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Submitting...
            </span>
          ) : (
            'Join the Waitlist'
          )}
        </button>
      </div>

      <p className="text-sm text-gray-500 text-center">
        By joining our waitlist, you agree to receive email updates about our programs. You can unsubscribe at any time.
      </p>
    </form>
  )
}