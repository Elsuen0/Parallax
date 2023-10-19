import React, { useEffect, useRef, useState } from "react";
import styles from "./App.module.scss";
import Test from "../BlocTest/Test";

const App = () => {
  const containerRef = useRef(null);
  const backgroundRef = useRef(null);
  const [containerHeight, setContainerHeight] = useState(100); // Hauteur initiale à 100vh

  useEffect(() => {
    const handleParallax = () => {
      const container = containerRef.current;
      const background = backgroundRef.current;
      const scrollY = window.scrollY;

      const backgroundScale = 1 + scrollY * 0.001;
      background.style.transform = `scale(${backgroundScale})`;
    };

    window.addEventListener("scroll", handleParallax);

    return () => {
      window.removeEventListener("scroll", handleParallax);
    };
  }, []);

  return (
    <div
      className={styles.container}
      ref={containerRef}
      style={{ height: `${containerHeight}vh`, transition: "height 0.5s ease" }}
    >
      <div className={styles.mountains}>
        <img src="./Mountains.png" alt="" />
      </div>
      <div className={styles.background} ref={backgroundRef}>
        <img src="./Background.jfif" alt="" />
      </div>
    </div>
  );
};

export default App;
