import React from 'react'
import {Home} from '@/app/assets/icons'
import styles from './styles.module.scss'
const HeroSection = () => {
  return (
    <section className={styles.section}>
        <div className="subtitle">
            <span> <Home />  </span>
            <span>Introduce</span>
        </div>
        <h1>
            Experienced Full-Stack <br /> <span>web Developer</span>  Ready to Elevate Your Projects
        </h1>
        <p>
            I&apos;m a dedicated full-stack developer with a fervent passion for web development. My mission is to be a trusted partner for businesses in achieving online success.
        </p>
    </section>
  )
}

export default HeroSection
