import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";

const Header: React.FC = () => {
  return (
    <nav className={styles.main_nav}>
      <NavLink to="/" className={styles.main_nav_logo}>
        <img
          className={styles.main_nav_logo_image}
          src="../../assets/argentBankLogo.png"
          alt="Argent Bank Logo"
        />
        <h1 className={styles.sr_only}>Argent Bank</h1>
      </NavLink>
      <div>
        <NavLink to="/login" className={styles.main_nav_item}>
          <i className={`fa fa-user-circle`}></i>
          Sign In
        </NavLink>
      </div>
    </nav>
  );
};

export default Header;
