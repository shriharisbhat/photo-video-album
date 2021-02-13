import React from "react";

import { NavBar } from "../../components/organisms/NavBar";
import { PhotoDetail } from "../../components/organisms/PhotoDetail";
import { VideoPlayer } from "../../components/organisms/VideoPlayer";


const DetailPage = (props) => {
  const { location } = props;
  return (
    <div>
      <NavBar/>
      {location.state.media === "gallery" ? (
        <PhotoDetail location={location} />
      ) : (
        <VideoPlayer {...location.state} />
      )}
    </div>
  );
};

export default DetailPage;
