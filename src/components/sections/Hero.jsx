import { motion } from 'framer-motion'
import { PERSONAL_INFO } from '../../utils/constants'

// Optimized animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 }
}

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Greeting */}
          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.4 }}
          >
            <p className="text-primary-600 dark:text-primary-400 font-semibold text-lg mb-4">
              👋 Hello, I'm
            </p>
          </motion.div>

          {/* Name */}
          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
                {PERSONAL_INFO.name}
              </span>
            </h1>
          </motion.div>

          {/* Role */}
          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.4, delay: 0.15 }}
          >
            <h2 className="text-2xl md:text-4xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
              {PERSONAL_INFO.role}
            </h2>
          </motion.div>

          {/* Tagline */}
          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
              {PERSONAL_INFO.tagline}
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.4, delay: 0.25 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <a href="#projects" className="btn-primary inline-flex items-center justify-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              View My Work
            </a>
            <a
              href={PERSONAL_INFO.resume}
              download
              className="btn-secondary inline-flex items-center justify-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Resume
            </a>
            <a href="#contact" className="btn-secondary inline-flex items-center justify-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Get In Touch
            </a>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="flex justify-center gap-6 mb-16"
          >
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              aria-label="GitHub"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              aria-label="Email"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </motion.div>

          {/* Scroll Indicator - Simplified */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <a href="#about" className="inline-block">
              <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center animate-bounce">
                <div className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2"></div>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
