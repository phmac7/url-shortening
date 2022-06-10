import React from "react";
import styles from "./Heading2.module.scss";

interface Props {
  text: string;
  color?: string;
}

function Heading2({ text, color }: Props) {
  const style = {
    color: `${color}`,
  };

  return (
    <h2 style={style} className={styles.heading2}>
      {text}
    </h2>
  );
}

export default Heading2;
