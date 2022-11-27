import React, { useState, useEffect } from "react";
import type { isSuccessfullLoginResponse } from "../entities/user";
import { useNavigate } from "react-router-dom";
import { isUserLogin } from "../entities/user";
import { connectUser } from "../services/api";
import { useAppDispatch } from "../store/hooks";
import { setUserToken } from "../store/userSlice";
import styles from "./Login.module.scss";

const Login: React.FunctionComponent = () => {
  const [remember, setRemember] = useState<boolean>(false);
  const [userLogin, setUserLogin] = useState<isUserLogin>({ email: "", password: "" });
  const [loginError, setLoginError] = useState<boolean>(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const storage = localStorage.getItem("argentbank");
    if (storage) {
      const infos = JSON.parse(storage);
      setUserLogin({ ...userLogin, email: infos.email });
      setRemember((prev) => infos.remember);
    }
  }, []);

  function updateUserEmail(event: React.ChangeEvent) {
    setUserLogin({ ...userLogin, email: (event.target as HTMLInputElement).value });
  }

  function updateUserPassword(event: React.ChangeEvent) {
    setUserLogin({ ...userLogin, password: (event.target as HTMLInputElement).value });
  }

  function updateRemember(event: React.ChangeEvent) {
    if (remember) localStorage.clear();
    setRemember((prev) => !prev);
  }

  async function submitUser(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (remember) {
      localStorage.setItem(
        "argentbank",
        JSON.stringify({ remember: true, email: userLogin.email })
      );
    }
    const connection = await connectUser(userLogin);
    if (connection.status !== 200) {
      setLoginError(true);
      return;
    } else {
      const token = (connection as isSuccessfullLoginResponse).body.token;
      dispatch(setUserToken(token));
      navigate("/profile");
    }
  }

  return (
    <main className="main bg-dark">
      <section className={styles.sign_in_content}>
        <i className={`fa fa-user-circle ${styles.sign_in_icon}`}></i>
        <h1>Sign In</h1>
        <form onSubmit={submitUser}>
          <div className={styles.input_wrapper}>
            <label htmlFor="username">Username</label>
            <input value={userLogin.email} type="text" id="username" onChange={updateUserEmail} />
          </div>
          <div className={styles.input_wrapper}>
            <label htmlFor="password">Password</label>
            <input
              value={userLogin.password}
              type="password"
              id="password"
              onChange={updateUserPassword}
            />
          </div>
          <div className={styles.input_remember}>
            <input checked={remember} type="checkbox" id="remember-me" onChange={updateRemember} />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          {loginError && <p className={styles.error}>Email ou password incorrect!</p>}
          <button className={styles.sign_in_button} type="submit">
            Sign In
          </button>
        </form>
      </section>
    </main>
  );
};

export default Login;
