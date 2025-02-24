"use client";

import Navbar from "@/Components/Navbar";
import Link from "next/link";
import Footer from "@/Components/Footer";
import styles from './page.module.css';

function HomeAdmin() {
  return (
    <div className="home-container">
      <Navbar currentPath="/" />
      
      <main className={styles.mainContent}>
        <div className={styles.heroPhrase}><h1>Simplify Room Reservations for<br />ENET'Com Clubs and Associations.</h1></div>
        <section className={styles.heroSection}>
          <p>An easy-to-use platform to book classrooms and manage schedules in real time.</p>
          <div className={styles.heroButtons}>
            <Link href="/Planning" className={styles.btnPrimary}>Get Started</Link>
            <Link href="/About" className={styles.btnSecondary}>Learn More</Link>
          </div>
        </section>

        <section className={styles.featuresSection}>
          <h2>Why Choose Our Platform?</h2>
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <i className="bx bx-calendar"></i>
              <h3>Book rooms in just a few clicks</h3>
            </div>
            <div className={styles.featureCard}>
              <i className="bx bx-time"></i>
              <h3>Always know which rooms are free</h3>
            </div>
            <div className={styles.featureCard}>
              <i className="bx bx-check-shield"></i>
              <h3>Ensure fair access for all users</h3>
            </div>
            <div className={styles.featureCard}>
              <i className="bx bx-mobile"></i>
              <h3>Accessible on all devices</h3>
            </div>
          </div>
        </section>

        <section className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <h2>Start Booking Your Rooms Today!</h2>
            <div className={styles.ctaButtons}>
              <Link href="/Planning" className={styles.btnPrimary}>Get Started</Link>
              <Link href="/Contact" className={styles.btnSecondary}>Contact Us</Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default HomeAdmin;
