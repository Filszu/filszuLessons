import React from 'react'
import {motion} from 'framer-motion'

import {slideIn,staggerContainer} from '../../utils/motion'

import './ContactSection.css'
import { TypingText } from '../../components'
import PictureLogo from '../../components/picture_logo/PictureLogo'

function ContactSection({content}) {
  return (
      <motion.section className='app__contact fullScreenSection'
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
            {content.links.map((logo,index)=><PictureLogo logo={logo} key={logo.desc}/>)}

          </div>

          
      </motion.section>
  )
}

export default ContactSection