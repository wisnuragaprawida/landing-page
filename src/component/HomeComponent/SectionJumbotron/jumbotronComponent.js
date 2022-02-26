import './jumbotron.css';
import React, { useState } from 'react';
import { Link } from "react-router-dom";

function Jumbotron() {

    return (
      
        <section className="jumbotron">
            <div className="hero"
                style={{ backgroundImage: `url("/assets/img/hero.svg")`}}>
            </div>
            <div className="hero-text">
                <h1>TERHUBUNG DENGAN GURU TERBAIK</h1>
                <p>Stellarlab bekerja sama dengan ratusan guru terbaik untuk membantumu tumbuh dan berkembang menjadi siswa berprestasi.</p>
                <div className="logo-psStore">
                    <img src="assets/img/psStore.svg" alt="play store" />
                </div>

            </div>
            <div className="hero-image">
                <img src="assets/img/hero-image.png" alt="ilustrator" />
            </div>

        
    </section>
    
  );
}
export default Jumbotron;

