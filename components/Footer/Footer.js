import React from "react";
import styles from "./Footer.module.css";
import Button from "../Button/Button";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.section}>
        <div className={styles.logo}>
          <img src="/images/logo-light.svg" alt="" />
          <div className={styles.social}>
            <img src="/images/icon-facebook.svg" />
            <img src="/images/icon-youtube.svg" />
            <img src="/images/icon-twitter.svg" />
            <img src="/images/icon-pinterest.svg" />
            <img src="/images/icon-instagram.svg" />
          </div>
        </div>

        <ul className={styles.links}>
          <li>
            <a href="">About Us</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
          <li>
            <a href="">Blog</a>
          </li>
          <li>
            <a href="">Careers</a>
          </li>
          <li>
            <a href="">Support</a>
          </li>
          <li>
            <a href="">Privacy</a>
          </li>
        </ul>

        <div className={styles.right}>
          <Button content="Request Invite" />
          <p> &copy; Easybank. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
