import React, { useState } from "react";

import { useData } from "../../../providers/DataProvider";

import styles from "./search.module.css";

const Search = (props) => {
  const [searchText, setText] = useState("");
  const { setSearchWord } = useData();

  const onTextChange = (e) => {
    setText(e.target.value);
  };

  const onSearch = () => {
    setSearchWord(searchText);
  };

  return (
    <div className={styles.searchWrapper}>
      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="Search photos,videos,artists"
          className={styles.inputBox}
          onChange={onTextChange}
        />
        <button type="button" className={styles.button} onClick={onSearch}>
          SEARCH
        </button>
      </div>
    </div>
  );
};

export { Search };
