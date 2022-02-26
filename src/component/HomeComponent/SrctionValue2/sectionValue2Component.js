import './sectionValue2.css';
import React, { useState } from 'react';
import { Link } from "react-router-dom";

function SectionValue2() {

    return (
      
        <section className="section-value-2">
       
        <div className="content-value-2">
            <div className="value-2-text">
                <h1>Berinteraksi Secara Daring Lebih Mudah Bagi Sekolah dan Universitas</h1>
                <p>Stellarlab memungkinkan institusi pendidikan untuk berinteraksi dengan pelajar dan guru . Beritahu mereka jika institusimu sedang mengadakan acara atau sedang membutuhkan tenaga pengajar melalui halaman pribadi institusimu di Top Teacher. </p>
            </div>
            <Link to="/sign-in" className="value-2-button">Daftar Sekarang</Link>
        </div>
        <div className="value-2-image">
            <img src="assets/img/value2.png" alt="value-image" />
        </div>
    </section>
    
  );
}
export default SectionValue2;

