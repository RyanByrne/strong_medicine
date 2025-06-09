import { groq } from 'next-sanity'

export const POSTS_QUERY = groq`
  *[_type == "blogPost"] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    coverImage,
    publishedAt,
    excerpt,
    author->{
      name,
      picture
    }
  }
`

export const POST_QUERY = groq`
  *[_type == "blogPost" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    coverImage,
    publishedAt,
    excerpt,
    body,
    author->{
      name,
      picture,
      bio,
      credentials
    }
  }
`

export const SESSIONS_QUERY = groq`
  *[_type == "sitSession"] | order(title asc) {
    _id,
    title,
    "slug": slug.current,
    category,
    description,
    duration,
    difficulty,
    thumbnail
  }
`

export const SESSION_QUERY = groq`
  *[_type == "sitSession" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    embedUrl,
    category,
    description,
    duration,
    difficulty,
    thumbnail
  }
`

export const SITE_SETTINGS_QUERY = groq`
  *[_type == "siteSettings"][0] {
    siteTitle,
    siteDescription,
    logo,
    socialMedia,
    contactInfo,
    footer
  }
`