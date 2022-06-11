import React from "react";
import { Button, Heading3 } from "../../atoms";
import styles from "./BoostLink.module.scss";

function BoostLink() {
  return (
    <section>
      <div className={styles.boostlink}>
        <Heading3 text={"Boost your links today"} color={"#fff"} />
        <Button text={"Get Started"} rounded={true} />
      </div>
    </section>
  );
}

export default BoostLink;
