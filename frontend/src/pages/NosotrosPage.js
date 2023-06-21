import React from "react";
import './../styles/components/pages/NosotrosPage.css';

const NosotrosPage = (props) => {

    const phoneNumber= 12345678;
    return (
        <main className="holder">
            <div className="historia">
                <h2>Nuestra Historia</h2>
                <p>Un 12 de enero de 1945 nació la Asociación de Fomento Amigos de la Ciudad Jardin Lomas del Palomar.
                    Desde ese momento, además de las actividades propias, colaboró activamente en la zona con iniciativas urbanísticas que mejoraron la vida cotidiana,
                    como la creación de escuelas, jardines de infantes, bibliotecas, bomberos voluntarios, salas de salud, bancos y destacamentos policiales.
                    Hoy Afalp cumple 75 años y forma parte de la identidad de Ciudad Jardín</p>
                <p>Un club de barrio no sólo es un espacio para hacer deportes, sino que también cumple un rol social al transmitir valores, principios y encuentro. Allí se forjaron amistades, grupos de pertenencia y hasta surgieron historias de amor en sus famosos carnavales.
                    Quiero felicitar a toda la comunidad verde por mantenerse vigente durante tantos años acompañando a los vecinos del barrio. El Afalp es sinónimo de Ciudad Jardín.</p>
            </div>
            <div>
                <div className="staff">
                    <h2>Nuestro staff</h2>
                    <div className="comision">
                        <div className="comisionn">
                            <img src="\images\nosotros\comision.png" alt="imagen de la comision" />
                            
                       </div>
                    </div>
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

export default NosotrosPage;