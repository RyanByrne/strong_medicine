# STRONGMedicine - Next.js Marketing Site with Sanity CMS

A modern, responsive marketing website for STRONGMedicine built with Next.js 14, TypeScript, Tailwind CSS, and Sanity CMS.

## Features

- **Next.js 14 App Router** - Latest Next.js features with App Router
- **TypeScript** - Full type safety throughout the application
- **Tailwind CSS** - Utility-first CSS framework for rapid styling
- **Sanity CMS** - Headless CMS for content management
- **Static Site Generation** - Optimized performance with SSG
- **SEO Optimized** - Complete metadata and sitemap implementation
- **Mobile-First Design** - Responsive design that works on all devices
- **Meditation Library** - SIT (Stillness, Introspection, Transformation) sessions
- **Blog System** - Full-featured blog with Portable Text support
- **Waitlist Form** - Capture leads with integrated waitlist functionality

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Sanity account (free at [sanity.io](https://www.sanity.io/))

### Installation

1. Clone the repository:
```bash
cd strong-medicine
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.local.example .env.local
```

4. Configure your `.env.local` file:
```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_api_token
```

### Setting up Sanity

1. Create a new Sanity project:
```bash
npm create sanity@latest -- --template clean --create-project "STRONGMedicine" --dataset production
```

2. Copy your project ID from the Sanity dashboard and add it to your `.env.local`

3. Deploy the Sanity GraphQL API:
```bash
npx sanity graphql deploy
```

4. Create an API token in your Sanity project settings with read permissions

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

Access Sanity Studio at [http://localhost:3000/studio](http://localhost:3000/studio).

### Building for Production

```bash
npm run build
npm run start
```

## Project Structure

```
strong-medicine/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── about/             # About page
│   │   ├── blog/              # Blog listing and posts
│   │   ├── programs/          # Programs page
│   │   ├── sit-library/       # Meditation sessions
│   │   ├── waitlist/          # Waitlist form
│   │   ├── privacy/           # Privacy policy
│   │   ├── terms/             # Terms of service
│   │   ├── studio/            # Sanity Studio
│   │   └── layout.tsx         # Root layout
│   ├── components/            # React components
│   │   ├── forms/            # Form components
│   │   ├── home/             # Homepage sections
│   │   └── layout/           # Layout components
│   └── lib/                   # Utility functions
│       ├── sanity.client.ts   # Sanity client config
│       ├── sanity.image.ts    # Image URL builder
│       └── sanity.queries.ts  # GROQ queries
├── sanity/
│   └── schemas/               # Sanity schema definitions
│       ├── blogPost.ts        # Blog post schema
│       ├── sitSession.ts      # Meditation session schema
│       ├── siteSettings.ts    # Site settings schema
│       └── author.ts          # Author schema
├── public/                    # Static assets
└── sanity.config.ts          # Sanity configuration
```

## Content Management

### Adding Blog Posts

1. Navigate to `/studio`
2. Click on "Blog Post" in the sidebar
3. Fill in the required fields:
   - Title
   - Slug (URL path)
   - Cover Image
   - Author
   - Published Date
   - Body content (rich text)

### Adding SIT Sessions

1. Navigate to `/studio`
2. Click on "SIT Session"
3. Fill in:
   - Title
   - Embed URL (YouTube/Vimeo)
   - Category
   - Duration
   - Description

### Site Settings

Configure global site settings including:
- Site title and description
- Social media links
- Contact information
- Footer content

## Customization

### Colors

Edit the color palette in `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    // Green shades
  },
  secondary: {
    // Yellow shades
  }
}
```

### Typography

The site uses Inter font by default. To change, edit `src/app/layout.tsx`.

### Adding Pages

1. Create a new directory in `src/app/`
2. Add a `page.tsx` file
3. Export a default React component
4. Add metadata for SEO

## SEO

Each page includes:
- Meta title and description
- Open Graph tags
- Twitter Card tags
- Canonical URLs
- Sitemap generation
- Robots.txt

## Performance Optimization

- Static Site Generation for all pages
- Optimized images with Next.js Image component
- Lazy loading for off-screen content
- Minimal JavaScript bundle
- Edge caching ready

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy

### Other Platforms

The site can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Google Cloud Run
- Self-hosted with Node.js

## Troubleshooting

### Common Issues

1. **Sanity connection errors**
   - Verify your project ID and dataset name
   - Check API token permissions

2. **Build errors**
   - Ensure all environment variables are set
   - Run `npm run build` locally to debug

3. **Studio access issues**
   - Make sure you're logged into Sanity
   - Check CORS settings in Sanity dashboard

## Support

For issues and questions:
- Check the [Next.js Documentation](https://nextjs.org/docs)
- Visit [Sanity Documentation](https://www.sanity.io/docs)
- Review [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## License

This project is private and proprietary to STRONGMedicine.

---

Built with ❤️ for optimal health and wellness