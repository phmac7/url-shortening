import React, { useState } from "react";
import { Button } from "../../atoms";
import styles from "./ShortenCard.module.scss";

interface Props {
  link: string;
  shortenedLink: string;
}

function ShortenCard({ link, shortenedLink }: Props) {
  const [copied, setCopied] = useState<boolean>(false);

  const onClick = () => {
    navigator.clipboard.writeText(shortenedLink);
    setCopied(true);
  };

  return (
    <div className={styles.shorten__item}>
      <span className={styles.shorten__link}>{link}</span>
      <span
        onClick={() => navigator.clipboard.writeText(shortenedLink)}
        className={styles.shorten__shortenedlink}
      >
        {shortenedLink}
      </span>
      <Button text={copied ? "Copied!" : "Copy!"} onClick={onClick} />
    </div>
  );
}

export default ShortenCard;
