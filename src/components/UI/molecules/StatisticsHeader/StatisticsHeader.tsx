import React from "react";
import { Heading2, Paragraph } from "../../atoms";
import styles from "./StatisticsHeader.module.scss";

function StatisticsHeader() {
  return (
    <div className={styles.statsHeader}>
      <Heading2 text={"Advanced Statistics"} />
      <Paragraph
        text={
          "Track how your links are performing across the web with our advanced statistics dashboard."
        }
      />
    </div>
  );
}

export default StatisticsHeader;
