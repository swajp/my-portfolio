import mouse from '../assets/img/mouse.svg';
import { motion } from "framer-motion";

export const Banner = () => {
    return (
      <section>
        <motion.div className='main-section'>
          <h1 className='name'>MIROSLAV STEJSKAL</h1>
          <p className='job'>DIGITAL DESIGNER & WEB DEVELOPER</p>
        </motion.div>
        <div className='scrolldown-section'>
          <motion.div animate={{y: [1,15, 1],scale: [1, 0.95, 1],}}transition={{duration: 1,ease: "easeInOut",repeat: Infinity,repeatDelay: 1
        }}><img className='mouse' src={mouse}></img>
        </motion.div>
        <p className='scrolldown'>SCROLL DOWN</p>
      </div>
        </section>
    )
}