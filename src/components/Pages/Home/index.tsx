import React from "react";
import { BoostLink } from "../../UI/molecules";
import {
  Footer,
  Header,
  Headline,
  ShortenSection,
  Statistics,
} from "../../UI/organisms";
import styles from "./Home.module.scss";

function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <Headline />
      <ShortenSection />
      <Statistics />
      <BoostLink />
      <Footer />
    </div>
  );
}

export default Home;
