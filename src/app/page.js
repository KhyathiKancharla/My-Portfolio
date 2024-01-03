import Image from 'next/image'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import About from './components/About'
import Contact from './components/Contact'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black">
      <Navbar/>
      <div class="container  mx-auto px-12 py-4">
      <HeroSection/>
      <About/>
      
      <Contact/>
      </div>
      
    </main>
  )
}
