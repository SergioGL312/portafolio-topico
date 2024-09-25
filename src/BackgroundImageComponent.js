import React from 'react';
import './BackgroundImageComponent.css'; // Asegúrate de que este archivo contiene los estilos

const BackgroundImageComponent = () => {
  return (
    <div className="background-container">
      <div className="hover-zone">
        <img src={require('./assets/1.png')} alt="Personaje" className="person-image" />

        {/* Área clickable para la cabeza */}
        <div className="clickable-area head">
          <span className="hover-text">Cabeza: Piensa estratégicamente y toma decisiones informadas</span>
        </div>

        {/* Área clickable para el corazón */}
        <div className="clickable-area heart">
          <span className="hover-text">Corazón: Apasionado por su negocio y empático con su equipo</span>
        </div>

        {/* Área clickable para las manos */}
        <div className="clickable-area hands">
          <span className="hover-text">Manos: Trabaja duro y lidera con el ejemplo</span>
        </div>

        {/* Área clickable para los ojos */}
        <div className="clickable-area eyes">
          <span className="hover-text">Ojos: Identifica oportunidades y anticipa tendencias</span>
        </div>

        {/* Área clickable para los oídos */}
        <div className="clickable-area ears">
          <span className="hover-text">Oídos: Escucha activamente a clientes y empleados</span>
        </div>

        {/* Área clickable para los pies */}
        <div className="clickable-area feet">
          <span className="hover-text">Pies: Los mantiene siempre en el suelo, sin dejarse llevar por ideas irreales</span>
        </div>
      </div>
    </div>
  );
};

export default BackgroundImageComponent;
