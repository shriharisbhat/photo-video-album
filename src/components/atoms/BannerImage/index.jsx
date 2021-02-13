import React from "react";
import styles from "./bannerImage.module.css";

export const BannerImage = (props) => {
  return (
    <div className={styles.image}>
      <picture>
        <source srcSet={props.src.tiny} media={`(max-width: 500px)`} />
        <source srcSet={props.src.large} media={`(max-width: 800px)`} />
        <source srcSet={props.src.landscape} media={`(max-width: )`} />
        <img src={props.src.landscape} alt={`no`} width="100%" height="100%" />
      </picture>
    </div>
  );
};
