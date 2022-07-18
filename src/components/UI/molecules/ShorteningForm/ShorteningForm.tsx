import React, { useState } from "react";
import { Button } from "../../atoms";
import styles from "./ShorteningForm.module.scss";
import { getShortenLink } from "../../../../services/apiConfig";

interface Props {
  setListofLinks: React.Dispatch<
    React.SetStateAction<
      {
        linktoshort: string;
        shortenedLink: string;
      }[]
    >
  >;
}

function ShorteningForm({ setListofLinks }: Props) {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value !== "" || e.target.type !== undefined) {
      setError(false);
    }
    setInput(e.target.value);
  };

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input === "" || input === undefined) {
      setError(true);
    } else {
      setError(false);
      setLoading(true);
      let helper: string;
      helper = await getShortenLink(input);
      setListofLinks((prev) => [
        { linktoshort: input, shortenedLink: helper },
        ...prev,
      ]);
      setInput("");
      setLoading(false);
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className={styles.form}>
      <input
        className={`${styles.form__input} ${
          error ? styles["form__input--error"] : ""
        }`}
        type="text"
        value={input}
        onChange={onChangeHandler}
        placeholder="Shorten a link here..."
      />
      <Button text={"Shorten it!"} change={true} loading={loading} />
      {error ? (
        <span className={styles.form__errorText}>Please type some url</span>
      ) : null}
    </form>
  );
}

export default ShorteningForm;
