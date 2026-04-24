import { motion } from 'framer-motion'
import './Footer.css'

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <p>&copy; 2025 Jhon Vincent Colasi. All rights reserved.</p>
      <p style={{ marginTop: '0.5rem' }}>Associate Software Engineer @ Genesys Cloud Services</p>
    </motion.footer>
  )
}

export default Footer
