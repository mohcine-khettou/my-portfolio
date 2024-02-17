import React from 'react'
import styles from './styles.module.scss'
import { Portfolio } from '@/app/assets/icons'
import projects from './projects'
import PortfolioItem from './PortfolioItem'
const ProjectsSection = () => {
  return (
    <section className={styles.section}>
        <div className="subtitle">
            <span><Portfolio /></span>
            <span>Portfolio</span>
        </div>
        <h2 className="section-title">
            featured <span className='green-text'>projects</span>
        </h2>
        <div className="porftolio-items">
            {
                projects.map((project)=>{
                    return <PortfolioItem key={project.id} {...project} />
                })
            }
        </div>
    </section>
  )
}

export default ProjectsSection
