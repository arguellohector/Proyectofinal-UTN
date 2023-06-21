import React from "react";
import '../styles/components/pages/ContactoPage.css';
import { useState } from "react";
import axios from "axios";

const ContactoPage = (props) => {
    const phoneNumber = "1234567890"; // Número de teléfono de WhatsApp

    const handleWhatsAppClick = () => {
        // Genera el enlace directo a WhatsApp con el número de teléfono y el mensaje predefinido
        const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=¡Hola! Quiero comunicarme con alguien del club.`;
        window.open(whatsappLink, "_blank");
    };

    const initialForm = {
        nombre: '',
        email: '',
        telefono: '',
        mensaje: ''
    }

    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value
        }));
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true)
        const response = await axios.post('http://localhost:3000/api/contacto', formData);
        setSending(false);
        setMsg(response.data.message);
        if (response.data.error === false) {
            setFormData(initialForm)
        }
    }

    return (
        <main className="holder contacto">
            <div>
                <h2>Contacto Rápido</h2>
                <form action="/contacto" method="post" className="formulario" onSubmit={handleSubmit}>
                    <p>
                        <label for="nombre">Nombre</label>
                        <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} />
                    </p>
                    <p>
                        <label for="email">Email</label>
                        <input type="text" name="email" value={formData.email} onChange={handleChange} />
                    </p>
                    <p>
                        <label for="telefono">Teléfono</label>
                        <input type="text" name="telefono" value={formData.telefono} onChange={handleChange} />
                    </p>
                    <p>
                        <label for="mensaje">Mensaje</label>
                        <textarea name="mensaje" value={formData.mensaje} onChange={handleChange}></textarea>
                    </p>
                    <p class="acciones"><input type="submit"
                        value="Enviar" />
                    </p>
                    {sending ? <p>Enviando...</p> : null}
                    {msg ? <p>{msg}</p> : null}
                </form>
            </div>
            <div class="datos">
                <h2>Comunicate con nosotros para saber lo que necesites</h2>
                <p>Estos son nuestros medios de contacto</p>
                <ul>
                    <li>Telefono</li>
                    <li>Email: info@afalp.com.ar</li>
                    <li>Facebook: </li>
                    <li>Twitter: </li>
                    <li><button className="whatsapp-button" onClick={handleWhatsAppClick}>
                        Nuestro whatsapp
                    </button></li>
                </ul>
            </div>
            <a
                href={`https://api.whatsapp.com/send?phone=${phoneNumber}&text=¡Hola! Quiero comunicarme con alguien del club.`}
                className="floating-whatsapp"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img src="\iconos\wsp.png" alt="WhatsApp" />
            </a>
        </main>
    );
}

export default ContactoPage;