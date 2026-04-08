import { motion } from 'framer-motion'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { certifications } from '../../data/certifications'

const Certifications = () => {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <section id="certifications" className="section-container bg-gray-50 dark:bg-gray-800">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4 }}
      >
        <h2 className="section-title">Certifications</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="card hover:scale-105 transition-transform"
            >
              <div className="flex items-start space-x-4">
                <div className="text-4xl">{cert.icon}</div>
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-1">
                    {cert.title}
                  </h4>
                  <p className="text-sm text-primary-600 dark:text-primary-400 font-semibold mb-2">
                    {cert.issuer}
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mb-3">
                    Issued: {cert.date}
                  </p>
                  
                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {cert.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-xs bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Credential Link */}
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm text-primary-600 dark:text-primary-400 hover:underline"
                  >
                    View Credential
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Certifications
