import React from "react";
import '../styles/components/pages/HomePage.css';

const HomePage = (props) => {
    const phoneNumber = "1234567890"; // Número de teléfono de WhatsApp

    return (
        <main className="holder">

            <div className="columnas">
                <div className="bienvenidos">
                    <h2>Bienvenidos a nuestro Club</h2>
                    <h3>Vision</h3>
                    <p>Mejorar la calida de vida, de la comunidad, y principalmente de los socios.
                        Alejándolos de la vida sedentaria (sillón, control remoto, play,….etc.), y motivarlos hacia un estándar de vida más saludable.</p>
                    <h3>Mision</h3>
                    <p>Valorar la imagen institucional mejorando la vocación y dedicación profesional hacia una mejor contención y desarrollo deportivo a lo largo de las distintas etapas de la vida.
                        Apuntando a ser el único club de ciudad jardín y el mejor de sus alrededores. Destacando valores como el trabajo en equipo, el cultivo de la amistad, familia y pertenecía.</p>
                    <h3>Valores</h3>
                    <p>Formación, superación, amistad, trabajo en equipo y recreación.</p>

                </div>

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

export default HomePage;