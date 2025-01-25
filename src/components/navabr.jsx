import  "../base.css"
export default function Navbar(){ 
    return(
         <nav className="navbar">
      <div className="nav-container">
          <a href="" className="nav-logo"><img src="" alt=""/></a>
          <div className="nav-links">
              <a href="" className="nav-link">Home</a>
              <a href="" className="nav-link">Planning</a>
              <a href="" className="nav-link">Reservation</a>
              <a href="" className="nav-link">About</a>
              <a href="" className="nav-link-in">Contact</a>
          </div>
          <button className="signin"> sign in </button>
          <button className="mobile-menu" id="mobileMenu"><i className='bx bx-menu'></i></button>
      </div>
</nav>
          )

}