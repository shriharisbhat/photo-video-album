import { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  Remove_Fav_Icon,
  Add_Fav_Icon,
  Play_Icon,
  Profile_Icon,
} from "../../../assets";

import styles from "./card.module.css";

export const Card = ({ imageSrc, title, playIcon = false }) => {
  const [state, setstate] = useState(false);
  let history = useHistory();

  const redirectTo = () => {
    history.push({
      pathname: "/detail",
      state: { src: imageSrc, photoTitle: title, isFavorite: false },
    });
  };
  return (
    <div className={styles.container}>
      <img
        alt="IMG"
        className={styles.card}
        src={imageSrc}
        onClick={!playIcon && redirectTo}
      />

      <img
        alt="FAVOURITE_ICON"
        onClick={() => setstate(!state)}
        className={styles.favIcon}
        src={state ? Add_Fav_Icon : Remove_Fav_Icon}
      />
      {playIcon && (
        <img
          alt="PLAY_ICON"
          onClick={redirectTo}
          className={styles.playIcon}
          src={Play_Icon}
        />
      )}
      <div className={styles.profileContainer}>
        <img alt="PROFILE_ICON" src={Profile_Icon} />
        <p className={styles.profileTitle}>{title}</p>
      </div>
    </div>
  );
};
