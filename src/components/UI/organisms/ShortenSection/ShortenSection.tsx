import React from "react";
import { ShorteningForm } from "../../molecules";
import ShortenList from "../ShortenList/ShortenList";
import styles from "./ShortenSection.module.scss";

function ShortenSection() {
  return (
    <section className={styles.ShortenContainer}>
      <ShorteningForm />
      <ShortenList />
    </section>
  );
}

export default ShortenSection;
