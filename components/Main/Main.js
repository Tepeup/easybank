import React from "react";
import styles from "./Main.module.css";
import Article from "../ArticleCard/Article";

export default function Main() {
  return (
    <main className={styles.main}>
      <section className={styles.section}></section>
      <section className={styles.section}>
        <div className={styles.title}>
          Why choose Easybank?
          <div className={styles.subtitle}></div>
        </div>
      </section>
      <section className={styles.section}>
        <div className={styles.title}>Latest Articles</div>
        <div className={styles.body}>
          <Article
            source="/images/image-currency.jpg"
            author=""
            title=""
            content=""
          />
          <Article
            source="/images/image-restaurant.jpg"
            author=""
            title=""
            content=""
          />
          <Article
            source="/images/image-plane.jpg"
            author=""
            title=""
            content=""
          />
          <Article
            source="/images/image-confetti.jpg"
            author=""
            title=""
            content=""
          />
        </div>
      </section>
    </main>
  );
}
