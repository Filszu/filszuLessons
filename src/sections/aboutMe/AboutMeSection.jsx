import React from 'react'
import {motion} from 'framer-motion'

import {slideIn,staggerContainer} from '../../utils/motion'


import { ReviewCard, TypingText } from '../../components'


import './AboutMeSection.css';
import filszuProfile from '../../assets/img/filszu-boss.png'
import filszuProfile2 from '../../assets/img/filszuProfile.jpg'

function AboutMeSection({content}) {
  return (
    <motion.section className='app__fullScreen fullScreenSection'
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
        <div className="app__fullScreen__header">
          {/* <h1>{content.title}</h1> */}
          {/* {} */}
          <TypingText title={content.title}/>
        </div>
        <section className="app__aboutMe">
          <motion.section className='app__aboutMe__description'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error dicta eligendi perspiciatis alias veritatis sed a inventore cum eveniet adipisci possimus cumque optio necessitatibus nobis nemo in, natus rerum enim.
          
        </motion.section>
        <motion.section className='app__aboutMe__img'>

          <div className="cornerImageContainer">
            <img src={filszuProfile2} alt="Filip (Filszu) profile"></img>
            <div className="imageCornerBorder"/>
          </div>          
          
          
          
        </motion.section>
        </section>
        
        

        

        
    </motion.section>
  )
}

export default AboutMeSection