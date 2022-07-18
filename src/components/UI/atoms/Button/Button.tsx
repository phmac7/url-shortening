import React from "react";
import styles from "./Button.module.scss";

interface Props {
  text: string;
  rounded?: boolean;
  onClick?: () => void;
  change?: boolean;
  loading?: boolean;
}

function Button({ text, rounded = false, onClick, change, loading }: Props) {
  const getOnClick = () => {
    onClick ? onClick() : null;
  };

  if (change) {
    return (
      <button
        onClick={getOnClick}
        className={`${styles.button} ${
          rounded ? styles["button--rounded"] : ""
        }`}
      >
        {loading ? (
          <img
            className={styles.button__loading}
            src="assets/loading.gif"
            alt="loading..."
          />
        ) : (
          text
        )}
      </button>
    );
  }

  return (
    <button
      onClick={getOnClick}
      className={`${styles.button} ${rounded ? styles["button--rounded"] : ""}`}
    >
      {text}
    </button>
  );
}

export default Button;
