import React, { useState } from "react";

import { Large_Fav_Empty, Large_Fav_Fill, Profile_Icon } from "../../../assets";

import styles from "./photoDetail.module.css";

const PhotoDetail = ({ location }) => {
  const [state, setstate] = useState(false);
  return (
    <div className={styles.container}>
      <img
        alt="DETAIL_IMAGE"
        src={location.state.src}
        className={styles.detailCard}
      />
      <div className={styles.headerContainer}>
        <h3 className={styles.headerTitle}>Title</h3>
        <img
          alt="LARGE_FAV_ICON"
          className={styles.favIcon}
          onClick={() => setstate(!state)}
          src={state ? Large_Fav_Fill : Large_Fav_Empty}
        />
      </div>
      <div className={styles.profileContainer}>
        <img alt="PROFILE_ICON" src={Profile_Icon} />
        <p className={styles.profileTitle}>{location.state.photoTitle}</p>
      </div>
    </div>
  );
};

export { PhotoDetail };
