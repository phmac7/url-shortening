import React from "react";
import { StatisticsCard, StatisticsHeader } from "../../molecules";
import styles from "./Statistics.module.scss";

function Statistics() {
  return (
    <section className={styles.statisticsContainer}>
      <StatisticsHeader />
      <div className={styles.statistics__cardContainer}>
        <StatisticsCard
          img={"img1"}
          heading={"Brand Recognition"}
          paragraph={
            "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content"
          }
        />
        <StatisticsCard
          img={"img2"}
          heading={"Detailed Records"}
          paragraph={
            "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
          }
        />
        <StatisticsCard
          img={"img3"}
          heading={"Fully Customizable"}
          paragraph={
            "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
          }
        />
      </div>
    </section>
  );
}

export default Statistics;
