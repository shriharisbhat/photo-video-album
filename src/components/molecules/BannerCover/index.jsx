import React, { useState, useEffect, useCallback } from "react";

import { BannerImage } from "../../atoms/BannerImage";

import styles from "./bannerCover.module.css";

const INTERVAL_TIME_IN_MS = 360000;
const get_banner_url =
  "https://api.pexels.com/v1/curated?/search?query=nature&per_page=15";

const BannerCover = (props) => {
  const [bannerObject, setBannerObject] = useState({});
  let intervalId;

  const fetchBanner = useCallback(() => {
    fetch(bannerObject.next_page, {
      headers: {
        Authorization:
          "563492ad6f91700001000001436d485d8bc24b7dab77fc4658985840",
      },
    })
      .then((res) => res.json())
      .then((result) => setBannerObject(result));
  }, [bannerObject]);
  useEffect(() => {
    fetch(get_banner_url, {
      headers: {
        Authorization:
          "563492ad6f91700001000001436d485d8bc24b7dab77fc4658985840",
      },
    })
      .then((res) => res.json())
      .then((result) => setBannerObject(result));
  }, []);

  useEffect(() => {
    if (intervalId) {
      clearInterval(intervalId);
    }

    intervalId = setInterval(fetchBanner, INTERVAL_TIME_IN_MS);

    return () => clearInterval(intervalId);
  }, [bannerObject]);

  return (
    <div className={styles.bannerContainer}>
      {bannerObject.hasOwnProperty("photos") &&
        bannerObject.photos.length !== 0 && (
          <BannerImage src={bannerObject.photos[0].src} />
        )}
    </div>
  );
};

export { BannerCover };
