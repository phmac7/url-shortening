import React, { useState } from "react";
import { Button } from "../../atoms";
import styles from "./Navigation.module.scss";

function Navigation({ isOpen }: { isOpen?: boolean }) {
  return (
    <div className={`${styles.navigation} ${isOpen ? styles.isOpen : null}`}>
      <ul className={styles.navigation__items}>
        <li className={styles.navigation__item}>
          <a href="#" className={styles.navigation__link}>
            Features
          </a>
        </li>
        <li className={styles.navigation__item}>
          <a href="#" className={styles.navigation__link}>
            Pricing
          </a>
        </li>
        <li className={styles.navigation__item}>
          <a href="#" className={styles.navigation__link}>
            Resources
          </a>
        </li>
      </ul>
      <ul className={styles.navigation__auth}>
        <li className={styles.navigation__login}>
          <a href="#" className={styles.navigation__loginLink}>
            Login
          </a>
        </li>
        <li className={styles.navigation__signup}>
          <a href="#" className={styles.navigation__signupLink}>
            <Button text={"Sign Up"} rounded />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
