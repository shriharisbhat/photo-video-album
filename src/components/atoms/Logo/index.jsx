import React from "react";
import { Logo } from "../../../assets";
import styles from "./logo.module.css";

const HeaderLogo = (props) => {
  return (
    <div className={styles.logoContainer}>
      <img alt="LOGO" src={Logo} />
    </div>
  );
};

export { HeaderLogo };
