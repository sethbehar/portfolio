import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../styles/Mail.css';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        user_name: '',
        user_email: '',
        message: '',
    });

    // Handler to update state on input change
    const handleChange = (e) => {
        const { name, value } = e.target;  // Destructuring for better readability
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Function to send email
    const sendEmail = (e) => {
        e.preventDefault();

        // Destructuring the environment variables for clarity and to avoid typos
        const { SERVICE_ID, TEMPLATE_ID, USER_ID } = process.env;

        // The form element needs to be passed correctly to sendForm
        const form = e.target;

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form, USER_ID)
            .then((result) => {
                console.log('Email successfully sent!', result.text);
                alert('Email sent successfully!'); // Provide UI feedback
            }, (error) => {
                console.log('Failed to send the email:', error.text);
                alert('Failed to send email. Please try again later.'); // Provide UI feedback
            });
    };

    return (
        <form onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="user_name" value={formData.user_name} onChange={handleChange} />

            <label>Email</label>
            <input type="email" name="user_email" value={formData.user_email} onChange={handleChange} />

            <label>Message</label>
            <textarea name="message" value={formData.message} onChange={handleChange} />

            <button type="submit">Send</button>
        </form>
    );
};

export default ContactForm;
