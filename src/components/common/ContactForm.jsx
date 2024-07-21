import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './styles/ContactForm.css';

function ContactForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [status, setStatus] = useState('');

    const onSubmit = async (data) => {
        try {
            const response = await fetch('https://formspree.io/f/movajvag', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                setStatus('SUCCESS');
            } else {
                setStatus('ERROR');
            }
        } catch (error) {
            setStatus('ERROR');
        }
    };

    return (
        <div className="contact-form-container">
            <div className="contact-form">
                <h2>Conecta con nuestros expertos en soluciones tecnológicas</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="name">Nombre y Apellido *</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Ej: Chiledev"
                        {...register("name", {
                            required: "Este campo es obligatorio",
                            pattern: {
                                value: /^[a-zA-Z]{3,15}\s[a-zA-Z]{2,15}$/,
                                message: "Un nombre y Un apellido (Sin tilde)"
                            }
                        })}
                    />
                    {errors.name && <p>{errors.name.message}</p>}

                    <label htmlFor="phone">Teléfono *</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="Ej: +56987654321"
                        {...register("phone", {
                            required: "Este campo es obligatorio",
                            minLength: {
                                value: 10,
                                message: "El número de teléfono debe tener al menos 10 caracteres"
                            }
                        })}
                    />
                    {errors.phone && <p>{errors.phone.message}</p>}

                    <label htmlFor="email">Correo electrónico *</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Ej: hello@childev.com"
                        {...register("email", {
                            required: "Este campo es obligatorio",
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: "El correo electrónico debe tener un formato válido"
                            }
                        })}
                    />
                    {errors.email && <p>{errors.email.message}</p>}

                    <label htmlFor="message">Detalle solicitud</label>
                    <textarea
                        id="message"
                        name="message"
                        placeholder="Déjanos tu comentario y comencemos a planificar tu proyecto"
                        {...register("message", {
                            required: "Este campo es obligatorio",
                            minLength: {
                                value: 10,
                                message: "El comentario debe tener al menos 10 caracteres"
                            },
                            maxLength: {
                                value: 300,
                                message: "El comentario no puede tener más de 300 caracteres"
                            }
                        })}
                    />
                    {errors.message && <p>{errors.message.message}</p>}

                    <button type="submit">Enviar</button>
                </form>
                {status === 'SUCCESS' && <p>¡Gracias! Tu mensaje ha sido enviado.</p>}
                {status === 'ERROR' && <p>Hubo un error. Por favor, intenta de nuevo.</p>}
            </div>
        </div>
    );
}

export default ContactForm;
