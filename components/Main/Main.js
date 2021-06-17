import React from "react";
import styles from "./Main.module.css";
import Article from "../ArticleCard/Article";
import Sale from "../SalesCard/Sale";
import Title from "../Title/Title";

export default function Main() {
  return (
    <main className={styles.main}>
      <section className={styles.section} id={styles.landing}>
        <Title
          title="Next generation digital banking"
          content="Take your financial life online. Your easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more."
        />
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
            content="The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single..."
          />
          <Article
            source="/images/image-restaurant.jpg"
            author="By Wilson Hutton"
            title="Treate yourself without worrying about money"
            content="Our simple budgeting feature allows you to seperate out your spending and set realistic limits each month. That means you..."
          />
          <Article
            source="/images/image-plane.jpg"
            author="By Wilson Hutton"
            title="Take your Easybank card wherever you go"
            content="We want you to enjoy your travels. This is why we don't charge any fees on purchases while you're abroad. We'll even show you..."
          />
          <Article
            source="/images/image-confetti.jpg"
            author="By Claire Robinson"
            title="Our invite-only Beta accounts are now live!"
            content="After a lot of hard work by the whole team, we're excited to launch our closed beta. It's easy to request an invite through the site..."
          />
        </div>
      </section>
    </main>
  );
}
