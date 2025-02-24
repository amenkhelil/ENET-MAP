import Link from "next/link";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import styles from './page.module.css';

function Reservation(){
    return(
        <>
            <Navbar currentPath="/Reservation"/>
            <div className={styles.registerPage}>
                <div className={styles.registerCard}>
                    <h2>You need an account to reserve</h2>
                    <p>
                    To access all features and reserve classes, please sign in to your account or get in touch with us.
                    </p>
                    <div className={styles.buttonGroup}>
                    <Link href="/SignIn">
                        <button className={styles.signinButton}>Sign In</button>
                    </Link>
                    <Link href="/Contact">
                        <button className={styles.contactButton}>Get in Touch</button>
                    </Link>
                    </div>
                </div>
            </div>

            <Footer/>
        </>
    );
}

export default Reservation;