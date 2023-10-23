import React, { useEffect } from "react";
import styles from "./Video.module.scss";
import Aos from "aos";
import "aos/dist/aos.css";

const Video = () => {
  useEffect(() => {
    Aos.init({});
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h1 data-aos="fade-up" data-aos-offset="500">
          Everest{" "}
        </h1>
        <h2 data-aos="fade-up">The highest mountain in the world</h2>
      </div>

      <div className={styles.background}></div>
      <img src="./videoBackground.jfif" alt="" data-aos="zoom-in" />
      <div className={styles.buttonPlay}>
        <img src="./Play.svg" alt="" data-aos="fade-up" data-aos-offset="0" />
      </div>
      <div className={styles.textBackground}>
        <p>01</p>
      </div>
    </div>
  );
};

export default Video;
