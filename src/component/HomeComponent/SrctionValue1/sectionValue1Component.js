import './sectionValue1.css';
import React, { useState } from 'react';
import { Link } from "react-router-dom";

function SectionValue1() {

    return (
      
        <section className="section-value-1">
        <div className="value-1-image">
            <img src="assets/img/value1.png" alt="value-image" />
        </div>
        <div className="content-value-1">
            <div className="value-1-text">
                <h1>Try Out UTBK Setiap Minggu</h1>
                <p>Kami membuat soal try out UTBK untuk membantu pelajar berlatih di platform Stellarlab setiap minggu. Soal disusun bersama guru-guru berprestasi di Indonesia. Ambil keputusan belajarmu hari ini, untuk PTN impianmu tahun depan.</p>
            </div>
            <Link to="/tryout" className="value-1-button">Ikuti Tryout</Link>
        </div>
    </section>
    
  );
}
export default SectionValue1;

