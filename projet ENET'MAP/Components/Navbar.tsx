"use client";

import React, { useState } from "react";
import Link from "next/link";


import Contact from '@/app/Contact/page';
import ContactSign from '@/app/AfterSign/Contact/page';

import SignIn from '@/app/SignIn/page';

import Requests from '@/app/AfterSign/Requests/page';

import Planning from '@/app/Admin/Planning/page';
import PlanningAdmin from '@/app/Admin/Planning/page';
import PlanningSign from '@/app/AfterSign/Planning/page';

import Reservation from '@/app/Reservation/page';
import ReservationSign from '@/app/AfterSign/Reservation/page';

import About from '@/app/About/page';
import AboutAdmin from '@/app/Admin/About/page';
import AboutSign from '@/app/AfterSign/About/page';




type NavbarProps = {
  currentPath: string;
};

function Navbar({ currentPath }: NavbarProps) {
  const isAdminPath = currentPath.startsWith("/Admin");
  const isSigned = currentPath.startsWith("/AfterSign");

  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <div className="navbar">
      <div className="nav-container">
        <Link href="/" className="nav-logo"><img src="/ENET'MAP.png" alt="" /></Link>

        <div className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          <Link href={isAdminPath ? "/Admin/Home" : isSigned ? "/AfterSign/Home" : "/"} className={currentPath === (isAdminPath ? "/Admin/Home" : isSigned ? "/AfterSign/Home" : "/") ? "nav-link-in" : "nav-link"}> Home</Link>

          <Link href={isAdminPath ? "/Admin/Planning" : isSigned ? "/AfterSign/Planning" : "Planning"} className={currentPath === (isAdminPath ? "/Admin/Planning" : isSigned ? "/AfterSign/Planning" : "/Planning") ? "nav-link-in" : "nav-link"}>Planning</Link>

          {(isAdminPath || isSigned) && (<Link href={isAdminPath ? "/Admin/Requests" : "/AfterSign/Requests"} className={currentPath === (isAdminPath ? "/Admin/Requests" : "/AfterSign/Requests") ? "nav-link-in" : "nav-link"}>Requests</Link>)}

          {!isAdminPath && (<Link href={isSigned ? "/AfterSign/Reservation" : "/Reservation"} className={currentPath === (isSigned ? "/AfterSign/Reservation" : "/Reservation") ? "nav-link-in" : "nav-link"}>Reservation</Link>)}

          <Link href={isAdminPath ? "/Admin/About" : isSigned ? "/AfterSign/About" : "/About"} className={currentPath === (isAdminPath ? "/Admin/About" : isSigned ? "/AfterSign/About" : "/About") ? "nav-link-in" : "nav-link"}>About</Link>

          {!isAdminPath && (<Link href={isSigned ? "/AfterSign/Contact" : "/Contact"} className={currentPath === (isSigned ? "/AfterSign/Contact" : "/Contact") ? "nav-link-in" : "nav-link"}>Contact</Link>)}

          {isAdminPath && (<Link href="/Admin/Messages" className={currentPath === "/Admin/Messages" ? "nav-link-in" : "nav-link"}>Messages</Link>)}
        </div>

        {!isAdminPath && !isSigned && (<Link href="/SignIn"><button className="signin">Sign In</button></Link>)}
        {isSigned && (<Link href="/AfterSign/Profile"><button className="profile-button"><i className="bx bx-user"></i></button></Link>
        )}

        <button className={`mobile-menu ${isMenuOpen ? "menu-open" : ""}`} id="mobileMenu" onClick={toggleMobileMenu}> <i className="bx bx-menu"></i></button>
      
      </div>
    </div>
  );
}

export default Navbar;