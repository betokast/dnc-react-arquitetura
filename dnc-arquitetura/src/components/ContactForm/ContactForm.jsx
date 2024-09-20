import { useState, useEffect } from 'react';
import Button from '../Button/Button';
import './ContactForm.css';

function ContactForm() {

    const [ isFormValid, setIsFormValid ] = useState(false);
    const [ formData, setFormData ] = useState({
        name: '',
        email: '',
        message: ''
    })
    //Função de submit:
    const handleSubmit = async (event) => {
        event.preventDefault();
        if(isFormValid) {
            null;
        }
    }

    useEffect(() => {
        const isValidEmail = (email) => {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
            return emailRegex.test(email)
        }

        const isValid = formData.name.trim() &&
            formData.email.trim() &&
            isValidEmail(formData.email) &&
            formData.message.trim()

        setIsFormValid(isValid)
    },[formData])

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

  return (
    <div className="contact-form d-flex fd-column al-center">
      <h2>We love meeting new people and helping them.</h2>
      <form action="">
        <div className="d-flex form-group">
            <input
                className='form-input'
                type="text"
                id='name'
                name='name'
                placeholder='Name *'
                // value={}
                onChange={handleChange}
            />
            <input
                className='form-input'
                type="email"
                id='email'
                name='email'
                placeholder='Email *'
                // value={}
                onChange={handleChange}
            />
        </div>
        <div className='d-flex form-group'>
            <textarea
                className="form-input"
                name="message"
                id="message"
                placeholder='Mensagem *'
                rows="4"
                onChange={handleChange}
            />
        </div>
        <div className='al-center d-flex jc-end form-group'>
            <Button type="submit" buttonStyle="secondary" disabled={!isFormValid}>
                Enviar
            </Button>
        </div>
      </form>
    </div>
  )
}

export default ContactForm;