import './navbar.css';
import React, { useState }from 'react';
import { NavLink, Link } from "react-router-dom";

function Navbar() {

    const [isOpen, setOpen] = useState(false);

    const handleMenu = () => {
        setOpen(!isOpen);
    }

    return (
      
        <header className="header">
            <div className="logo">
                <img src="assets/icon/icon.png" alt="logo stellarlab" />
            </div>

            <div className="navbar__menu" onClick={handleMenu}>
                <button >☰</button>
            </div>

            <div className={ isOpen ? "navbar__bg_open" : "navbar__bg_close"} onClick={handleMenu}></div>
            <nav className={ isOpen ? "open" : ""}>
                <ul className="nav-ul">
                    <li className="nav-li"> <NavLink onClick={handleMenu} className={nav => "link"  + (nav.isActive ? " link_active" : "")} to="/">Home</NavLink></li>
                    <li className="nav-li"> <NavLink onClick={handleMenu} className={nav => "link"  + (nav.isActive ? " link_active" : "")} to="/tryout">Tryout</NavLink></li>
                    <li className="nav-li"> <NavLink onClick={handleMenu} className={nav => "link"  + (nav.isActive ? " link_active" : "")} to="/login">Login</NavLink></li>
                    
                    <li className="nav-li">
                        <Link to="/sign-in" className="btn-signIn">Daftar</Link>
                    </li>
                </ul>
            </nav>
        </header>
    
  );
}
export default Navbar;

