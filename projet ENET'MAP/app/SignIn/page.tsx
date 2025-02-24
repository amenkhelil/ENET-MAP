import Link from "next/link";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import styles from './page.module.css';
import PlanningAdmin from "../Planning/page";



function SignIn () {
    return (
        <>
            <Navbar currentPath={"SignIn"}/>
            <div className={styles.container}>  
                <h1>Login</h1>  
                <form id="loginForm">  
                    <input type="text" id="loginUsername" placeholder="Username" required />  
                    <input type="password" id="loginPassword" placeholder="Password" required />  
                    <Link href="/AfterSign/Planning"><button type="submit">Login</button></Link>  
                    <Link href="forgottenpasswd.html" id="forgotPassword">Forgot Password?</Link> 

                </form>  
            </div>  


            <Footer/>
        </>
);
}

export default SignIn;