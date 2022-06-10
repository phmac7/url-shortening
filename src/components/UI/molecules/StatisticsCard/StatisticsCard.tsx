import React from "react";
import { Heading3, Paragraph } from "../../atoms";
import styles from "./StatisticsCard.module.scss";

interface Props {
  heading: string;
  paragraph: string;
  img: string;
}

function StatisticsCard({ heading, paragraph, img }: Props) {
  const getImg = () => {
    switch (img) {
      case "img1":
        return "/assets/icon-brand-recognition.svg";
        break;
      case "img2":
        return "/assets/icon-detailed-records.svg";
        break;
      case "img3":
        return "/assets/icon-fully-customizable.svg";
        break;
    }
  };

  return (
    <div className={styles.card}>
      <div className={styles.card__imgContainer}>
        <img className={styles.card__img} src={getImg()} aria-hidden="true" />
      </div>
      <Heading3 text={heading} />
      <Paragraph text={paragraph} />
    </div>
  );
}

export default StatisticsCard;
