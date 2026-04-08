import { motion } from 'framer-motion'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { PERSONAL_INFO } from '../../utils/constants'

const Contact = () => {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <section id="contact" className="section-container bg-gray-50 dark:bg-gray-800">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4 }}
      >
        <h2 className="section-title">Get In Touch</h2>

        <div className="max-w-4xl mx-auto">
          <p className="text-center text-lg text-gray-700 dark:text-gray-300 mb-12">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* Email */}
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="card text-center hover:scale-105 transition-transform"
            >
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-primary-600 dark:text-primary-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Email</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 break-all">
                {PERSONAL_INFO.email}
              </p>
            </a>

            {/* LinkedIn */}
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="card text-center hover:scale-105 transition-transform"
            >
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-primary-600 dark:text-primary-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">LinkedIn</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Connect with me</p>
            </a>

            {/* GitHub */}
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="card text-center hover:scale-105 transition-transform"
            >
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-primary-600 dark:text-primary-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">GitHub</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Check my code</p>
            </a>
          </div>

          {/* Simple Contact Form */}
          <div className="card max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 text-center">
              Send a Message
            </h3>
            <form
              action={`mailto:${PERSONAL_INFO.email}`}
              method="post"
              encType="text/plain"
              className="space-y-4"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                ></textarea>
              </div>
              <button type="submit" className="w-full btn-primary">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Contact
