import Link from "next/link";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import styles from './page.module.css';
import RequestAnswer from "@/Components/RequestAnswer";


function Requests(){
    return(
        <>
            <Navbar currentPath="/AfterSign/Requests"/>
            <div className={styles.container}>
                <RequestAnswer sentAt="20:45" time="12:45" status="approved" className="C 22" date="Jan,29"/>
                <RequestAnswer sentAt="20:45" time="12:45" status="approved" className="C 22" date="Jan,29"/>
                <RequestAnswer sentAt="20:45" time="12:45" status="approved" className="C 22" date="Jan,29"/>
                <RequestAnswer sentAt="20:45" time="12:45" status="approved" className="C 22" date="Jan,29"/>
                <RequestAnswer sentAt="20:45" time="12:45" status="approved" className="C 22" date="Jan,29"/>
                <RequestAnswer sentAt="20:45" time="12:45" status="approved" className="C 22" date="Jan,29"/>
                <RequestAnswer sentAt="20:45" time="12:45" status="approved" className="C 22" date="Jan,29"/>
                <RequestAnswer sentAt="20:45" time="12:45" status="approved" className="C 22" date="Jan,29"/>
                <RequestAnswer sentAt="20:45" time="12:45" status="approved" className="C 22" date="Jan,29"/>
                <RequestAnswer sentAt="20:45" time="12:45" status="approved" className="C 22" date="Jan,29"/>
                <RequestAnswer sentAt="20:45" time="12:45" status="approved" className="C 22" date="Jan,29"/>
                <RequestAnswer sentAt="20:45" time="12:45" status="approved" className="C 22" date="Jan,29"/>
                <RequestAnswer sentAt="20:45" time="12:45" status="approved" className="C 22" date="Jan,29"/>
                <RequestAnswer sentAt="20:45" time="12:45" status="approved" className="C 22" date="Jan,29"/>
            </div>
            <Footer/>
        </>
    );
}

export default Requests;