import React from "react";
import styles from "./Footer.module.scss";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.footer_text}>Copyright 2020 Argent Bank</p>
    </footer>
  );
};

export default Footer;
