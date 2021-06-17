import React, { useState } from "react";
import styles from "./Nav.module.css";
import Button from "../Button/Button";

export default function Nav() {
  const [open, setOpen] = useState(true);
  return (
    <nav className={styles.navbar}>
      <div className={styles.section}>
        <div className={styles.logo}>
          <img src="/images/logo.svg" alt="easybank" />
        </div>
        <div className={styles.compress}>
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
        <div
          className={open ? styles.burger : styles.cross}
          onClick={() => setOpen(!open)}
        >
          <div className={styles.line}></div>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
        </div>
      </div>

      <div className={open ? styles.hide : styles.show} id={styles.mobile}>
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
      </div>
    </nav>
  );
}
