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

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    let helper: string;
    helper = await getShortenLink(input);
    setListofLinks((prev) => [
      { linktoshort: input, shortenedLink: helper },
      ...prev,
    ]);
    setInput("");
    setLoading(false);
  };

  return (
    <form onSubmit={onSubmitHandler} className={styles.form}>
      <input
        className={styles.form__input}
        type="text"
        value={input}
        onChange={onChangeHandler}
        placeholder="Shorten a link here..."
      />
      <Button text={"Shorten it!"} change={true} loading={loading} />
    </form>
  );
}

export default ShorteningForm;
