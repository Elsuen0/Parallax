import React from "react";
import styles from "./Scroll.module.scss";

const Scroll = () => {
  return (
    <div className={styles.scroll}>
      <div className={styles.contentScroll}>
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
