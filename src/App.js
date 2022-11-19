import logo from './logo.svg';
import mouse from './images/bi_mouse-fill.svg';
import './App.css';

import { motion } from "framer-motion"

function App() {
  return (
    <body>
    <motion.div initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}>
    <header className='nav'>
      <ul className='section-left'>
          <li>made with 🖤 by me</li>
      </ul>
      <ul className='section-right'>
        <a href="mailto:stejskalmira@icloud.com">
          <li>stejskalmira@icloud.com</li>
        </a>
      </ul>
    </header>
    <div className='main-section'>
      <h1 className='name'>MIROSLAV STEJSKAL</h1>
      <p className='job'>DIGITAL DESIGNER & WEB DEVELOPER</p>
    </div>
    <div className='scrolldown-section'>
      <motion.div animate={{
        y: [1,15, 1],
        scale: [1, 0.95, 1],
      }}
      transition={{
        duration: 1,
        ease: "easeInOut",
        repeat: Infinity,
        repeatDelay: 1
      }}><img className='mouse' src={mouse}></img></motion.div>
      <p className='scrolldown'>SCROLL DOWN</p>
    </div>
    </motion.div>
    </body>
  );
}

export default App;
