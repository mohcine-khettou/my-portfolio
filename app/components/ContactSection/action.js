'use server'
import nodemailer from 'nodemailer'
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'mohcinejobs@gmail.com',
        pass: 'qcub rnog twee rvsy',
    },
});


const sendEmail = async (credentials)=>{
    if (!credentials?.name || !credentials?.email || !credentials?.subject || !credentials?.message) {
        return {data : null , error : {
            status : 401 , 
            msg : 'Please fill out all the fields'
        }}
    }
    const {name , email , subject , message}= credentials
    const mailOptions = {
        from: '"portfolio" " <mohcinejobs@gmail.com>"',
        to: 'mohcinejobs@gmail.com', // Your Gmail address
        subject,
        text: `name: ${name}\nemail : ${email}\nmessage : ${message}`,
    };
    try {
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully');
    } catch (error) {
        console.error('Error sending email:', error);
        return {
            data : null , 
            error : {
                status : 500 , 
                 msg: 'Something went wrong please try again later'
            }
        }
    }
    return {
        error : null , 
        data : { msg: 'sending is done' }
    }
}


export default sendEmail