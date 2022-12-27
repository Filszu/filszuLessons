import React from 'react'
import {motion} from 'framer-motion'

import {slideIn,staggerContainer} from '../../utils/motion'


import { ReviewCard, TypingText } from '../../components'


import './reviewsSection.css'

function ReviewsSection({content}) {
  return (
    <motion.section className='app__fullScreen fullScreenSection' id="learnWithMe"
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

        <div className="app__reviewConatiner">
            <ReviewCard reviews={content.reviews}/>
        </div>

        

        
    </motion.section>
  )
}

export default ReviewsSection