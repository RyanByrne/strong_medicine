import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of service for STRONGMedicine.',
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto prose prose-lg">
        <h1>Terms of Service</h1>
        <p className="text-gray-600">Last updated: January 1, 2024</p>

        <h2>Agreement to Terms</h2>
        <p>
          By accessing or using STRONGMedicine&apos;s website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
        </p>

        <h2>Use of Services</h2>
        <h3>Eligibility</h3>
        <p>
          You must be at least 18 years old to use our services. By using our services, you represent and warrant that you meet this eligibility requirement.
        </p>

        <h3>Account Registration</h3>
        <p>
          To access certain features, you may need to create an account. You agree to:
        </p>
        <ul>
          <li>Provide accurate and complete information</li>
          <li>Maintain the security of your account credentials</li>
          <li>Promptly update any changes to your information</li>
          <li>Accept responsibility for all activities under your account</li>
        </ul>

        <h2>Health Information Disclaimer</h2>
        <p>
          <strong>Our services are not a substitute for professional medical advice, diagnosis, or treatment.</strong> Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition. Never disregard professional medical advice or delay in seeking it because of something you have read on our website.
        </p>

        <h2>Intellectual Property</h2>
        <p>
          All content on our website, including text, graphics, logos, images, and software, is the property of STRONGMedicine or its licensors and is protected by intellectual property laws. You may not use, reproduce, or distribute our content without our express written permission.
        </p>

        <h2>User Content</h2>
        <p>
          By submitting content to our website or services, you grant us a non-exclusive, royalty-free, perpetual, and worldwide license to use, modify, and display such content in connection with our services.
        </p>

        <h2>Prohibited Uses</h2>
        <p>
          You agree not to:
        </p>
        <ul>
          <li>Use our services for any illegal or unauthorized purpose</li>
          <li>Violate any laws or regulations</li>
          <li>Infringe upon the rights of others</li>
          <li>Transmit harmful or malicious code</li>
          <li>Attempt to gain unauthorized access to our systems</li>
          <li>Interfere with the proper functioning of our services</li>
        </ul>

        <h2>Payment Terms</h2>
        <p>
          If you purchase services from us:
        </p>
        <ul>
          <li>You agree to pay all fees associated with your selected program</li>
          <li>Payments are processed securely through our payment provider</li>
          <li>Refunds are subject to our refund policy</li>
          <li>You are responsible for any taxes related to your purchase</li>
        </ul>

        <h2>Limitation of Liability</h2>
        <p>
          &ldquo;TO THE MAXIMUM EXTENT PERMITTED BY LAW, STRONGMEDICINE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES.&rdquo;
        </p>

        <h2>Indemnification</h2>
        <p>
          You agree to indemnify and hold harmless STRONGMedicine, its affiliates, and their respective officers, directors, employees, and agents from any claims, liabilities, damages, losses, and expenses arising from your use of our services or violation of these terms.
        </p>

        <h2>Modifications to Terms</h2>
        <p>
          We reserve the right to modify these Terms of Service at any time. We will notify you of significant changes by posting the new terms on this page and updating the &ldquo;Last updated&rdquo; date.
        </p>

        <h2>Governing Law</h2>
        <p>
          These Terms of Service shall be governed by and construed in accordance with the laws of the United States, without regard to its conflict of law provisions.
        </p>

        <h2>Contact Information</h2>
        <p>
          If you have any questions about these Terms of Service, please contact us at:
        </p>
        <p>
          STRONGMedicine<br />
          Email: legal@strongmedicine.com<br />
          Phone: (555) 123-4567
        </p>
      </div>
    </div>
  )
}