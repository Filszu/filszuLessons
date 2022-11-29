import React from 'react'
import {motion} from 'framer-motion'

import {planetVariants,fadeIn,filszuFadeIn,staggerContainer} from '../../utils/motion'

// imports img
import filip1 from '../../assets/img/filszuOK.png'


import './header.css'

function Header() {
  return (
    <header className='app__header'>
        <motion.div
             varaints={staggerContainer}
             initial="hidden"
             whileInView="show"
             viewport={{once:false, amount:0.25}}
             className='app__header__intro'
        >
            <div></div>
            <motion.div 
                // variants={filszuFadeIn()}
                variants={filszuFadeIn()}
                
                className='app__header__intro-bigFilszu'>
                <img src={filip1} alt="Me - Filip Filszu Szumowski" />

            </motion.div>

        </motion.div>
    </header>
  )
}

export default Header