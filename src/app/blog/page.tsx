import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { client } from '@/lib/sanity.client'
import { POSTS_QUERY } from '@/lib/sanity.queries'
import { urlForImage } from '@/lib/sanity.image'

export const metadata: Metadata = {
  title: 'Health & Wellness Blog - STRONGMedicine',
  description: 'Evidence-based insights, wellness tips, and functional medicine resources to support your health transformation journey.',
}

interface BlogPost {
  _id: string
  title: string
  slug: string
  coverImage?: any
  publishedAt: string
  excerpt?: string
  author?: {
    name: string
    picture?: any
  }
}

async function getPosts(): Promise<BlogPost[]> {
  return client.fetch(POSTS_QUERY)
}

function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
}

export default async function BlogPage() {
  const posts = await getPosts()

  const categories = [
    { name: 'Functional Medicine', icon: '🔬', color: 'from-blue-500 to-blue-600' },
    { name: 'Nutrition', icon: '🥗', color: 'from-green-500 to-green-600' },
    { name: 'Lifestyle', icon: '🧘', color: 'from-purple-500 to-purple-600' },
    { name: 'Supplements', icon: '💊', color: 'from-orange-500 to-orange-600' },
    { name: 'Mental Health', icon: '🧠', color: 'from-pink-500 to-pink-600' },
    { name: 'Research', icon: '📊', color: 'from-accent to-primary-600' },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative section-padding gradient-bg overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-primary-400/20" />
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full translate-x-48 -translate-y-48 floating-element" />
        <div className="absolute bottom-0 left-0 w-128 h-128 bg-primary-300/10 rounded-full -translate-x-64 translate-y-64 animate-pulse-soft" />
        
        <div className="container-custom relative">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-white/20 text-white font-semibold rounded-full text-sm mb-6 animate-pulse-soft">
              📚 Health Resources
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Health & Wellness
              <span className="block text-accent">Blog</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed mb-8">
              Evidence-based insights, practical tips, and the latest research in functional medicine to support your health transformation journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#articles" className="btn-primary text-lg px-8 py-4">
                Browse Articles
              </a>
              <a href="#newsletter" className="btn-secondary text-lg px-8 py-4 bg-white/10 text-white border-white/20 hover:bg-white/20">
                Subscribe to Newsletter
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="section-padding gradient-bg-light relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 via-transparent to-primary-100/20" />
        </div>
        
        <div className="container-custom relative">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-accent/15 text-accent font-semibold rounded-full text-sm mb-6">
              🏷️ Categories
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Explore Topics
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover articles across various aspects of functional medicine and wellness.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
            {categories.map((category, index) => (
              <div
                key={category.name}
                className="card text-center group hover:-translate-y-2 transition-all duration-300 cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl mx-auto mb-4 flex items-center justify-center text-white text-2xl group-hover:scale-110 transition-transform duration-300`}>
                  {category.icon}
                </div>
                <h3 className="text-sm font-medium text-gray-900 group-hover:text-accent transition-colors duration-300">
                  {category.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section id="articles" className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-accent/15 text-accent font-semibold rounded-full text-sm mb-6">
              📝 Latest Articles
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Health Insights & Tips
            </h2>
          </div>

          {posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, index) => (
                <article 
                  key={post._id} 
                  className="card group hover:-translate-y-2 hover:shadow-2xl transition-all duration-500"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Link href={`/blog/${post.slug}`}>
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shimmer transition-opacity duration-500 rounded-2xl" />
                    
                    <div className="relative overflow-hidden rounded-xl mb-6">
                      <div className="aspect-[16/9] bg-gradient-to-br from-gray-100 to-gray-200 relative">
                        {post.coverImage ? (
                          <Image
                            src={urlForImage(post.coverImage).width(600).height(338).url()}
                            alt={post.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-accent/20 to-primary-400/20">
                            <div className="text-6xl opacity-50">📄</div>
                          </div>
                        )}
                        
                        {/* Read overlay */}
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <div className="bg-white/90 text-gray-900 px-6 py-3 rounded-full font-semibold">
                            Read Article
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      {/* Author and date */}
                      <div className="flex items-center gap-3">
                        {post.author?.picture ? (
                          <Image
                            src={urlForImage(post.author.picture).width(40).height(40).url()}
                            alt={post.author.name}
                            width={40}
                            height={40}
                            className="rounded-full"
                          />
                        ) : (
                          <div className="w-10 h-10 bg-gradient-to-br from-accent to-primary-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                            {post.author?.name?.charAt(0) || 'S'}
                          </div>
                        )}
                        <div>
                          <p className="text-sm font-medium text-gray-900">
                            {post.author?.name || 'STRONGMedicine Team'}
                          </p>
                          <time className="text-sm text-gray-500">
                            {formatDate(post.publishedAt)}
                          </time>
                        </div>
                      </div>
                      
                      <h2 className="text-xl font-heading font-bold text-gray-900 group-hover:text-accent transition-colors duration-300 leading-tight">
                        {post.title}
                      </h2>
                      
                      {post.excerpt && (
                        <p className="text-gray-600 leading-relaxed line-clamp-3">
                          {post.excerpt}
                        </p>
                      )}

                      {/* Read more indicator */}
                      <div className="flex items-center text-accent font-medium text-sm group-hover:translate-x-2 transition-transform duration-300">
                        Read more
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="text-8xl mb-6 opacity-20">📚</div>
              <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">Coming Soon</h3>
              <p className="text-lg text-gray-600 mb-2">We&apos;re preparing valuable health insights for you.</p>
              <p className="text-gray-500">Check back soon for evidence-based articles!</p>
              <div className="mt-8">
                <Link href="/waitlist" className="btn-primary">
                  Get Notified of New Articles
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Featured Topics Section */}
      <section className="section-padding gradient-bg-light">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-accent/15 text-accent font-semibold rounded-full text-sm mb-6">
              🌟 Popular Topics
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Readers Love
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Gut Health',
                description: 'Understanding the microbiome and digestive wellness',
                articles: '12 articles',
                icon: '🦠'
              },
              {
                title: 'Hormone Balance',
                description: 'Natural approaches to hormonal health',
                articles: '8 articles',
                icon: '⚖️'
              },
              {
                title: 'Stress Management',
                description: 'Science-backed stress reduction techniques',
                articles: '15 articles',
                icon: '🧘'
              },
              {
                title: 'Sleep Optimization',
                description: 'Evidence-based sleep improvement strategies',
                articles: '10 articles',
                icon: '😴'
              }
            ].map((topic, index) => (
              <div 
                key={topic.title}
                className="card text-center group hover:-translate-y-2 transition-all duration-500 cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl mb-4">{topic.icon}</div>
                <h3 className="text-lg font-heading font-bold text-gray-900 mb-2 group-hover:text-accent transition-colors duration-300">
                  {topic.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {topic.description}
                </p>
                <div className="text-xs text-accent font-medium">
                  {topic.articles}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section id="newsletter" className="section-padding gradient-bg relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-primary-400/20" />
        </div>
        
        <div className="container-custom relative">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
              Stay Informed About
              <span className="block text-accent">Your Health</span>
            </h2>
            <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed">
              Get the latest health insights, research updates, and practical wellness tips delivered directly to your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <a href="/waitlist" className="btn-primary text-lg px-10 py-4">
                Subscribe to Newsletter
              </a>
              <a href="/programs" className="btn-secondary text-lg px-10 py-4 bg-white/10 text-white border-white/20 hover:bg-white/20">
                Explore Programs
              </a>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-2">📧 Weekly Newsletter</div>
                <div className="text-gray-300">Curated health insights</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-2">🔬 Latest Research</div>
                <div className="text-gray-300">Evidence-based content</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-2">💡 Practical Tips</div>
                <div className="text-gray-300">Actionable advice</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}