"use client";

import React, { useState } from "react";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import styles from './page.module.css';
import Link from "next/link";

function Profile() {
  const [isEditing, setIsEditing] = useState(false);

  const handleSaveChanges = async () => {
    setIsEditing(false);
  };

  return (
    <main>
      <Navbar currentPath="/AfterSign/Profile" />
      <div className={styles.profileContainer}>
        <div className={styles.clubHeader}>
          <div className={styles.logoContainer}>
            <img src="/ECJE.png" alt="Club Logo" className={styles.clubLogo} />
            {isEditing && (
              <div className={styles.changeLogoOverlay}>
                <label htmlFor="logoInput" className={styles.changeLogoButton}>
                  Change Logo
                </label>
                <input
                  type="file"
                  id="logoInput"
                  accept="image/*"
                  style={{ display: "none" }}
                />
              </div>
            )}
          </div>
          <h1 className={styles.clubName}>ECJE</h1>
        </div>

        <div className={styles.clubInfo}>
          <div className={styles.infoRow}>
            <strong>Club Name:</strong>
            {isEditing ? (
              <input
                type="text"
                name="name"
                className={styles.editInput}
              />
            ) : (
              <span>ECJE</span>
            )}
          </div>
          <div className={styles.infoRow}>
            <strong>Email:</strong>
            {isEditing ? (
              <input
                type="email"
                name="email"
                className={styles.editInput}
              />
            ) : (
              <span>ecje@gmail.com</span>
            )}
          </div>
          <div className={styles.infoRow}>
            <strong>Phone Number:</strong>
            {isEditing ? (
              <input
                type="tel"
                name="phone"
                className={styles.editInput}
              />
            ) : (
              <span>1235356</span>
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