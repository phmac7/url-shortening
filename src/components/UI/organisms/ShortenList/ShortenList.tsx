import React from "react";
import { ShortenCard } from "../../molecules";
import styles from "./ShortenList.module.scss";
import { v4 as uuidv4 } from "uuid";

interface Props {
  listofLinks: string[];
}

function ShortenList({ listofLinks }: Props) {
  if (listofLinks === undefined) {
    return <ul className={styles.shortenList}></ul>;
  }

  return (
    <ul className={styles.shortenList}>
      {listofLinks.map((link) => (
        <div key={uuidv4()}>
          <ShortenCard link={`test`} shortenedLink={`${link}`} />
        </div>
      ))}
    </ul>
  );
}

export default ShortenList;
