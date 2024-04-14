import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Box from './Box';  // Make sure the path is correct
import '../styles/Mail.css'

const ContactForm = ({ renderMailForm }) => {
    const [formData, setFormData] = useState({
        user_name: '',
        user_email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const sendEmail = (e) => {
        e.preventDefault();

        const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
        const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
        const userId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;

        if (!serviceId || !templateId || !userId) {
            alert('The service configuration is not correct!');
            return;
        }

        const form = e.target;

        emailjs.sendForm(serviceId, templateId, form, userId)
            .then((result) => {
                console.log('Email successfully sent!', result.text);
                alert('Email sent successfully!');
                setFormData({ user_name: '', user_email: '', message: '' });  // Reset form state instead of form DOM
            }, (error) => {
                console.error('Failed to send the email:', error.text);
                alert('Failed to send email. Please try again later.');
            });
    };

    return (
        <Box color="white" animationVariant="fromLeft">
            <form onSubmit={sendEmail} className='form-container no-select'>
                <label>Name</label>
                <input type="text" name="user_name" className='input' value={formData.user_name} onChange={handleChange} />

                <label>Email</label>
                <input type="email" name="user_email" className='input' value={formData.user_email} onChange={handleChange} />

                <label>Message</label>
                <input name="message" value={formData.message} onChange={handleChange} />

                <div className='buttons'>
                    <button className='form-btn' type='button' onClick={renderMailForm}>X</button>
                    <button className='form-btn' type="submit">Send</button>
                </div>
            </form>
        </Box>
    );
};

export default ContactForm;
