import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import '../styles/hero.scss'



import React from 'react'

const Hero = () => {
  return (
   <section className='relative h-screen w-full mx-auto'>
 <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 `}
      >
        <div className='flex flex-col justify-center items-center mt-4'>
          <div className='w-5 h-5 rounded-full bg-[#4d63ee]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h2 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='title'>Amir</span>
          </h2>
          <h1 className={`${styles.heroSubText} mt-2  text-[#4c61eb]`}>
            Front End Developer
          </h1>
          <h2 className={`${styles.BelowHeroSubText} mt-1  text-white-100`}>
            make your amazing Website
          </h2>
        </div>
        
      </div>

      <ComputersCanvas />

      <div className='absolute xs:bottom-9 bottom-24 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[30px] h-[45px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 15, 0],
              }}
              transition={{
                duration: 1.3,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
   </section>
  )
}

export default Hero