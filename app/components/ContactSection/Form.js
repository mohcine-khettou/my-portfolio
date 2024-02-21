'use client'
import React, { useState } from 'react'
import sendEmail from './action'
import Dialog from '@/app/components/Dialog'
const initialFormFields = {
    name: '',
    email: '',
    subject: '',
    message: '',
    phone: ''
}

const Form = () => {
    const [formFields, setFormFields] = useState(initialFormFields)
    const [message, setMessage] = useState({ show: false, success: false, content: '' })
    const closeDialog = () => {
        setMessage({ success: false, content: '', show: false })
    }
    const handleChange = (e) => {
        setFormFields({ ...formFields, [e.target.name]: e.target.value })
    }
    const handleSubmit = async(e) => {
        e.preventDefault()
        if (!formFields.name || !formFields.email || !formFields.subject || !formFields.message) {
            setMessage({ show: true, success: false, content: 'Please fill out all the fields' })
            return;
        }
        const {data , error} = await sendEmail(formFields)
        if(error){
             setMessage({ show: true, success: false, content: error.msg })
             return ; 
        }
        setMessage({ show: true, success: true, content: 'your message is successfully sent' })
        setFormFields(initialFormFields)

    }
  return (
    <>
        {
                message.show && 
                <Dialog message={message} closeDialog={closeDialog} />
        }
        <form onSubmit={handleSubmit}>
            <div>
                <div className="form-control">
                    <label htmlFor='name'> name </label>
                    <input 
                        type="text" 
                        name="name" id="name" 
                        className='form-input'
                        onChange={handleChange}
                        value={formFields.name}
                    />
                </div>
                <div className="form-control">
                    <label htmlFor='email'> email</label>
                    <input 
                        type="email" name="email" id="email" className='form-input' onChange={handleChange}
                        value={formFields.email} />
                </div>
            </div>
            <div>
                <div className="form-control">
                    <label htmlFor='phone'> phone </label>
                    <input type="phone" name="phone" id="phone" className='form-input' value={formFields.phone} onChange={handleChange} />
                </div>
                <div className="form-control">
                    <label htmlFor='subject'> subject</label>
                    <input type="text" name="subject" id="subject" className='form-input' onChange={handleChange} value={formFields.subject} />    
                </div>  
            </div>
            <div className="form-control" style={{gridTemplateColumns : '1fr'}}>
                <label htmlFor='message'> message</label>
                <textarea 
                    rows="5" 
                    className='form-input' 
                    onChange={handleChange} 
                    name="message" id="message" value={formFields.message} >
                </textarea>
            </div>
            <button className='btn' type="submit"> submit</button>
        </form>
    </>
     
  )
}

export default Form
