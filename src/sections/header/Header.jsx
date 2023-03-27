import React from 'react'
import {motion} from 'framer-motion'

import {fadeIn,filszuFadeIn,slideIn,staggerContainer, zoomIn} from '../../utils/motion'

// imports img
import filszuOK from '../../assets/img/filszuOK2min.png'


import './header.css'

import { ListElement } from '../../components'

function Header({content}) {

    // another animation delay time for mobile
const isMobile = window.innerWidth <= 1024;

  return (
    <header className='app__header' id="header"> 
    {/* fullScreenSection */}
        <div          
             
             className='app__header__intro'
        >
            <motion.div     
                className='app__header__intro__greeting app__header__intro__greeting-hello'
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
            >
                
                <motion.h1
                    // variants={slideIn('down','spring',1,1)}
                    variants={fadeIn('down', 'spring', isMobile ? 0.1 :1.5, 1)}

                >{content.title}</motion.h1>

                {/* separate to another gtid elemnts */}
                
                <motion.h2
                     variants={fadeIn('down', 'spring', isMobile ? 0.2 :1.6,1)}
                >{content.subtitle}</motion.h2>

                
                
              
            </motion.div>

            
            
            <motion.div 
                className='app__header__intro-bigFilszu'
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                
            >
        

            
                <motion.div
                    // variants={planetVariants('right')}
                    // variants={!isMobile ? filszuFadeIn():zoomIn(0,0.6)}
                    // variants={!isMobile ? filszuFadeIn():slideIn('up','spring',0,2)}
                    variants={!isMobile ? filszuFadeIn():slideIn('up','Tween',0,1)}
                    // initial="hidden"
                    // exit="exit"
                    
                    
                    >
                    <img src={filszuOK} alt="Me - Filip Filszu Szumowski" />

                </motion.div>
            </motion.div>

            <motion.div     
                className='app__header__intro__greeting app__header__intro__greeting-about'
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.35 }}
            >
                
                <motion.h3
                     variants={fadeIn('down', 'spring', isMobile ? 0 :1.8,1)}
                >{content.listTitle}</motion.h3> 
                
                

                <ul>
                    {content.list.map((content, index) => (<ListElement
                        key={index}
                        el={content}
                        showPrefix={true}
                        index={index + 1}
                        baseDelay={isMobile ? 0.2 : undefined}
                    
                    />))}
                </ul>

            </motion.div>


        </div>
    </header>
  )
}

export default Header