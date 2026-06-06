import { motion } from 'framer-motion'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { ABOUT_TEXT, EDUCATION } from '../../utils/constants'

const About = () => {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <section id="about" className="section-container bg-white dark:bg-gray-900">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4 }}
      >
        <h2 className="section-title">About Me</h2>
        
        <div className="max-w-4xl mx-auto">
          {/* About Text */}
          <div className="space-y-4 text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-12">
            {ABOUT_TEXT.split('\n\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {/* Education Cards */}
          <div className="space-y-6 mb-12">
            {EDUCATION.map((edu, index) => (
              <div key={index} className="card">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-primary-400 rounded-lg flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                      {edu.degree}
                    </h3>
                    <p className="text-lg text-primary-600 dark:text-primary-400 font-semibold mb-2">
                      {edu.institution}
                    </p>
                    <div className="flex flex-wrap gap-4 mb-4">
                      <p className="text-gray-600 dark:text-gray-400">📅 {edu.year}</p>
                      <p className="text-gray-600 dark:text-gray-400">📊 GPA: {edu.gpa}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        Relevant Coursework:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {edu.coursework.map((course, i) => (
                          <span key={i} className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full">
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                5+
              </div>
              <div className="text-gray-600 dark:text-gray-400 text-sm">
                Projects Built
              </div>
            </div>
            <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                2
              </div>
              <div className="text-gray-600 dark:text-gray-400 text-sm">
                Internships
              </div>
            </div>
            <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                4+
              </div>
              <div className="text-gray-600 dark:text-gray-400 text-sm">
                Certifications
              </div>
            </div>
            <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                15+
              </div>
              <div className="text-gray-600 dark:text-gray-400 text-sm">
                Technologies
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default About
