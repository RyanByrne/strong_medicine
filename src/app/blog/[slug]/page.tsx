import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { PortableText } from '@portabletext/react'
import { client } from '@/lib/sanity.client'
import { POST_QUERY } from '@/lib/sanity.queries'
import { urlForImage } from '@/lib/sanity.image'

interface Props {
  params: { slug: string }
}

interface BlogPost {
  _id: string
  title: string
  slug: string
  coverImage?: any
  publishedAt: string
  excerpt?: string
  body: any[]
  author?: {
    name: string
    picture?: any
    bio?: string
    credentials?: string
  }
}

async function getPost(slug: string): Promise<BlogPost | null> {
  return client.fetch(POST_QUERY, { slug })
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPost(params.slug)
  
  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: post.title,
    description: post.excerpt || 'Read this article on STRONGMedicine blog',
    openGraph: {
      title: post.title,
      description: post.excerpt || 'Read this article on STRONGMedicine blog',
      type: 'article',
      publishedTime: post.publishedAt,
      authors: post.author ? [post.author.name] : undefined,
    },
  }
}

function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
}

const portableTextComponents = {
  types: {
    image: ({ value }: any) => {
      if (!value?.asset?._ref) {
        return null
      }
      return (
        <div className="my-8">
          <Image
            src={urlForImage(value).width(800).url()}
            alt={value.alt || ' '}
            width={800}
            height={450}
            className="w-full rounded-lg"
          />
        </div>
      )
    },
  },
  block: {
    h1: ({ children }: any) => <h1 className="text-3xl font-bold mt-8 mb-4">{children}</h1>,
    h2: ({ children }: any) => <h2 className="text-2xl font-bold mt-8 mb-4">{children}</h2>,
    h3: ({ children }: any) => <h3 className="text-xl font-bold mt-6 mb-3">{children}</h3>,
    h4: ({ children }: any) => <h4 className="text-lg font-bold mt-6 mb-3">{children}</h4>,
    normal: ({ children }: any) => <p className="mb-4 leading-relaxed">{children}</p>,
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-primary-500 pl-4 my-6 italic text-gray-700">
        {children}
      </blockquote>
    ),
  },
  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined
      return (
        <a
          href={value.href}
          rel={rel}
          className="text-primary-600 hover:underline"
        >
          {children}
        </a>
      )
    },
  },
}

export default async function BlogPostPage({ params }: Props) {
  const post = await getPost(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <article className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <section className="py-4 px-4 sm:px-6 lg:px-8 border-b">
        <div className="max-w-4xl mx-auto">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-gray-500 hover:text-gray-700">
              Home
            </Link>
            <span className="text-gray-400">/</span>
            <Link href="/blog" className="text-gray-500 hover:text-gray-700">
              Blog
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900 truncate">{post.title}</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <header className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {post.title}
          </h1>
          <div className="flex items-center space-x-4">
            {post.author?.picture && (
              <Image
                src={urlForImage(post.author.picture).width(48).height(48).url()}
                alt={post.author.name}
                width={48}
                height={48}
                className="rounded-full"
              />
            )}
            <div>
              {post.author && (
                <p className="font-medium text-gray-900">
                  {post.author.name}
                  {post.author.credentials && (
                    <span className="text-gray-500 ml-1">{post.author.credentials}</span>
                  )}
                </p>
              )}
              <time className="text-gray-500">
                {formatDate(post.publishedAt)}
              </time>
            </div>
          </div>
        </div>
      </header>

      {/* Cover Image */}
      {post.coverImage && (
        <section className="px-4 sm:px-6 lg:px-8 mb-12">
          <div className="max-w-4xl mx-auto">
            <div className="aspect-[16/9] relative rounded-lg overflow-hidden">
              <Image
                src={urlForImage(post.coverImage).width(1200).height(675).url()}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>
      )}

      {/* Article Content */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <PortableText
              value={post.body}
              components={portableTextComponents}
            />
          </div>
        </div>
      </section>

      {/* Author Bio */}
      {post.author?.bio && (
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start space-x-4">
              {post.author.picture && (
                <Image
                  src={urlForImage(post.author.picture).width(80).height(80).url()}
                  alt={post.author.name}
                  width={80}
                  height={80}
                  className="rounded-full flex-shrink-0"
                />
              )}
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  About {post.author.name}
                </h3>
                <p className="text-gray-600 mt-1">{post.author.bio}</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Related Posts CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Continue Reading
          </h2>
          <p className="text-gray-600 mb-8">
            Explore more health insights and wellness tips
          </p>
          <Link
            href="/blog"
            className="inline-block bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
          >
            View All Posts
          </Link>
        </div>
      </section>
    </article>
  )
}