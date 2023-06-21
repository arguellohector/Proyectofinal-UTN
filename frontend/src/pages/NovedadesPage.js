import React, { useState, useEffect } from "react";
import axios from 'axios';
import NovedadItem from "../components/novedades/NovedadItem";



const NovedadesPage = (props) => {

    const phoneNumber= 123456789;

    const [loading, setLoading] = useState(false);
    const [novedades, setNovedades] = useState([]);

    useEffect(() => {
        const cargarNovedades = async () => {
            setLoading(true);
            const response = await axios.get('http://localhost:3000/api/novedades');
            setNovedades(response.data);
            setLoading(false);
        };
        cargarNovedades();
    }, []);

    return (
        <section className="holder">
            <h2>Novedades</h2>
            {loading ? (
                <p>Cargando...</p>
            ) : (
                novedades.map(item => <NovedadItem key={item.id}
                    title={item.titulo} subtitle={item.subtitulo}
                    imagen={item.imagen} body={item.cuerpo} />)
            )}
            <a
                href={`https://api.whatsapp.com/send?phone=${phoneNumber}&text=¡Hola! Quiero comunicarme con alguien del club.`}
                className="floating-whatsapp"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img src="\iconos\wsp.png" alt="WhatsApp" />
                </a>
        </section>
    );
}

export default NovedadesPage;