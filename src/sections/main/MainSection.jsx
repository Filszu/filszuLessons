import React from 'react'
import {motion} from 'framer-motion'

import {slideIn,staggerContainer} from '../../utils/motion'

import './mainSection.css'
import { TypingText } from '../../components'
import PictureLogo from '../../components/picture_logo/PictureLogo'

function MainSection({content}) {
  return (
    <motion.main className='app__main fullScreenSection'
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
        <div className="app__main__header">
          {/* <h1>{content.title}</h1> */}
          {/* {} */}
          <TypingText title={content.title}/>
        </div>

        <div className="logos__container">
          {content.languages.map((logo,index)=><PictureLogo logo={logo} index={index+1} key={logo.desc}/>)}

        </div>

        
    </motion.main>
  )
}

export default MainSection