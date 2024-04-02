 import React from 'react'
 import logo from "../assets/logo.png"
 
 const Navbar = () => {
   return (
     <nav className="navbar bg-white fixed-top navbar-expand-lg">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">
        <img src={logo} alt="vivek pahuja classes" width='120px'/>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li className="nav-item ms-3">
            <a className="nav-link active text-blue" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item ms-3">
            <a className="nav-link active text-blue" href="#institute">About</a>
          </li>
          <li className="nav-item btn p-0 ms-3 bg-blue text-white rounded-pill px-2">
            <a className="nav-link active text-white" href="#contact-us">Contact Us</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</nav>
   )
 }
 
 export default Navbar