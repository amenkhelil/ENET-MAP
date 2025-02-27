import Navbar from "@/Components/Navbar";
import Link from "next/link";
import Footer from "@/Components/Footer";
import styles from './page.module.css';




function HomeAdmin() {
  return (
    <>
      <div className={styles.homeContainer}>
        <Navbar currentPath="/Admin/Home" />
        
        <main className={styles.mainContent}>
          <div className={styles.heroPhrase}>
            <h1>Simplify Room Reservations for<br />ENET'Com Clubs and Associations.</h1>
          </div>
          <section className={styles.heroSection}>
            <p>An easy-to-use platform to book classrooms and manage schedules in real time.</p>
            <div className={styles.heroButtons}>
              <Link href="/Admin/Planning" className={styles.btnPrimary}>Get Started</Link>
              <Link href="/Admin/Requests" className={styles.btnSecondary}>View Requests</Link>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
    );
}


export default HomeAdmin;