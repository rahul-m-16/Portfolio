import { useState } from 'react'
import { motion } from 'framer-motion'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { projects, categories } from '../../data/projects'

const Projects = () => {
  const [ref, isVisible] = useScrollAnimation()
  const [activeCategory, setActiveCategory] = useState('all')

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(project => project.category === activeCategory)

  return (
    <section id="projects" className="section-container bg-gray-50 dark:bg-gray-800">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4 }}
      >
        <h2 className="section-title">Featured Projects</h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects showcasing my problem-solving approach and technical skills
        </p>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="card group relative"
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 right-4 px-3 py-1 bg-yellow-400 text-yellow-900 text-xs font-bold rounded-full">
                  ⭐ Featured
                </div>
              )}

              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                {project.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {project.description}
              </p>

              {/* Problem Statement */}
              <div className="mb-4 p-3 bg-red-50 dark:bg-red-900/20 rounded-lg border-l-4 border-red-500">
                <p className="text-sm font-semibold text-red-700 dark:text-red-400 mb-1">
                  Problem:
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  {project.problem}
                </p>
              </div>

              {/* Approach */}
              <div className="mb-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500">
                <p className="text-sm font-semibold text-blue-700 dark:text-blue-400 mb-1">
                  Approach:
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  {project.approach}
                </p>
              </div>

              {/* Challenges */}
              <div className="mb-4 p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg border-l-4 border-orange-500">
                <p className="text-sm font-semibold text-orange-700 dark:text-orange-400 mb-1">
                  Challenges:
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  {project.challenges}
                </p>
              </div>

              {/* Outcome */}
              <div className="mb-4 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border-l-4 border-green-500">
                <p className="text-sm font-semibold text-green-700 dark:text-green-400 mb-1">
                  Outcome:
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  {project.outcome}
                </p>
              </div>

              {/* Tech Stack */}
              <div className="mb-6">
                <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Tech Stack:
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-medium bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex gap-4">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium"
                >
                  Live Demo
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center px-4 py-2 bg-gray-700 dark:bg-gray-600 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-500 transition-colors font-medium"
                >
                  GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Projects
