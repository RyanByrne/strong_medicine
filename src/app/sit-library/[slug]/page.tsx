import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { client } from '@/lib/sanity.client'
import { SESSION_QUERY } from '@/lib/sanity.queries'
import { urlForImage } from '@/lib/sanity.image'

interface Props {
  params: { slug: string }
}

interface SitSession {
  _id: string
  title: string
  slug: string
  embedUrl: string
  category: string
  description: string
  duration: number
  difficulty?: string
  thumbnail?: any
}

async function getSession(slug: string): Promise<SitSession | null> {
  return client.fetch(SESSION_QUERY, { slug })
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const session = await getSession(params.slug)
  
  if (!session) {
    return {
      title: 'Session Not Found',
    }
  }

  return {
    title: session.title,
    description: session.description,
  }
}

// Helper function to extract video ID from various URL formats
function getVideoEmbedUrl(url: string): string {
  // YouTube
  if (url.includes('youtube.com') || url.includes('youtu.be')) {
    let videoId = ''
    if (url.includes('youtube.com')) {
      const urlParams = new URLSearchParams(new URL(url).search)
      videoId = urlParams.get('v') || ''
    } else if (url.includes('youtu.be')) {
      videoId = url.split('/').pop() || ''
    }
    return `https://www.youtube.com/embed/${videoId}`
  }
  
  // Vimeo
  if (url.includes('vimeo.com')) {
    const videoId = url.split('/').pop()
    return `https://player.vimeo.com/video/${videoId}`
  }
  
  // Return original URL if it's already an embed URL
  return url
}

export default async function SessionPage({ params }: Props) {
  const session = await getSession(params.slug)

  if (!session) {
    notFound()
  }

  const embedUrl = getVideoEmbedUrl(session.embedUrl)

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <section className="py-4 px-4 sm:px-6 lg:px-8 border-b">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-gray-500 hover:text-gray-700">
              Home
            </Link>
            <span className="text-gray-400">/</span>
            <Link href="/sit-library" className="text-gray-500 hover:text-gray-700">
              SIT Library
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900">{session.title}</span>
          </nav>
        </div>
      </section>

      {/* Video Player */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="aspect-video bg-black rounded-lg overflow-hidden shadow-xl">
            <iframe
              src={embedUrl}
              title={session.title}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* Session Details */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-lg p-8">
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium capitalize">
                {session.category.replace('-', ' ')}
              </span>
              <span className="text-gray-600">
                {session.duration} minutes
              </span>
              {session.difficulty && (
                <span className="text-gray-600 capitalize">
                  {session.difficulty} level
                </span>
              )}
            </div>
            
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              {session.title}
            </h1>
            
            <p className="text-gray-700 text-lg leading-relaxed">
              {session.description}
            </p>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Tips for Your Practice
          </h2>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                  <span className="text-primary-600 font-semibold">1</span>
                </div>
              </div>
              <div className="ml-4">
                <h3 className="font-semibold text-gray-900">Find a quiet space</h3>
                <p className="text-gray-600">Choose a comfortable spot where you won&apos;t be disturbed during your session.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                  <span className="text-primary-600 font-semibold">2</span>
                </div>
              </div>
              <div className="ml-4">
                <h3 className="font-semibold text-gray-900">Use headphones</h3>
                <p className="text-gray-600">For the best experience, especially with sound healing sessions, use quality headphones.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                  <span className="text-primary-600 font-semibold">3</span>
                </div>
              </div>
              <div className="ml-4">
                <h3 className="font-semibold text-gray-900">Be consistent</h3>
                <p className="text-gray-600">Regular practice yields the best results. Try to maintain a daily routine.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Sessions */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            More Sessions to Explore
          </h2>
          <div className="text-center">
            <Link
              href="/sit-library"
              className="inline-block bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
            >
              Browse All Sessions
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}