import React, { useEffect, useRef } from "react";
import styles from "./Test.module.scss";

const Test = () => {
  return (
    <div className={styles.container}>
      <div id="testDiv">{/* Contenu de votre div ici */}</div>
    </div>
  );
};

export default Test;
