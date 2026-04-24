import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import './Skills.css'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const skills = [
    { name: "HTML5", level: "Expert" },
    { name: "CSS3", level: "Expert" },
    { name: "JavaScript", level: "Advanced" },
    { name: "React.js", level: "Advanced" },
    { name: "Node.js", level: "Advanced" },
    { name: "MySQL", level: "Advanced" },
    { name: "C#", level: "Intermediate" },
    { name: "ASP.NET", level: "Intermediate" }
  ]

  return (
    <section id="skills" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Skills & Technologies</h2>
        <p className="section-subtitle">Tools and technologies I work with</p>
      </motion.div>
      
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            className="skill-card"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            <div className="skill-name">{skill.name}</div>
            <div className="skill-level">{skill.level}</div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Skills
