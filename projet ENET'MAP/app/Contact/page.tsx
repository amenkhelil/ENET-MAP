import Navbar from "@/Components/Navbar";
import Link from "next/link";
import Footer from "@/Components/Footer";

function Contact() {
    return(
        <>
            <Navbar currentPath="/Contact" />
            <main className="contact-page">
                <div className="contact-container">

                    <div className="contact-form-container">
                        <form className="contact-form" id="contactForm">
                            <h2>Send us a message</h2>
                            
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" id="name" required/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" required/>
                            </div>


                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea id="message" rows={5} required />
                            </div>

                            <button type="submit" className="submit-btn">
                                <span>Send Message</span>
                            </button>
                        </form>
                    </div>


                    <div className="contact-info">
                        <h1>Get in Touch</h1>
                        
                        <div className="info-cards">
                            <div className="info-card">
                                <div>
                                    <h3><i className='bx bx-map'></i> Visit us</h3>
                                    <p>Route de Tunis, cité el Ons,<br/> Technopôle de Sfax - 3018 Sfax</p>
                                </div>
                            </div>
                            
                            <div className="info-card">
                                <div>
                                    <h3><i className='bx bx-phone' ></i> Call Us</h3>
                                    <p>74 863 047 <br/>74 862 500</p>
                                </div>
                            </div>
                            
                            <div className="info-card">
                                <div>
                                    <h3><i className='bx bx-envelope'></i> Email Us</h3>
                                    <p>contact@enetcom.rnu.tn</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </main> 

            <Footer/>
        </>
    );
}

export default Contact;