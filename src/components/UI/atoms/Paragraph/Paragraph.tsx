import React from "react";
import styles from "./Paragraph.module.scss";

interface Props {
  text: string;
  color?: string;
}

function Paragraph({ text, color }: Props) {
  const style = {
    color: `${color}`,
  };

  return (
    <p style={style} className={styles.paragraph}>
      {text}
    </p>
  );
}

export default Paragraph;
