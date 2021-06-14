import React from "react";
import styles from "./Footer.module.css";
import Button from "../Button/Button";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.section}>
        <div>
          <img src="/images/logo-light.svg" alt="" />
        </div>
        <div className={styles.social}>
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
        </div>
        <div className={styles.right}>
          <Button content="Request Invite" />
          <p> &copy; Easybank. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
