import { useState, useEffect } from 'react';
import Button from '../Button/Button';
import './ContactForm.css';

function ContactForm() {
    const [ formData, setFormData ] = useState({
        name: '',
        email: '',
        message: ''
    })
    const [ isFormValid, setIsFormValid ] = useState(false);
    const [ formSubmitLoading, setFormSubmitLoading ] = useState(false);
    const [ formSubmitted, setFormSubmitted ] = useState(false);

    //Função de submit:
    const handleSubmit = async (event) => {
        event.preventDefault(); //Prevenção do disparo padrão ao clicar no submit
        if(isFormValid) {
            setFormSubmitLoading(true);
            try {
                const response = await fetch('https://api.web3forms.com/submit', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({...formData, access_key: "95407290-0247-431d-a36d-da1a07411b01"})
                })

                if(response.ok) {
                    setFormSubmitted(true);
                } else {
                    alert('Erro ao enviar!');
                }
            }catch(event) {
                alert(`Error: ${event}`)
            }finally {
                setFormSubmitLoading(false);
            }
        }
    }

    useEffect(() => {
        const isValidEmail = (email) => {
            const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/
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
      <form action="" onSubmit={handleSubmit}>
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
            {formSubmitted && <p className='text-primary'>Formulário enviado com sucesso</p>}
            <Button type="submit" buttonStyle="secondary" disabled={ !isFormValid || formSubmitLoading}>
                Enviar
            </Button>
        </div>
      </form>
    </div>
  )
}

export default ContactForm;