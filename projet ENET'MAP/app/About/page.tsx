import Navbar from "@/Components/Navbar";
import Link from "next/link";
import Footer from "@/Components/Footer";
import styles from './page.module.css';

function About(){
    return(
        <>
        <Navbar currentPath="/About"/>
        <main className={styles.container}>
            <div className={styles.about}>
                <img src="/class.avif" alt="ENET'Com innovate" />
                <div className={styles.aboutDescription}>
                    <p>
                        This project <strong>ENET’MAP</strong> aims to solve the problems of room booking and availability management for the clubs at <strong>ENET'COM</strong>.
                        It offers practical features such as:
                    </p>
                    <ul>
                        <li>Management of users, clubs, and rooms.</li>
                        <li>A simple and efficient booking system.</li>
                        <li>An availability calendar to view free time slots.</li>
                    </ul>
                    <p>
                        Our solution streamlines the organization and optimizes the use of available resources for the clubs.
                    </p>
                </div>
            </div>
            <div>
                <div className={styles.ourGoal}>
                    <div className={styles.ourGoalDescription}>
                        <h1>Our goal</h1>
                        <p>Our goal is to create a smoother,more efficient system for managing resources, saving time for both club leaders and administrators.</p>
                    </div>
                    <img src="/class.avif" alt="ENET'Com class" />
                </div>
                <div>

                </div>
            </div>
            <div>
                <div className={styles.ourGoal}>
                    <div className={styles.justToHoverTheImg}>
                        <img src="/ECJE.png" alt="ENET'Com class" />
                        <div className={styles.ecjeValues}>
                            <p>At ENET'COM Junior Entreprise, we value Professionalism, Commitment, Integrity, and Creativity. We work with quality, dedication, and honesty while always bringing new ideas to life.</p>
                        </div>
                    </div>
                    <div className={styles.ourGoalDescription}>
                        <h1> Who we are </h1>
                        <p>This project is developed by a team of <span><a href="" className={styles.ecje}>ENET'Com Junior Entreprise </a></span>passionate about technology and improving campus organization.</p>
                    </div>
                </div>
            </div>
        </main>
        <Footer/>
    </>
    );
}

export default About;