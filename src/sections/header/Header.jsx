import React from 'react'
import {motion} from 'framer-motion'

import {planetVariants,fadeIn,slideIn,filszuFadeIn,staggerContainer} from '../../utils/motion'

// imports img
import filip2 from '../../assets/img/filszuOK2.png'


import './header.css'

import { ListElement } from '../../components'

function Header({content}) {
  return (
    <header className='app__header fullScreenSection'>
        <motion.div
             variants={staggerContainer}
             initial="hidden"
             whileInView="show"
             viewport={{ once: false, amount: 0.25 }}

             
             
             className='app__header__intro'
        >
            <div className='app__header__intro__greeting'>
                
                <motion.h1
                    // variants={slideIn('down','spring',1,1)}
                    variants={fadeIn('down', 'spring', 1.5, 1)}

                >{content.title}</motion.h1>

                {/* separate to another gtid elemnts */}
                
                <motion.h2
                     variants={fadeIn('down', 'spring', 1.6,1)}
                >{content.subtitle}</motion.h2>
                <ul>
                    {content.list.map((content, index) => (<ListElement
                        key={index}
                        el={content}
                        showPrefix={true}
                        index={index + 1}
                    
                    />))}
                </ul>
                
              
            </div>
            
            <div className='app__header__intro-bigFilszu'>
        

            
            <motion.div
                // variants={planetVariants('right')}
                variants={filszuFadeIn()}
                // initial="hidden"
                // exit="exit"
                
                
                >
                <img src={filip2} alt="Me - Filip Filszu Szumowski" />

            </motion.div>
            </div>

        </motion.div>
    </header>
  )
}

export default Header