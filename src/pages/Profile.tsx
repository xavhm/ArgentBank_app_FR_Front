import React, { useState, useEffect } from "react";
import type { isSuccessfullProfileResponse, isUserName } from "../entities/user";
import { useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import { resetUserToken, setUserData } from "../store/userSlice";
import { getUserProfile, updateUserProfile } from "../services/api";
import styles from "./Profile.module.scss";

const Profile: React.FunctionComponent = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isUserConnected = useAppSelector((state) => state.user.token);
  const userProfileData = useAppSelector((state) => state.user);
  const [isEditionOpen, setIsEditionOpen] = useState<boolean>(false);
  const [userName, setUserName] = useState<isUserName>({ firstName: "", lastName: "" });

  useEffect(() => {
    if (!isUserConnected) {
      navigate("/login");
      return;
    }
    getUserData(isUserConnected);
  }, []);

  async function getUserData(token: string): Promise<void> {
    const userProfile = await getUserProfile(token);
    if (userProfile.status !== 200) {
      dispatch(resetUserToken());
      navigate("/login");
      console.log("Error while loading user profile!");
      return;
    }
    const data = (userProfile as isSuccessfullProfileResponse).body;
    dispatch(setUserData(data));
    console.log(userProfile);
  }

  function updateUserFirstName(event: React.ChangeEvent): void {
    setUserName({ ...userName, firstName: (event.target as HTMLInputElement).value });
  }

  function updateUserLastName(event: React.ChangeEvent): void {
    setUserName({ ...userName, lastName: (event.target as HTMLInputElement).value });
  }

  async function submitUserUpdate(): Promise<void> {
    if (!userName.firstName || !userName.lastName) {
      return;
    }
    const update = await updateUserProfile(userName, isUserConnected);
    if (update.status !== 200) {
      console.log("Error while updating user profile!");
      setUserName({ firstName: "", lastName: "" });
      setIsEditionOpen(false);
      return;
    }
    const updatedUserName = (update as isSuccessfullProfileResponse).body;
    dispatch(setUserData(updatedUserName));
    setUserName({ firstName: "", lastName: "" });
    setIsEditionOpen(false);
  }

  return (
    <main className="profile_main bg-dark">
      <div className={styles.header}>
        <h1>
          Welcome back
          <br />
          {`${userProfileData.firstName} ${userProfileData.lastName}`}
        </h1>
        {isEditionOpen && (
          <div className={styles.edition_wrapper}>
            <div className={styles.edition_inputs}>
              <input
                type="text"
                id="firstName"
                placeholder={userProfileData.firstName}
                onChange={updateUserFirstName}
              />
              <input
                type="text"
                id="lastName"
                placeholder={userProfileData.lastName}
                onChange={updateUserLastName}
              />
            </div>
            <div className={styles.edition_buttons}>
              <button className={styles.edit_button} onClick={() => submitUserUpdate()}>
                Save
              </button>
              <button className={styles.edit_button} onClick={() => setIsEditionOpen(false)}>
                Cancel
              </button>
            </div>
          </div>
        )}
        {!isEditionOpen && (
          <button className={styles.edit_button} onClick={() => setIsEditionOpen(true)}>
            Edit Name
          </button>
        )}
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
