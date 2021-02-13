import React from "react";

import { Search } from "../../molecules/Search";
import { HeaderLogo } from "../../atoms/Logo";
import { BannerText } from "../../atoms/BannerText";
import { BannerCover } from "../../molecules/BannerCover";

const Banner = (props) => {
  return (
    <div>
      <BannerCover />
      <HeaderLogo />
      <BannerText />
      <Search />
    </div>
  );
};

export { Banner };
