import React, { useEffect, useRef } from "react";
import styles from "./Test.module.scss";
import Video from "../Video bloc/Video";

const Test = () => {
  return (
    <div className={styles.container}>
      <Video />
    </div>
  );
};

export default Test;
