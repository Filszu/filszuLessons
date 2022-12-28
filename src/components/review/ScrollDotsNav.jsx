import React from 'react'
import { motion } from 'framer-motion'
import './review.css'



function ScrollDotsNav({items,curr}) {
    console.log(`curr = ${curr}`)

  return (
    <motion.section className='reviewCard__nav'>
        {items.map((item)=>
            <Dot key={item.id} active={item.id==curr?true:false}/>
        )}
    </motion.section>
  )
}


const Dot = ({active=false}) => {
  return (
    // Dot:{active}
    <motion.div className={`reviewCard__nav__dot ${active?"reviewCard__nav__dot--active":""}`} 
    animate={{ scale: 1.2 }}
    
//     transition={{ type: "spring",
//     stiffness: 2000,
   
// }}
    ></motion.div>
  )
}



export default ScrollDotsNav