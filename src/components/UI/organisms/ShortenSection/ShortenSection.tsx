import React, { useEffect, useState } from "react";
import { ShorteningForm } from "../../molecules";
import ShortenList from "../ShortenList/ShortenList";
import styles from "./ShortenSection.module.scss";

function ShortenSection() {
  const [listofLinks, setListofLinks] = useState<
    { linktoshort: string; shortenedLink: string }[]
  >([]);

  return (
    <section className={styles.ShortenContainer}>
      <ShorteningForm setListofLinks={setListofLinks} />
      <ShortenList listofLinks={listofLinks} />
    </section>
  );
}

export default ShortenSection;
