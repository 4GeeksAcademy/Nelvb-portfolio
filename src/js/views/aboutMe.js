import React from "react";
import "../../styles/aboutMe.css";

export const AboutMe = () => (
  <div className="container-fluid home-container d-flex align-items-center justify-content-center">
    <div className="row inner-frame justify-content-center">
      {/* Contenido de la sección About Me */}
      <div className="col-12 text-center">
        <h1 className="title-text">Sobre Mí</h1>
      </div>
      <div className="col-10 mt-4">
        <p className="about-text">
          {/* Texto de ejemplo sobre el autor */}
          Soy un desarrollador Full Stack apasionado por construir aplicaciones
          web funcionales y atractivas. A lo largo de mi formación, he
          trabajado con tecnologías como React, Flask, y bases de datos
          relacionales para crear proyectos que combinan diseño y
          funcionalidad.
        </p>
      </div>
    </div>
  </div>
);