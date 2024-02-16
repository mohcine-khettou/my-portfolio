import { User } from '@/app/assets/icons'
import React from 'react'
import styles from './styles.module.scss'
const AboutSection = () => {
  return (
    <section className={styles.section}>
       <div className="subtitle">
            <span> <User />  </span>
            <span> About Me</span>
        </div>
        <h2 className='section-title'>
            i craft wonderful <br />
            <span className='green-text'>digital experiences</span>
              <br /> for brands
        </h2>
        <p>
            More than just lines of code, I craft interactive experiences that captivate audiences and drive results. As a full-stack developer, I bridge the gap between design and functionality, ensuring your website is both visually stunning and user-friendly. Let&apos;s collaborate and unlock your online potential.
        </p>
    </section>
  )
}

export default AboutSection
