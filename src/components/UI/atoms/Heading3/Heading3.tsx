import React from "react";
import styles from "./Heading3.module.scss";

interface Props {
  text: string;
  color?: string;
}

function Heading3({ text, color }: Props) {
  const style = {
    color: `${color}`,
  };

  return (
    <h3 style={style} className={styles.heading3}>
      {text}
    </h3>
  );
}

export default Heading3;
