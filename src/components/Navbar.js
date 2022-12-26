import React from 'react'
import '../styles/Navbar.css'

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-dark bg-teal">
        <div className="container">
            <a href="#" className="navbar-brand">
            <i className="fa fa-plane-departure px-3"></i>Travel Yaari</a>
            
            <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#travel-navbar">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="travel-navbar">
            <ul className="navbar-nav ms-auto">
                <li className="nav-item px-3">
                    <a href="#" className="nav-link">Home</a>
                </li>
                <li className="nav-item px-3">
                    <a href="#" className="nav-link">Search</a>
                </li>
                <li className="nav-item px-3">
                    <a href="#" className="nav-link">Visiting Spots</a>
                </li>
                <li className="nav-item px-3">
                    <a href="#" className="nav-link">Gallery</a>
                </li>
                <li className="nav-item px-3">
                    <a href="#" className="nav-link">Contact</a>
                </li>
            </ul>
        </div>

        </div>

     
      </nav>
    </>
  )
}

export default Navbar