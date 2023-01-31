import React from 'react'
import {motion} from 'framer-motion'

import {slideIn,staggerContainer,zoomIn,zoomInCustom,fadeIn} from '../../utils/motion'


import { ReviewCard, TypingText } from '../../components'


import './AboutMeSection.css';
import filszuProfile from '../../assets/img/filszu-boss.png'
import filszuProfile2 from '../../assets/img/filszuProfile.jpg'

function AboutMeSection({content}) {
  return (
    <motion.section className='app__aboutMePage'
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
        <div className="app__fullScreen__header aboutMePage__header">
          {/* <h1>{content.title}</h1> */}
          {/* {} */}
          <TypingText title={content.title}/>
        </div>
        <section className="app__aboutMe">
          <section className='app__aboutMe__description' 

          // variants={slideIn('left','linear',0.3,1)}
          // variants={fadeIn('right', 'spring', 0, 2)}
          >
            <article>
              {content.desc}
            </article>
          
          
        </section>
        <motion.section className='app__aboutMe__img'>

          <div className="cornerImageContainer" id="aboutMe">
            <motion.img
             src={filszuProfile2} alt="Filip (Filszu) profile"
             variants={zoomInCustom(0,1,0.5,0.8)}
             
             />
            <motion.div 
              className="imageCornerBorder imageCornerBorder--topCorner"
              variants={zoomInCustom(0.3,1)}
              />
            <motion.div 
              className="imageCornerBorder imageCornerBorder--bottomCorner"
              variants={zoomInCustom(0.3,1)}
            
            />
          </div>          
          
          
          
        </motion.section>
        </section>
        
        

        

        
    </motion.section>
  )
}

export default AboutMeSection