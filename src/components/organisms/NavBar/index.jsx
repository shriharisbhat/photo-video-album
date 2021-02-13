import React from "react";

import { Search } from "../../molecules/Search";
import { HeaderLogo } from "../../atoms/Logo";
import {Dark_Logo} from '../../../assets'

import styles from "./navbar.module.css";

const NavBar = () => {
  return (
    <div className={styles.navBar}>
      <HeaderLogo src={Dark_Logo} />
      <div className={styles.searcBar}>
        <Search />
      </div>
    </div>
  );
};

export { NavBar };
