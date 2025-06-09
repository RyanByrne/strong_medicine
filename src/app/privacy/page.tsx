import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for STRONGMedicine.',
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto prose prose-lg">
        <h1>Privacy Policy</h1>
        <p className="text-gray-600">Last updated: January 1, 2024</p>

        <h2>Introduction</h2>
        <p>
          STRONGMedicine (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
        </p>

        <h2>Information We Collect</h2>
        <h3>Personal Information</h3>
        <p>
          We may collect personal information that you provide to us, including but not limited to:
        </p>
        <ul>
          <li>Name and contact information (email address, phone number, mailing address)</li>
          <li>Health information relevant to our services</li>
          <li>Payment and billing information</li>
          <li>Account credentials</li>
        </ul>

        <h3>Automatically Collected Information</h3>
        <p>
          When you visit our website, we may automatically collect certain information about your device and usage, including:
        </p>
        <ul>
          <li>IP address and location data</li>
          <li>Browser type and version</li>
          <li>Pages viewed and time spent on pages</li>
          <li>Referring website addresses</li>
        </ul>

        <h2>How We Use Your Information</h2>
        <p>
          We use the information we collect to:
        </p>
        <ul>
          <li>Provide and maintain our services</li>
          <li>Process transactions and send related information</li>
          <li>Send administrative information and updates</li>
          <li>Respond to inquiries and provide customer support</li>
          <li>Send marketing and promotional communications (with your consent)</li>
          <li>Improve our website and services</li>
          <li>Comply with legal obligations</li>
        </ul>

        <h2>Information Sharing and Disclosure</h2>
        <p>
          We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:
        </p>
        <ul>
          <li>With service providers who assist us in operating our business</li>
          <li>To comply with legal obligations or respond to lawful requests</li>
          <li>To protect our rights, privacy, safety, or property</li>
          <li>With your consent or at your direction</li>
        </ul>

        <h2>Data Security</h2>
        <p>
          We implement appropriate technical and organizational security measures to protect your personal information. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
        </p>

        <h2>Your Rights and Choices</h2>
        <p>
          You may have certain rights regarding your personal information, including:
        </p>
        <ul>
          <li>Accessing and updating your information</li>
          <li>Requesting deletion of your information</li>
          <li>Opting out of marketing communications</li>
          <li>Restricting or objecting to certain processing</li>
        </ul>

        <h2>Children&apos;s Privacy</h2>
        <p>
          Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children under 18.
        </p>

        <h2>Changes to This Privacy Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &ldquo;Last updated&rdquo; date.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have questions or concerns about this Privacy Policy or our privacy practices, please contact us at:
        </p>
        <p>
          STRONGMedicine<br />
          Email: privacy@strongmedicine.com<br />
          Phone: (555) 123-4567
        </p>
      </div>
    </div>
  )
}