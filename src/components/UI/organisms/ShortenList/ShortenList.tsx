import React from "react";
import { ShortenCard } from "../../molecules";
import styles from "./ShortenList.module.scss";
import { v4 as uuidv4 } from "uuid";

interface Props {
  listofLinks: {
    linktoshort: string;
    shortenedLink: string;
  }[];
}

function ShortenList({ listofLinks }: Props) {
  if (listofLinks === undefined) {
    return (
      <ul className={styles.shortenList}>
        <li>Nothing</li>
      </ul>
    );
  }
  return (
    <ul className={styles.shortenList}>
      {listofLinks.map((link, index) => (
        <li key={index}>
          <ShortenCard
            link={`${link.linktoshort}`}
            shortenedLink={`${link.shortenedLink}`}
          />
        </li>
      ))}
    </ul>
  );
}

export default ShortenList;
