import React, { useState } from "react";
import { Hamburguer, Logo } from "../../atoms";
import { Navigation } from "../../molecules";
import styles from "./Header.module.scss";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const onClickHandler = (): void => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header className={styles.header}>
      <Logo />
      <Navigation isOpen={isOpen} />
      <Hamburguer onClickHandler={onClickHandler} />
    </header>
  );
}

export default Header;
