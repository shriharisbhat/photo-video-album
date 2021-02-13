import React from "react";

import styles from "./video.module.css";

const VideoPlayer = (props) => {
  const videoFile = props.videoFiles.find((file) => {
    if (
      (file.quality === "hd" || file.quality === "hd") &&
      file.file_type === "video/mp4"
    ) {
      return file;
    }
    return "";
  });

  return (
    <div className={styles.mainContainer}>
      <video
        controls
        className={styles.videoContainer}
        poster={props.videoPictures[0].picture}
      >
        <source src={videoFile.link} />
        <p>This video is not supported</p>
      </video>
    </div>
  );
};

export { VideoPlayer };
