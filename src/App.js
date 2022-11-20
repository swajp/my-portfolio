import { motion } from "framer-motion";
import './App.css';

import { NavBar } from './components/NavBar.js';
import { Banner } from './components/Banner.js';
import { Projects } from './components/Projects.js';

function App() {
  return (
    <motion.div initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }} className='App'>
      <NavBar />
      <Banner />
      <Projects />
    </motion.div>
  );
}

export default App;
