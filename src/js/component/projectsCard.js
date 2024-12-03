import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAnimation } from "./animationContext"; // Importar el contexto

export const ProjectsCard = ({ id, backgroundImage, name, description }) => {
  const navigate = useNavigate();
  const { animationState, setAnimationState } = useAnimation(); // Acceder al estado del contexto
  const [isFirstLoad, setIsFirstLoad] = useState(animationState.projects);

  useEffect(() => {
    if (isFirstLoad) {
      const timer = setTimeout(() => {
        setIsFirstLoad(false);
        setAnimationState((prev) => ({ ...prev, projects: false })); // Actualizar el estado en el contexto
      }, 4000);
      return () => clearTimeout(timer); // Limpieza al desmontar
    }
  }, [isFirstLoad, setAnimationState]);

  return (
    <div
      className="project-card"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div
        className="content-card"
        style={{
          opacity: isFirstLoad ? 0 : 1,
          transition: isFirstLoad ? "none" : "opacity 1s ease, transform 1s ease",
          transform: isFirstLoad ? "translateY(20px)" : "translateY(0)",
        }}
      >
        <div className="name">{name}</div>
        <div className="des">{description}</div>
        <button onClick={() => navigate(`/project/${id}`)}>Ver más</button>
      </div>
    </div>
  );
};