import Navbar from '@/components/navbar'
import Hero from '@/components/hero'
import About from '@/components/about'
import Project from '@/components/project'
import Contact from '@/components/contact'
import Footer from '@/components/footer'

export default function Layout() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Project />
      <Contact />
      <Footer />
    </>
  )
}