import Link from "next/link";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import styles from './page.module.css';

function ReservationSign(){
    return(
        <>
            <Navbar currentPath="/AfterSign/Reservation"/>
            <main>
                <section className={styles.reservationForm}>
                <h1>Reservation</h1>
                <form>
                    <label htmlFor="fullName">Full Name:</label>
                    <input type="text" id="fullName" name="fullName" required/>

                    <label htmlFor="club">Club/Organisation:</label>
                    <input type="text" id="club" name="club" required/>

                    <label htmlFor="email">Address mail:</label>
                    <input type="email" id="email" name="email" required/>

                    <label htmlFor="class">Reservation Class:</label>
                    <input type="text" id="class" name="class" required/>

                    <label htmlFor="dateTime">Date & Time:</label>
                    <input type="datetime-local" id="dateTime" name="dateTime" required/>

                    <label htmlFor="event">Event:</label>
                    <input type="text" id="event" name="event" required/>

                    <button type="submit">Reserve</button>
                </form>
                </section>
            </main>

            <Footer/>
        </>
    );
}

export default ReservationSign;