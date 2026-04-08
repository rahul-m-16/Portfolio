import { useState, useEffect, lazy, Suspense } from 'react'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'

// Lazy load sections for better performance
const About = lazy(() => import('./components/sections/About'))
const Skills = lazy(() => import('./components/sections/Skills'))
const Projects = lazy(() => import('./components/sections/Projects'))
const Internships = lazy(() => import('./components/sections/Internships'))
const Certifications = lazy(() => import('./components/sections/Certifications'))
const Contact = lazy(() => import('./components/sections/Contact'))

// Loading fallback component
const SectionLoader = () => (
  <div className="section-container flex items-center justify-center">
    <div className="animate-pulse text-primary-600 dark:text-primary-400">
      Loading...
    </div>
  </div>
)

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    // Initialize from localStorage immediately
    const savedTheme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    return savedTheme === 'dark' || (!savedTheme && prefersDark)
  })

  useEffect(() => {
    // Apply dark mode class
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode(prev => {
      const newMode = !prev
      localStorage.setItem('theme', newMode ? 'dark' : 'light')
      return newMode
    })
  }

  return (
    <div className="min-h-screen">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main>
        <Hero />
        <Suspense fallback={<SectionLoader />}>
          <About />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Skills />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Projects />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Internships />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Certifications />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}

export default App
