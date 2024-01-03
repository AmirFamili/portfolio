import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import '../styles/hero.scss'



import React from 'react'

const Hero = () => {
  return (
   <section className='relative h-screen w-full mx-auto'>
 <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#4d63ee]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h2 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='title'>Amir</span>
          </h2>
          <h1 className={`${styles.heroSubText} mt-3  text-[#4d63ee]`}>
            Front End Developer
          </h1>
          <h2 className={`${styles.BelowHeroSubText} mt-2  text-white-100`}>
            make your amazing Website
          </h2>
        </div>
        
      </div>

      <ComputersCanvas />
   </section>
  )
}

export default Hero