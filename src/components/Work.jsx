import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import './Work.css'

const Work = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const projects = [
    {
      title: "ComLearn LMS",
      company: "Learning Management System",
      description: "A comprehensive learning management system built with ASP.NET, designed to provide accessible computer education to groups facing learning difficulties.",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      emoji: "📚",
      link: "https://github.com/GiLLBaTesx/ComLearn-ASP.NET-"
    },
    {
      title: "Kuya D's Specialties",
      company: "E-commerce Platform",
      description: "Full-stack e-commerce solution built with MERN stack, featuring admin product management and seamless shopping experience.",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      emoji: "🛒",
      link: "https://github.com/GiLLBaTesx/Kuya-D-FE-"
    },
    {
      title: "ComLearn Mobile",
      company: "Mobile Application",
      description: "Mobile version of the ComLearn LMS, bringing education accessibility to smartphones with an intuitive interface.",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      emoji: "📱",
      link: "https://drive.google.com/drive/folders/1b1I7Ypm-n3u-9Zhob-bsGl9mSEdEUz9R?usp=sharing"
    },
    {
      title: "School Finder",
      company: "Mobile Application",
      description: "Location-based mobile app helping senior high school students discover schools, courses, and pricing information.",
      gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
      emoji: "🎓",
      link: "https://drive.google.com/drive/folders/1V9v_vO34Xo2E6Ag1ojJX8lRj709N6VCG?usp=sharing"
    },
    {
      title: "Beadsty",
      company: "Frontend Development",
      description: "Modern e-commerce frontend showcasing responsive design and smooth user interactions.",
      gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
      emoji: "💎",
      link: "https://beadsty-main.vercel.app/"
    },
    {
      title: "Archiverch",
      company: "Research Archiving System",
      description: "Digital archiving system for research papers, providing easy access and reference for future researchers.",
      gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
      emoji: "📄",
      link: "https://drive.google.com/drive/folders/1udHztczDN1YC2jflbEtb-CJKT9Kg9ops?usp=drive_link"
    }
  ]

  return (
    <section id="work" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">A selection of my recent work and contributions</p>
      </motion.div>
      
      <div className="work-grid">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            className="work-card"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
            onClick={() => window.open(project.link, '_blank')}
          >
            <div 
              className="work-image" 
              style={{ background: project.gradient }}
            >
              <span className="work-emoji">{project.emoji}</span>
            </div>
            <div className="work-content">
              <h3>{project.title}</h3>
              <span className="company">{project.company}</span>
              <p>{project.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Work
