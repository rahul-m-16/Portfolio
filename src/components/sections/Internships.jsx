import { motion } from 'framer-motion'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { internships } from '../../data/internships'

const Internships = () => {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <section id="internships" className="section-container bg-white dark:bg-gray-900">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4 }}
      >
        <h2 className="section-title">Internship Experience</h2>

        <div className="max-w-4xl mx-auto space-y-8">
          {internships.map((internship, index) => (
            <motion.div
              key={internship.id}
              initial={{ opacity: 0, x: -20 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="card"
            >
              {/* Header */}
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-1">
                    {internship.role}
                  </h3>
                  <p className="text-lg text-primary-600 dark:text-primary-400 font-semibold mb-2">
                    {internship.company}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {internship.description}
                  </p>
                </div>
                <div className="mt-2 md:mt-0 md:ml-4 flex flex-col items-start md:items-end">
                  <span className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                    {internship.duration}
                  </span>
                  <span className="px-3 py-1 text-xs font-medium bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full">
                    {internship.type}
                  </span>
                </div>
              </div>

              {/* Achievements */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                  Key Achievements:
                </h4>
                <ul className="space-y-2">
                  {internship.achievements.map((achievement, i) => (
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
                      <span className="text-sm">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Skills Gained */}
              <div>
                <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Skills Gained:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {internship.skillsGained.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Internships
