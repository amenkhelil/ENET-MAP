import Navbar from "@/Components/Navbar";
import Link from "next/link";
import Footer from "@/Components/Footer";




function HomeAdmin() {
  return (
      <main>

        <Navbar currentPath="/Admin/Home" />
        <Footer/>
        
      </main>
  );
}


export default HomeAdmin;