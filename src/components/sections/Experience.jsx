import { motion } from 'framer-motion'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { experience } from '../../data/experience'

const Experience = () => {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <section id="experience" className="section-container bg-gray-50 dark:bg-gray-800">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Work Experience</h2>

        <div className="max-w-4xl mx-auto space-y-8">
          {experience.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="card"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-1">
                    {exp.role}
                  </h3>
                  <p className="text-lg text-primary-600 dark:text-primary-400 font-semibold">
                    {exp.company}
                  </p>
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-400 mt-2 md:mt-0">
                  {exp.duration}
                </span>
              </div>

              <ul className="space-y-3">
                {exp.achievements.map((achievement, i) => (
                  <li
                    key={i}
                    className="flex items-start space-x-3 text-gray-700 dark:text-gray-300"
                  >
                    <svg
                      className="w-5 h-5 text-primary-600 dark:text-primary-400 mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Experience
