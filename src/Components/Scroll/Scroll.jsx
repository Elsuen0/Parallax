import React from "react";
import styles from "./Scroll.module.scss";
import Rellax from "rellax";
import { useRef, useEffect } from "react";

const Scroll = () => {
  const rellaxRef = useRef(null);

  useEffect(() => {
    const rellax = new Rellax(rellaxRef.current, {
      speed: -5,
    });

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const element = document.getElementById("contentScroll");
      const elementHeight = element.clientHeight;

      // Calculez l'opacité en fonction de la position de défilement
      const opacity = Math.max(0, (400 - scrollTop) / elementHeight).toFixed(2);

      element.style.opacity = opacity;

      // Mettez à jour l'animation
      if (opacity === 0) {
        element.style.animationName = "none"; // Désactivez l'animation lorsque l'opacité est à 0
      } else {
        element.style.animationName = "slideIn"; // Réactivez l'animation lorsque l'opacité n'est pas à 0
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      rellax.destroy();
    };
  }, []);
  return (
    <div className={styles.scroll}>
      <div className={styles.contentScroll} ref={rellaxRef} id="contentScroll">
        <div className={styles.text}>
          <p>SCROLL</p>
        </div>

        <div className={styles.mouseLogo}>
          <img src="./Mouse.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Scroll;
