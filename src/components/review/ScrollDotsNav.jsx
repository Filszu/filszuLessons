import React from 'react'
import { motion } from 'framer-motion'

function ScrollDotsNav({items,curr}) {
    console.log(`curr = ${curr}`)

  return (
    <motion.section>
        {items.map((item)=>
            <Dot key={item.id} active={item.id==curr?"true":"false"}/>
        )}
    </motion.section>
  )
}


const Dot = ({active="false"}) => {
  return (
    <motion.div>Dot:{active}</motion.div>
  )
}



export default ScrollDotsNav