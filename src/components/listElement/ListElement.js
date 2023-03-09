import React from 'react'

import {motion} from 'framer-motion'

import './listElement.css'
import {slideIn,fadeIn} from '../../utils/motion'


function ListElement({el,index,showPrefix,baseDelay=2}) {
    console.log(el)
  return (
    // <p>{text}</p>
    // {showPrefix&&}
    <motion.div
        variants={fadeIn('right', 'spring', baseDelay+index*0.1, 1)}
        className="listElement"
    >
        <div className='listElement__prefix'>{el.id}</div>
        <div>{el.txt}</div>
    </motion.div>
  )
}

export default ListElement