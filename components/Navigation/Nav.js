import React from "react";
import styles from "./Nav.module.css";
import Button from "../Button/Button";

export default function Nav() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.section}>
        <div>
          <img src="/images/logo.svg" alt="easybank" />
        </div>
        <ul className={styles.list}>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About</a>
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
        </ul>
        <div>
          <Button content="Request Invite" />
        </div>
      </div>
    </nav>
  );
}
