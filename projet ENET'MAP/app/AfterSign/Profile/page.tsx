"use client";

import React, { useState } from "react";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import styles from './page.module.css';
import Link from "next/link";

function Profile() {
  const [clubInfo, setClubInfo] = useState({
    name: "ECJE",
    email: "ecje@gmail.com",
    phone: "1235356",
    logo: "/ECJE.png",
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setClubInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setClubInfo((prev) => ({ ...prev, logo: event.target.result as string }));
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveChanges = () => {
    setIsEditing(false);
    console.log("Updated Club Info:", clubInfo);
  };

  return (
    <main>
      <Navbar currentPath="/AfterSign/Profile" />
        <div className={styles.profileContainer}>
          <div className={styles.clubHeader}>
            <div className={styles.logoContainer}>
              <img src={clubInfo.logo} alt="Club Logo" className={styles.clubLogo} />
              {isEditing && (
                <div className={styles.changeLogoOverlay}>
                  <label htmlFor="logoInput" className={styles.changeLogoButton}>
                    Change Logo
                  </label>
                  <input
                    type="file"
                    id="logoInput"
                    accept="image/*"
                    onChange={handleLogoChange}
                    style={{ display: "none" }}
                  />
                </div>
              )}
            </div>
            <h1 className={styles.clubName}>{clubInfo.name}</h1>
          </div>

          <div className={styles.clubInfo}>
            <div className={styles.infoRow}>
              <strong>Club Name:</strong>
              {isEditing ? (
                <input
                  type="text"
                  name="name"
                  value={clubInfo.name}
                  onChange={handleInputChange}
                  className={styles.editInput}
                />
              ) : (
                <span>{clubInfo.name}</span>
              )}
            </div>
            <div className={styles.infoRow}>
              <strong>Email:</strong>
              {isEditing ? (
                <input
                  type="email"
                  name="email"
                  value={clubInfo.email}
                  onChange={handleInputChange}
                  className={styles.editInput}
                />
              ) : (
                <span>{clubInfo.email}</span>
              )}
            </div>
            <div className={styles.infoRow}>
              <strong>Phone Number:</strong>
              {isEditing ? (
                <input
                  type="tel"
                  name="phone"
                  value={clubInfo.phone}
                  onChange={handleInputChange}
                  className={styles.editInput}
                />
              ) : (
                <span>{clubInfo.phone}</span>
              )}
            </div>
          </div>

          {isEditing ? (
            <button className={styles.editButton} onClick={handleSaveChanges}>
              Save Changes
            </button>
          ) : (
            <button className={styles.editButton} onClick={() => setIsEditing(true)}>
              Edit Club Info
            </button>
          )}

          <div className={styles.preferences}>
            <h3>Notification Preferences</h3>
            <label className={styles.checkboxLabel}>
              <input type="checkbox" /> Email Notifications
            </label>
          </div>

          <div className={styles.accountManagement}>
            <button className={styles.button}>Change Password</button>
            <button className={styles.button}><Link href="/">Logout</Link></button>
            <button className={`${styles.button} ${styles.deleteAccount}`}>Delete Club Account</button>
          </div>
        </div>

      <Footer />
    </main>
  );
}

export default Profile;