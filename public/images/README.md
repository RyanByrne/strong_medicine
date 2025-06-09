# Images Directory

This directory contains all static images for the STRONGMedicine website.

## Directory Structure

- `/logos/` - Brand logos and variations
- `/testimonials/` - Patient testimonial photos and avatars
- `/associations/` - Medical association and certification logos
- `/hero/` - Hero section background images and graphics
- `/icons/` - Custom icons and graphics
- `/blog/` - Blog post featured images
- `/programs/` - Program-specific images and graphics

## Image Guidelines

### File Naming
- Use descriptive, lowercase filenames with hyphens
- Include size variants: `logo-main.svg`, `logo-main-dark.svg`
- Example: `testimonial-sarah-m.jpg`, `association-ifm-logo.png`

### Formats
- **Logos**: SVG (preferred) or PNG with transparent background
- **Photos**: WebP (preferred) or JPG
- **Icons**: SVG (preferred) or PNG
- **Graphics**: SVG for simple graphics, WebP/PNG for complex

### Optimization
- Compress all images for web
- Use appropriate dimensions (avoid oversized images)
- Provide 2x retina versions for important graphics

## Placeholder Images

Currently using placeholder images that should be replaced with:

1. **Professional headshots** for testimonials
2. **Official logos** for medical associations
3. **Hero background** images
4. **Program graphics** and illustrations
5. **Team photos** for about page

## Usage in Components

Import images in React components:
```tsx
import Image from 'next/image'
import heroImage from '/images/hero/main-background.jpg'

<Image src={heroImage} alt="Description" width={800} height={600} />
```

For public images, use direct paths:
```tsx
<Image src="/images/logos/strongmedicine-logo.svg" alt="STRONGMedicine" width={120} height={40} />
```