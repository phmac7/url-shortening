import React from "react";
import { Button } from "../../atoms";
import styles from "./ShortenCard.module.scss";

interface Props {
  link: string;
  shortenedLink: string;
}

function ShortenCard({ link, shortenedLink }: Props) {
  return (
    <li className={styles.shorten__item}>
      <span className={styles.shorten__link}>{link}</span>
      <a href={`${shortenedLink}`} className={styles.shorten__shortenedlink}>
        {shortenedLink}
      </a>
      <Button text={"Copy!"} />
    </li>
  );
}

export default ShortenCard;
