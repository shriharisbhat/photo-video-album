import React, { useContext, useState, useEffect } from "react";

const DataContext = React.createContext({});
DataContext.displayName = "SearchContext";

const PHOTOS_URL = "https://api.pexels.com/v1/search?per_page=20&query=";
const VIDEOS_URL = "https://api.pexels.com/videos/search?per_page=20&query=";

const API_KEY = "563492ad6f91700001000001436d485d8bc24b7dab77fc4658985840";

export const DataProvider = ({ children }) => {
  const [photos, setPhotos] = useState({});
  const [videos, setVideos] = useState({});
  const [searchKey, setSearchWord] = useState("animal");
  // PHOTOS_URL + searchKey, VIDEOS_URL + searchKey
  useEffect(() => {
    fetch("./animal.json", {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((res) => res.json())
      .then((result) => setPhotos(result));

    fetch(VIDEOS_URL + searchKey, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((res) => res.json())
      .then((result) => setVideos(result));
  }, [searchKey]);

  const value = { photos, videos, setSearchWord };
  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export const useData = () => useContext(DataContext);
