import React, { useEffect, useState, useRef } from 'react';
import { Link } from "react-router-dom";
import logoNel from "../../img/logosinfondo_5.png";
import nelAnimation from "../../img/imagen Nel_animation.gif";
import anime from 'animejs/lib/anime.es.js';
import { useAnimation } from "../component/animationContext";
import "../../styles/aboutMe.css";

export const AboutMe = () => {
  const { animationState, setAnimationState } = useAnimation();
  const [isFlipped, setIsFlipped] = useState(false);
  const infoContainerRef = useRef(null);
  const cardContainerRef = useRef(null);

  const animationDuration = animationState.about ? 2000 : 0;
  const staggerDelay = animationState.about ? 200 : 0;

  useEffect(() => {
    const isSmallScreen = window.matchMedia("(max-width: 1025px)").matches;

    if (animationState.about) {
      anime({
        targets: ".about-title-text",
        opacity: [0, 1],
        translateY: [-20, 0],
        easing: "easeInOutQuad",
        duration: animationDuration,
        delay: 2000,
      }).finished.then(() => {
        if (isSmallScreen) {
          animateSmallScreen();
        } else {
          animateLargeScreen();
        }
      });
    }
  }, [animationState.about, setAnimationState, animationDuration, staggerDelay]);

  const animateSmallScreen = () => {
    const headings = document.querySelectorAll(".about-description-container h5, .about-description-container h4");
    anime({
      targets: headings,
      opacity: [0, 1],
      translateX: [-50, 0],
      easing: "easeInOutQuad",
      duration: animationDuration,
      delay: anime.stagger(staggerDelay),
    }).finished.then(() => {
      const devElement = document.querySelector(".about-heading-large");
      if (devElement) {
        const text = " Desarrollador Full Stack.";
        devElement.innerHTML = "";
        let index = 0;

        const typeEffect = () => {
          if (index < text.length) {
            devElement.innerHTML += text[index];
            index++;
            setTimeout(typeEffect, 50);
          } else {
            anime({
              targets: ".about-paragraph",
              opacity: [0, 1],
              translateX: [-50, 0],
              easing: "easeInOutQuad",
              duration: animationDuration,
            }).finished.then(() => {
              anime({
                targets: cardContainerRef.current,
                opacity: [0, 1],
                easing: "easeInOutQuad",
                duration: 1000,
              }).finished.then(() => {
                anime({
                  targets: ".nav-link",
                  opacity: [0, 1],
                  translateX: [-50, 0],
                  easing: "easeInOutQuad",
                  duration: animationDuration,
                  delay: anime.stagger(staggerDelay),
                }).finished.then(() => {
                  setAnimationState((prev) => ({ ...prev, about: false }));
                });
              });
            });
          }
        };
        typeEffect();
      }
    });
  };

  const animateLargeScreen = () => {
    const infoContainer = infoContainerRef.current.getBoundingClientRect();
    const cardContainer = cardContainerRef.current.getBoundingClientRect();
    const translateXToCenter = (infoContainer.width - cardContainer.width) / 2 - cardContainer.x + infoContainer.x;

    anime({
      targets: cardContainerRef.current,
      translateX: translateXToCenter,
      opacity: 0,
      easing: "easeInOutQuad",
      duration: animationDuration,
    }).finished.then(() => {
      anime({
        targets: cardContainerRef.current,
        opacity: [0, 1],
        easing: "easeInOutQuad",
        duration: 1000,
      }).finished.then(() => {
        setTimeout(() => {
          setIsFlipped(true);
          anime({
            targets: cardContainerRef.current,
            translateX: 0,
            easing: "easeInOutQuad",
            duration: animationDuration,
          }).finished.then(() => {
            setIsFlipped(false);

            const headings = document.querySelectorAll(".about-description-container h5, .about-description-container h4");
            anime({
              targets: headings,
              opacity: [0, 1],
              translateX: [-50, 0],
              easing: "easeInOutQuad",
              duration: animationDuration,
              delay: anime.stagger(staggerDelay),
            }).finished.then(() => {
              const devElement = document.querySelector(".about-heading-large");
              if (devElement) {
                const text = " Desarrollador Full Stack.";
                devElement.innerHTML = "";
                let index = 0;

                const typeEffect = () => {
                  if (index < text.length) {
                    devElement.innerHTML += text[index];
                    index++;
                    setTimeout(typeEffect, 50);
                  } else {
                    anime({
                      targets: ".about-paragraph",
                      opacity: [0, 1],
                      translateX: [-50, 0],
                      easing: "easeInOutQuad",
                      duration: animationDuration,
                      delay: 200,
                    }).finished.then(() => {
                      anime({
                        targets: ".nav-link",
                        opacity: [0, 1],
                        translateX: [-50, 0],
                        easing: "easeInOutQuad",
                        duration: animationDuration,
                        delay: anime.stagger(staggerDelay),
                      }).finished.then(() => {
                        setAnimationState((prev) => ({ ...prev, about: false }));
                      });
                    });
                  }
                };
                typeEffect();
              }
            });
          });
        }, 500);
      });
    });
  };

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="about-container">
      <div className="inner-frame">
        <div className="title-container">
          <h1 className="about-title-text" style={{ opacity: animationState.about ? 0 : 1 }}>Sobre mí</h1>
        </div>

        <div className="info-container" ref={infoContainerRef}>
          <div className="about-description-container">
            <h5 className="about-heading-poppins" style={{ opacity: animationState.about ? 0 : 1 }}>¡Hola! Mi nombre es</h5>
            <h4 className="about-title" style={{ opacity: animationState.about ? 0 : 1 }}>Nelson Valero</h4>
            <h5 className="about-heading" style={{ display: 'inline', opacity: animationState.about ? 0 : 1 }}>
              <span className="about-heading-poppins">y soy</span>
              <span className="about-heading-large">
                {animationState.about ? "" : " Desarrollador Full Stack."}
              </span>
            </h5>
            <p className="about-paragraph" style={{ opacity: animationState.about ? 0 : 1 }}>
              Os doy la bienvenida a mi portfolio para que podáis saber más sobre mí.<br />
              Disfruto trabajando con tecnologías como <span className="highlight">JavaScript</span>, <span className="highlight">Python</span> y <span className="highlight">React</span>. También aplico mis
              conocimientos en optimización de procesos y en la gestión de bases de datos
              relacionales entre otras habilidades.<br />
              Estoy comprometido con el aprendizaje continuo para aplicarlo en equipos de desarrollo, así puedo seguir creciendo dentro del sector tecnológico.
            </p>
          </div>

          <div className="card-container" ref={cardContainerRef} onClick={handleCardClick} style={{ opacity: animationState.about ? 0 : 1 }}>
            <div className={`card ${isFlipped ? 'flipped' : ''}`}>
              <div className="card-inner">
                <div className="card-front">
                  <img src={logoNel} alt="Logo Nelson Valero" className="card-logo" />
                </div>
                <div className="card-back">
                  <img src={nelAnimation} alt="Nelson Valero" className="about-image" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="link-container">
          <a 
            href="/NelsonValeroCV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link"
            style={{ opacity: animationState.about ? 0 : 1 }}
          >
            Ver CV
          </a>
          <Link to="/" className="nav-link" style={{ opacity: animationState.about ? 0 : 1 }}>Inicio</Link>
          <Link to="/skills" className="nav-link" style={{ opacity: animationState.about ? 0 : 1 }}>Habilidades</Link>
          <Link to="/projects" className="nav-link" style={{ opacity: animationState.about ? 0 : 1 }}>Proyectos</Link>
          <Link to="/contact" className="nav-link" style={{ opacity: animationState.about ? 0 : 1 }}>Contacto</Link>
        </div>
      </div>
    </div>
  );
};
