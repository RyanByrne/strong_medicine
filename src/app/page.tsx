import Hero from '@/components/home/Hero'
import Associations from '@/components/home/Associations'
import Highlights from '@/components/home/Highlights'
import FounderVideo from '@/components/home/FounderVideo'
import SocialProof from '@/components/home/SocialProof'
import Process from '@/components/home/Process'
import Testimonials from '@/components/home/Testimonials'
import Programs from '@/components/home/Programs'
import FAQ from '@/components/home/FAQ'
import CTA from '@/components/home/CTA'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Associations />
      <Highlights />
      <FounderVideo />
      <SocialProof />
      <Process />
      <Testimonials />
      <Programs />
      <FAQ />
      <CTA />
    </>
  )
}