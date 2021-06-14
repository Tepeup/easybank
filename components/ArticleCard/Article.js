import React from "react";
import styles from "./Article.module.css";
export default function Article(props) {
  return (
    <div className={styles.article}>
      <img className={styles.image} src={props.source} />
      <div className={styles.body}>
        <div className={styles.author}>{props.author}</div>
        <div className={styles.title}>{props.title}</div>
        <div className={styles.content}>{props.content}</div>
      </div>
    </div>
  );
}
