// eslint-disable-next-line no-unused-vars
import { useState, useEffect } from 'react';
import Button from '../Button/Button';
import './ContactForm.css';

function ContactForm() {
    // eslint-disable-next-line no-unused-vars
    const [ isFormValid, setIsFormValid ] = useState(false);

    //Função de submit:
    // eslint-disable-next-line no-unused-vars
    const handleSubmit = async (event) => {
        event.preventDefault();
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
                // onChange={}
            />
            <input
                className='form-input'
                type="email"
                id='email'
                name='email'
                placeholder='Email *'
                // value={}
                // onChange={}
            />
        </div>
        <div className='d-flex form-group'>
            <textarea
                className="form-input"
                name="message"
                id="message"
                placeholder='Mensagem *'
                rows="4"
            />
        </div>
        <div className='al-center d-flex jc-end form-group'>
            <Button type="submit" buttonStyle="secondary">
                Enviar
            </Button>
        </div>
      </form>
    </div>
  )
}

export default ContactForm;