import React from "react";
import { ShortenCard } from "../../molecules";
import styles from "./ShortenList.module.scss";

function ShortenList() {
  return (
    <ul className={styles.shortenList}>
      <ShortenCard link={"test"} shortenedLink={"teste"} />
    </ul>
  );
}

export default ShortenList;
