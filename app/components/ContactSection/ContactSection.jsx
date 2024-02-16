import { Message } from '@/app/assets/icons'
import React from 'react'
import styles from './styles.module.scss'
const ContactSection = () => {
  return (
    <section className={styles.section}>
        <div className="subtitle">
            <span> <Message />  </span>
            <span>Contact</span>
        </div>
        <h2 className="section-title">
            Let's work <span className="green-text">Together</span>
        </h2>
        <form>
            <div>
                <div className="form-control">
                    <label> name </label>
                    <input type="text" name="name" id="name" className='form-input' />
                </div>
                <div className="form-control">
                    <label> email</label>
                    <input type="email" name="email" id="email" className='form-input' />
                </div>
            </div>
            <div>
                <div className="form-control">
                    <label> phone </label>
                    <input type="phone" name="phone" id="phone" className='form-input' />
                </div>
                <div className="form-control">
                    <label> subject</label>
                    <input type="text" name="subject" id="subject" className='form-input' />    
                </div>  
            </div>
            <div className="form-control">
                <label> message</label>
                <textarea rows="5" className='form-input'></textarea>
            </div>
        </form>
    </section>
  )
}

export default ContactSection
