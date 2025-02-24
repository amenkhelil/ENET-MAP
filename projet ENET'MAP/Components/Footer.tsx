import Link from "next/link";

type FooterProps = {
    isPlanning?: boolean;
  };


function Footer ({ isPlanning = false }: FooterProps) {
    return(
        <footer className={isPlanning ? "planning-footer" : "footer"}>
        <div className="footer-description">
            <h3>ENET'MAP</h3>
            <p>This platform is proudly developed by <span><a href="http://enetcomje.com/"> ENET'Com Junior Entreprise</a></span> to facilitate the reservation of classrooms for clubs. Combining innovation and professionalism, we aim to streamline club activities and enhance collaboration.</p>
        </div>
        <div className="quik-links">
            <h3>Quik Links</h3>
            <Link href="/Home">Home</Link>
            <Link href="/Planning">Planning</Link>
            <Link href="/Reservation">Reservation</Link>
            <Link href="/About">About</Link>
            <Link href="/Contact">Contact</Link>
        </div>
        <div className="footer-contact">
            <h3>Contact</h3>
            <div className="contact-coordon"><i className='bx bx-map'></i><p>Route de Tunis, cité el Ons,<br/>Technopôle de Sfax - 3018 Sfax</p></div>
            <div className="contact-coordon"><i className='bx bx-phone' ></i><p>74 863 047 / 74 862 500</p></div>
            <div className="contact-coordon"><i className='bx bx-envelope'></i><p>contact@enetcom.rnu.tn</p></div>
            
        </div>
        <div>
            <img className="enetcom" src="/ENET'Com.png" alt="ENET'Com"/>
            <p className="copy">&copy;2025 ENET'MAP. All rights are reserved. </p>
        </div>
    </footer>
    );
}

    export default Footer;