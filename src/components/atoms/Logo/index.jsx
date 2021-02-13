import React from "react";

import styles from "./logo.module.css";

const HeaderLogo = (props) => {
  return (
    <div className={styles.logoContainer}>
      <img alt="LOGO" src={props.src} />
    </div>
  );
};

export { HeaderLogo };
