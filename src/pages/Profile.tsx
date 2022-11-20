import React from "react";
import styles from "./Profile.module.scss";

const Profile: React.FunctionComponent = () => {
  return (
    <main className="profile_main bg-dark">
      <div className={styles.header}>
        <h1>
          Welcome back
          <br />
          Tony Jarvis!
        </h1>
        <button className={styles.edit_button}>Edit Name</button>
      </div>
      <h2 className="sr-only">Accounts</h2>
      <section className={styles.account}>
        <div className={styles.account_content_wrapper}>
          <h3 className={styles.account_title}>Argent Bank Checking (x8349)</h3>
          <p className={styles.account_amount}>$2,082.79</p>
          <p className={styles.account_amount_description}>Available Balance</p>
        </div>
        <div className={`${styles.account_content_wrapper} cta`}>
          <button className={styles.transaction_button}>View transactions</button>
        </div>
      </section>
      <section className={styles.account}>
        <div className={styles.account_content_wrapper}>
          <h3 className={styles.account_title}>Argent Bank Savings (x6712)</h3>
          <p className={styles.account_amount}>$10,928.42</p>
          <p className={styles.account_amount_description}>Available Balance</p>
        </div>
        <div className={`${styles.account_content_wrapper} cta`}>
          <button className={styles.transaction_button}>View transactions</button>
        </div>
      </section>
      <section className={styles.account}>
        <div className={styles.account_content_wrapper}>
          <h3 className={styles.account_title}>Argent Bank Credit Card (x8349)</h3>
          <p className={styles.account_amount}>$184.30</p>
          <p className={styles.account_amount_description}>Current Balance</p>
        </div>
        <div className={`${styles.account_content_wrapper} cta`}>
          <button className={styles.transaction_button}>View transactions</button>
        </div>
      </section>
    </main>
  );
};

export default Profile;
