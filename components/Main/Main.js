import React from "react";
import styles from "./Main.module.css";
import Article from "../ArticleCard/Article";
import Sale from "../SalesCard/Sale";

export default function Main() {
  return (
    <main className={styles.main}>
      <section className={styles.section} id={styles.landing}>
        <div className={styles.background}>
          <img
            className={styles.images}
            src="/images/image-mockups.png"
            alt=""
          />
        </div>

        <div className={styles.body}></div>
      </section>
      <section className={styles.section} id={styles.sales}>
        <div className={styles.title}>Why choose Easybank?</div>{" "}
        <div className={styles.subtitle}>
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before.
        </div>
        <div className={styles.body}>
          <Sale
            image="/images/icon-online.svg"
            title="Online Banking"
            content="Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world."
          />
          <Sale
            image="/images/icon-budgeting.svg"
            title="Simple Budgeting"
            content="See exactly where your money goes each month. Receive notifications when you're close to hitting your limits."
          />
          <Sale
            image="/images/icon-onboarding.svg"
            title="Fast Onboarding"
            content="We don't do branches. Open your account in minutes online and start taking control of your finances right away."
          />
          <Sale
            image="/images/icon-api.svg"
            title="Open API"
            content="Manage your savings, investments, pension, and much more from one account. Track your money has never been easier."
          />
        </div>
      </section>
      <section className={styles.section} id={styles.articles}>
        <div className={styles.title}>Latest Articles</div>
        <div className={styles.body}>
          <Article
            source="/images/image-currency.jpg"
            author="By Claire Robinson"
            title="Receive money in any currency with not fees"
            content="The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single ..."
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
