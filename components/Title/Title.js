import React from "react";
import Button from "../Button/Button";
import styles from "./Title.module.css";

export default function Title(props) {
  return (
    <div className={styles.container}>
      <div className={styles.body}>
        <img className={styles.images} src="/images/image-mockups.png" />
        <div className={styles.title}>{props.title}</div>
        <div className={styles.content}>{props.content}</div>
        <Button content="Request Invite" />
      </div>
    </div>
  );
}
