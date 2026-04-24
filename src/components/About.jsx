import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import './About.css'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const cards = [
    {
      title: "Current Role",
      content: (
        <>
          <p><strong>Associate Software Engineer</strong> at Genesys Cloud Services</p>
          <p style={{ marginTop: '1rem', fontSize: '0.875rem' }}>Started: November 2025</p>
          <p style={{ marginTop: '0.5rem' }}>
            Working in the Genesys Cloud R&D Department, contributing to innovative cloud-based solutions.
          </p>
        </>
      )
    },
    {
      title: "Background",
      content: (
        <>
          <p>
            Computer Education Graduate from Rizal Technological University with a passion for web development and technology education.
          </p>
          <p style={{ marginTop: '1rem' }}>
            Experienced in full-stack development, teaching, and technical support with a strong focus on clean, maintainable code.
          </p>
        </>
      )
    },
    {
      title: "Beyond Code",
      content: (
        <>
          <p>
            Mobile photographer capturing moments through a creative lens. I believe in the intersection of technology and art.
          </p>
          <p style={{ marginTop: '1rem' }}>
            Team player with excellent communication skills and a dedication to continuous learning.
          </p>
        </>
      )
    }
  ]

  return (
    <section id="about" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">Passionate developer with a focus on creating impactful solutions</p>
      </motion.div>
      
      <div className="about-grid">
        {cards.map((card, index) => (
          <motion.div
            key={card.title}
            className="about-card"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            <h3>{card.title}</h3>
            {card.content}
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default About
