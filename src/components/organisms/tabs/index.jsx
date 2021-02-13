import "bootstrap/dist/css/bootstrap.min.css";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { useState } from "react";

import { Card } from "../../atoms/Card/index";
import { useData } from "../../../providers/DataProvider";

import "./styles.css";

const TabsView = (props) => {
  const [key, setKey] = useState("photo");

  const { photos: photoObject, videos: videoObject } = useData();
  console.log("videos", videoObject);
  return (
    <div className="main-content">
      <Tabs
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="tabs"
        id="tabs"
      >
        <Tab eventKey="photo" className="tab" title="Photos">
          <div className="card-contaier">
            {photoObject.photos &&
              photoObject.photos.map((data) => {
                return (
                  <Card
                    imageSrc={data.src.original}
                    title={data.photographer}
                  />
                );
              })}
          </div>
        </Tab>
        <Tab eventKey="videos" className="tab" title="Videos">
          <div className="card-contaier">
            {videoObject.videos &&
              videoObject.videos.map((data) => {
                return (
                  <Card
                    imageSrc={data.image}
                    playIcon
                    title={data.user?.name}
                    videoFiles={data.video_files}
                    videoPictures={data.video_pictures}
                  />
                );
              })}
          </div>
        </Tab>
        <Tab eventKey="fav" className="tab" title="Favorites">
          Favorites
        </Tab>
      </Tabs>
    </div>
  );
};

export default TabsView;
