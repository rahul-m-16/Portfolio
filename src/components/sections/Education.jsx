import { motion } from 'framer-motion'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { EDUCATION } from '../../utils/constants'

const Education = () => {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <section id="education" className="section-container bg-white dark:bg-gray-900">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Education</h2>

        <div className="max-w-3xl mx-auto">
          <div className="card">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-primary-400 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 14l9-5-9-5-9 5 9 5z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                    />
                  </svg>
                </div>
              </div>

              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                  {EDUCATION.degree}
                </h3>
                <p className="text-lg text-primary-600 dark:text-primary-400 font-semibold mb-2">
                  {EDUCATION.institution}
                </p>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {EDUCATION.year}
                </p>

                <div>
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Relevant Coursework:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {EDUCATION.coursework.map((course, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Education
