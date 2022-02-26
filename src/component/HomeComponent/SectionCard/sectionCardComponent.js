import './sectionCard.css';
import React, { useState } from 'react';
import Card from '../../CardComponent/cardComponent';

function SectionCard() {

    return (
      
        <section className="section-card">
        <h1>Kamu Bisa Melakukan Banyak Hal di Stellarlab</h1>
            <div className="content-card">
                <Card imageSrc={"assets/img/card1.png"}
                    cardTitle={"Berdiskusi dengan Guru dan Teman Baru"}
                    cardDescription={"Kamu dapat berdiskusi dengan guru dan belajar bersama dengan pelajar lainnya dari sekolah berbeda"} />
                <Card imageSrc={"assets/img/card2.png"}
                    cardTitle={"Pelajari Intisari UTBK"}
                    cardDescription={"Stellarlab membuat ringkasan pendek untuk membantumu mempersiapkan diri masuk PTN favorit."} />
                <Card imageSrc={"assets/img/card3.png"}
                    cardTitle={"Baca Pengalaman Pelajar Berprestasi"}
                    cardDescription={"Kami mempublikasikan pengalaman berprestasi dari sejumlah pelajar agar kamu terinsipirasi."} />
            </div>

                
    </section>
    
  );
}
export default SectionCard;

