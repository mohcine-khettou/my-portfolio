import React from 'react'
import styles from './styles.module.scss'
import Image from 'next/image'
import {Linkedin , Github , Twitter} from '@/app/assets/icons'

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
        <div className={styles.card}>
            <div>
                <div></div>
                <Image
                  src={'/assets/sidebar/me-transparent.png'}
                  alt='mohcine-picture'
                  width={400}
                  height={420}
                /> 
            </div>
            <h1>
                Mohcine KHETTOU
            </h1>
            <div className={styles.social}>
                <span>
                    <Linkedin />
                </span>
                <span>
                    <Github />
                </span>
                <span>
                    <Twitter />
                </span>
            </div>
            <button>
                Click me
            </button>
        </div>
    </aside>
  )
}

export default Sidebar
