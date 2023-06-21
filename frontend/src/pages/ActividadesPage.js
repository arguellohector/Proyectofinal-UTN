import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/components/pages/ActividadesPage.css';



const ActividadesPage = (props) => {

    const phoneNumber = 12345678;

    const sliderData = [
        {
            image: "/images/actividades/Padel.png",
            caption: "Nuestras canchas de Padel",
            description: "Inauguramos nuevas canchas de padel con el mejor cesped para que practiques este hermoso deporte de la mejor forma"
        },
        {
            image: "/images/actividades/LaPalmera.png",
            caption: "Bar la Palmera",
            description: "Nuestro Bar la Palmera está pensado para tener vista a las canchas de tenis disfrutando las comidas y bebidas tan ricas que ofrecemos"
        },
        {
            image: "/images/actividades/Tenis.jpg",
            caption: "Nuestras canchas de tenis",
            description: "Disponemos de 4 canchas de tenis de polvo de ladrillo para que vengas a practicar y/o tomar clases o para que vengas a jugar"
        },
        {
            image: "/images/actividades/Futbol.jpg",
            caption: "Asi se ven nuestras canchas de futbol",
            description: "Gracias a la ayuda de todos pudimos instalar césped sintético en todas nuestras canchas para mantener una óptima calidad de juego"
        },
        // Agrega más objetos según sea necesario
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className="actividades-page">
            <Slider {...settings}>
                {sliderData.map((item, index) => (
                    <div key={index}>
                        <img src={item.image} alt={item.caption} />
                        <h3>{item.caption}</h3>
                        <p>{item.description}</p>
                    </div>
                ))}
            </Slider>
            
           
        </div>

    );


}

export default ActividadesPage;
