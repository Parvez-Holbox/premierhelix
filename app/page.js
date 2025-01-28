import Layout from '@/components/layout'
import Hero from '@/components/hero'
import ConditionsGrid from '@/components/conditions-grid'
import AboutUs from '@/components/about-us'
import ContactForm from '@/components/contact-form'
import OurStory from '@/components/our-strory'

export default function Home() {
  return (
    <Layout>
      <Hero />
      <ConditionsGrid />
      <AboutUs />
      <OurStory />
      <ContactForm />
    </Layout>
  )
}
