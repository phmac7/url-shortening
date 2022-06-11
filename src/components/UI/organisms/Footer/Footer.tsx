import React from "react";
import { Facebook, Instagram, Logo, Pinterest, Twitter } from "../../atoms";
import styles from "./Footer.module.scss";

function Footer() {
  const footerLists = [
    {
      title: "Features",
      Links: ["Link Shortening", "Branded Links", "Analytics"],
    },
    {
      title: "Resources",
      Links: ["Blog", "Developers", "Support"],
    },
    {
      title: "Company",
      Links: ["About", "Our Team", "Careers", "Contact"],
    },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.footer__logoContainer}>
        <Logo />
      </div>
      <div className={styles.footer__lists}>
        {footerLists.map((list) => {
          return (
            <ul className={styles.footer__list}>
              <li className={styles["footer__item--title"]}>{list.title}</li>
              {list.Links.map((link) => (
                <li className={styles["footer__item"]}>
                  <a href="#" className={styles["footer__item--link"]}>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          );
        })}
      </div>
      <div className={styles.footer__sociais}>
        <a className={styles["footer__sociais--link"]} href="#">
          <Facebook />
        </a>
        <a className={styles["footer__sociais--link"]} href="#">
          <Twitter />
        </a>
        <a className={styles["footer__sociais--link"]} href="#">
          <Pinterest />
        </a>
        <a className={styles["footer__sociais--link"]} href="#">
          <Instagram />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
