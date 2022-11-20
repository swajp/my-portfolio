import { motion, transform } from "framer-motion"
import githubicon from '../assets/img/github.svg';
import linkicon from '../assets/img/link.svg';
import projectpic from '../assets/img/project.png';

export const Projects = () => {
    return(
        <section>
        <motion.div initial={{ opacity: 0, scale: 0.1}}
        transition= {{duration: 0.5}}
  whileInView={{ opacity: 1, scale: 1}}
  viewport={{ once: false }}
 className='project-container'>
            <motion.div className='left-content'>
          <div className='project-top'>
            <h1 className='project-title'>Lorem Ipsum</h1>
            <div className='project-icons'>
              <a href=''><img alt='Icon of Github Logo' src={githubicon}/></a>
              <a href=''><img alt='Icon of refence for a link' src={linkicon}/></a>
            </div>
          </div>
          <p className='project-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
        </motion.div>
        <motion.div className='right-content'>
            <div className="image-container">
            <img className="project-image" alt='Picture of project' src={projectpic}/>
            </div>
        </motion.div>
      </motion.div>
      <motion.div initial={{ opacity: 0, scale: 0.1}}
        transition= {{duration: 0.5}}
  whileInView={{ opacity: 1, scale: 1}}
  viewport={{ once: false }}
 className='project-container'>
            <motion.div className='left-content'>
                <div className="image-container">
                    <img className="project-image" alt='Picture of project' src={projectpic}/>
                </div>
        </motion.div>
        <motion.div className='right-content'>
        <div className='project-top'>
            <h1 className='project-title'>Lorem Ipsum</h1>
            <div className='project-icons'>
              <a href=''><img alt='Icon of Github Logo' src={githubicon}/></a>
              <a href=''><img alt='Icon of refence for a link' src={linkicon}/></a>
            </div>
          </div>
          <p className='project-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
        </motion.div>
      </motion.div>
      <motion.div initial={{ opacity: 0, scale: 0.1}}
        transition= {{duration: 0.5}}
  whileInView={{ opacity: 1, scale: 1}}
  viewport={{ once: false }}
 className='project-container'>
            <motion.div className='left-content'>
          <div className='project-top'>
            <h1 className='project-title'>Lorem Ipsum</h1>
            <div className='project-icons'>
              <a href=''><img alt='Icon of Github Logo' src={githubicon}/></a>
              <a href=''><img alt='Icon of refence for a link' src={linkicon}/></a>
            </div>
          </div>
          <p className='project-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
        </motion.div>
        <motion.div className='right-content'>
            <div className="image-container">
            <img className="project-image" alt='Picture of project' src={projectpic}/>
            </div>
        </motion.div>
      </motion.div>
      <motion.div initial={{ opacity: 0, scale: 0.1}}
        transition= {{duration: 0.5}}
  whileInView={{ opacity: 1, scale: 1}}
  viewport={{ once: false }}
 className='project-container'>
            <motion.div className='left-content'>
                <div className="image-container">
                    <img className="project-image" alt='Picture of project' src={projectpic}/>
                </div>
        </motion.div>
        <motion.div className='right-content'>
        <div className='project-top'>
            <h1 className='project-title'>Lorem Ipsum</h1>
            <div className='project-icons'>
              <a href=''><img alt='Icon of Github Logo' src={githubicon}/></a>
              <a href=''><img alt='Icon of refence for a link' src={linkicon}/></a>
            </div>
          </div>
          <p className='project-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
        </motion.div>
      </motion.div>
        </section>
    )
}