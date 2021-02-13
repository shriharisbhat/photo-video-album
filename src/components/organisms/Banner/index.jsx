import React from "react";

import { Light_Logo } from "../../../assets";
import { Search } from "../../molecules/Search";
import { HeaderLogo } from "../../atoms/Logo";
import { BannerText } from "../../atoms/BannerText";
import { BannerCover } from "../../molecules/BannerCover";

import styles from "./banner.module.css";

const Banner = (props) => {
  return (
    <div>
      <BannerCover />
      <HeaderLogo src={Light_Logo}/>
      <BannerText />
      <div className={styles.searchWrapper}>
        <Search />
      </div>
    </div>
  );
};

export { Banner };
