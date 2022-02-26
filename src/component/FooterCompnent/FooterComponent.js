import './footer.css';
import React, { useState } from 'react';
import { Link } from "react-router-dom";

function Footer() {

    return (
        <footer>
        <div className="content-footer">
        <Link to="" className="logo-footer"><img src="assets/icon/icon2.png" alt="icon" /></Link>
        <ul>
            <li><Link to=""><h1>Perusahaan</h1></Link></li>
            <li><Link to="">Tentang Kami</Link></li>
            <li><Link to="">Karir</Link></li>
        </ul>
        <ul>
            <li><Link to=""><h1>Hak Cipta</h1></Link></li>
            <li><Link to="">Prifacy Policy</Link></li>
            <li><Link to="">Syarat dan Ketentuan</Link></li>
        </ul>
        <ul>
            <li><Link to=""><h1>Bantuan</h1></Link></li>
            <li>
                <a className="footer-icon" href="">
                 <img src="assets/icon/Icon-email.png" alt="icon email"/>
                 <span>cs@stellarlab.id</span>
                    
                </a>
            </li>
            <li>
                <a className="footer-icon" href="">
                    <img src="assets/icon/icon-wa.png" alt="icon email"/>
                    <span>WhatsApp</span>
                       
                   </a>
            </li>
            
        </ul>
        <ul>
            <li><Link to=""><h1>Tentang Kami</h1></Link></li>
            <li>
                <a className="footer-icon" href="">
                    <img src="assets/icon/icon-instagram.png" alt="icon email"/>
                    <span>Instagram</span>
                       
                   </a>
            </li>
            <li>
                <a className="footer-icon" href="">
                    <img src="assets/icon/icon-linkedin.png" alt="icon email"/>
                    <span>LinkedIn</span>
                       
                   </a>
            </li>
            
        </ul>
        </div>
        
    </footer>
        
    
  );
}
export default Footer;

