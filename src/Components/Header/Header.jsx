import React from "react";
import styles from "./Header.module.scss";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.headerIn}>
        <div className={styles.burger}>
          <MenuIcon />
        </div>
        <div className={styles.navigation}>
          <p className={styles.explore}>Explore</p>
          <p className={styles.store}>Store</p>
        </div>
        <div className={styles.logo}>
          <img src="./Mountain Logo.svg" alt="" />
        </div>
        <div className={styles.socialMedia}>
          <img src="./Instagram.svg" alt="" />
          <img src="./Medium.svg" alt="" />
          <img src="./Dribbble.svg" alt="" />
          <img src="./Behance.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
