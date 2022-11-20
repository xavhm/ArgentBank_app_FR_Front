import React from "react";
import styles from "./Home.module.scss";
import iconChat from "../assets/icon-chat.png";
import iconMoney from "../assets/icon-money.png";
import iconSecurity from "../assets/icon-security.png";

const Home: React.FunctionComponent = () => {
  return (
    <main>
      <div className={styles.hero}>
        <section className={styles.hero_content}>
          <h2 className={`sr_only`}>Promoted Content</h2>
          <p className={styles.subtitle}>No fees.</p>
          <p className={styles.subtitle}>No minimum deposit.</p>
          <p className={styles.subtitle}>High interest rates.</p>
          <p className={styles.text}>Open a savings account with Argent Bank today!</p>
        </section>
      </div>
      <section className={styles.features}>
        <h2 className={`sr_only`}>Features</h2>
        <div className={styles.feature_item}>
          <img src={iconChat} alt="Chat Icon" className={styles.feature_icon} />
          <h3 className={styles.feature_item_title}>You are our #1 priority</h3>
          <p>
            Need to talk to a representative? You can get in touch through our 24/7 chat or through
            a phone call in less than 5 minutes.
          </p>
        </div>
        <div className={styles.feature_item}>
          <img src={iconMoney} alt="Money Icon" className={styles.feature_icon} />
          <h3 className={styles.feature_item_title}>More savings means higher rates</h3>
          <p>The more you save with us, the higher your interest rate will be!</p>
        </div>
        <div className={styles.feature_item}>
          <img src={iconSecurity} alt="Security Icon" className={styles.feature_icon} />
          <h3 className={styles.feature_item_title}>Security you can trust</h3>
          <p>We use top of the line encryption to make sure your data and money is always safe.</p>
        </div>
      </section>
    </main>
  );
};

export default Home;
