import { motion } from 'framer-motion'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { skills } from '../../data/skills'

const Skills = () => {
  const [ref, isVisible] = useScrollAnimation()

  const skillCategories = [
    { title: 'Frontend', skills: skills.frontend, color: 'from-blue-500 to-cyan-500' },
    { title: 'Backend', skills: skills.backend, color: 'from-green-500 to-emerald-500' },
    { title: 'Tools & Others', skills: skills.tools, color: 'from-purple-500 to-pink-500' }
  ]

  return (
    <section id="skills" className="section-container bg-white dark:bg-gray-900">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4 }}
      >
        <h2 className="section-title">Skills & Technologies</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: categoryIndex * 0.1 }}
              className="card"
            >
              <h3 className={`text-xl font-bold mb-6 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                {category.title}
              </h3>
              <div className="space-y-3">
                {category.skills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                  >
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color}`}></div>
                    <span className="text-gray-700 dark:text-gray-300">{skill}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Skills
