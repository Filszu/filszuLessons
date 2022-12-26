import React from 'react'

// import {imgs} from './imports'
import { motion } from 'framer-motion'
import { zoomIn } from '../../utils/motion'

import './logo.css'

function PictureLogo({logo,index}) {
    console.log(index)
    const zoomDelay = index?index*0.2:0.3;
  return (

    <a href={logo.url?logo.url:"#"}>
      <motion.div className='logo__container__el'
          variants={zoomIn(zoomDelay,1)}
          initial='hidden'
          whileInView="show"
      >
          <img src={`/logos/${logo.img}`} alt={logo.desc} />
          <p>{logo.desc}</p>
      </motion.div>
    </a>
    
  )
}



// const style ={{

// }}

export default PictureLogo