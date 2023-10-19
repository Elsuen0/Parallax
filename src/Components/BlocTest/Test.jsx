import React, { useRef } from "react";
import styles from "./Test.module.scss";

const Test = () => {
  const testRef = useRef();

  return <div className={styles.container} id="test" ref={testRef}></div>;
};

export default Test;
