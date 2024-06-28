import React, { useState } from 'react';
import './styles/ContactForm.css';

function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes manejar el envío del formulario, por ejemplo, enviarlo a una API
        console.log('Form data submitted:', formData);
    };

    return (
        <div className="contact-form-container">
            <dic className="contact-form">
                <h2>Conecta con nuestros expertos en soluciones tecnológicas</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Nombre y Apellido *</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Ej: Chiledev"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="phone">Teléfono *</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="Ej: +569 87654321"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="email">Correo electrónico *</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Ej: hello@childev.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="message">Detalle solicitud</label>
                    <textarea
                        id="message"
                        name="message"
                        placeholder="Déjanos tu comentario y comencemos a planificar tu proyecto"
                        value={formData.message}
                        onChange={handleChange}
                        maxLength="256"
                    />

                    <button type="submit">Enviar</button>
                </form>
            </dic>
        </div>
    )
}

export default ContactForm