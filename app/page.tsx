import Header from '../components/Header'
import ParallaxHero from '../components/ParallaxHero'
import About from '../components/About'
import Classes from '../components/Classes'
import Instructor from '../components/Instructor'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-offWhite">
      <Header />
      <main>
        <ParallaxHero />
        <About />
        <Classes />
        <Instructor />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

