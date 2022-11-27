import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { resetUserToken } from "../../store/userSlice";
import styles from "./Header.module.scss";
import logo from "../../assets/argentBankLogo.png";

const Header: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isUserConnected = useAppSelector((state) => state.user.token);

  function deconnectUser(): void {
    dispatch(resetUserToken());
    navigate("/");
  }

  return (
    <nav className={styles.main_nav}>
      <NavLink to="/" className={styles.main_nav_logo}>
        <img className={styles.main_nav_logo_image} src={logo} alt="Argent Bank Logo" />
        <h1 className={`sr_only`}>Argent Bank</h1>
      </NavLink>
      <div>
        {isUserConnected ? (
          <a className={styles.main_nav_item} onClick={deconnectUser}>
            <i className={`fa fa-user-circle`}></i>
            Sign Out
          </a>
        ) : (
          <NavLink to="/login" className={styles.main_nav_item}>
            <i className={`fa fa-user-circle`}></i>
            Sign In
          </NavLink>
        )}
      </div>
    </nav>
  );
};

export default Header;
