import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NotFound.module.scss";

const NotFound: React.FunctionComponent = () => {
  return (
    <main className="main bg-dark">
      <p className={styles.error}>Error 404 : Page was not found!</p>
      <NavLink to="/" className={styles.redirection}>
        Return to Homepage
      </NavLink>
    </main>
  );
};

export default NotFound;
