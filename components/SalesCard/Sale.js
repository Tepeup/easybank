import React from "react";
import styles from "./Sale.module.css";
export default function Sale(props) {
  return (
    <div className={styles.sale}>
      <img src={props.image} alt="Icon" />
      <div className={styles.body}>
        <div className={styles.title}>{props.title}</div>
        <div className={styles.content}>{props.content}</div>
      </div>
    </div>
  );
}
