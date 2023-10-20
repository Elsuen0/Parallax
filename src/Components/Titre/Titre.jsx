import React, { useEffect, useRef } from "react";
import styles from "./Titre.module.scss";
import Rellax from "rellax";

const Titre = () => {
  const rellaxRef = useRef(null);

  useEffect(() => {
    const rellax = new Rellax(rellaxRef.current, {
      speed: -5,
    });

    {
      /*const handleScroll = () => {
      const scrollTop = window.scrollY;
      const element = document.getElementById("titleBox");
      const elementHeight = element.clientHeight;

      // Calculez l'opacité en fonction de la position de défilement
      const opacity = Math.max(0, (300 - scrollTop) / elementHeight).toFixed(2);

      element.style.opacity = opacity;

      // Mettez à jour l'animation
      if (opacity === 0) {
        element.style.animationName = "none"; // Désactivez l'animation lorsque l'opacité est à 0
      } else {
        element.style.animationName = "slideIn"; // Réactivez l'animation lorsque l'opacité n'est pas à 0
        element.style.top = "40%";
      }
    };

    window.addEventListener("scroll", handleScroll);*/
    }

    return () => {
      rellax.destroy();
      {
        /*window.removeEventListener("scroll", handleScroll)*/
      }
    };
  }, []);

  return (
    <div className={styles.textContainer} ref={rellaxRef} id="titleBox">
      <h1>Nepal Mountains</h1>
      <h2>Visit the most beautiful mountains in the world</h2>
    </div>
  );
};

export default Titre;
