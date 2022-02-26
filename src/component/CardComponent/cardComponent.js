import React from 'react'
import './card.css'

const Card = (props) => {

    console.log(props);
    
    return (
        <div className="card">
            <img src={props.imageSrc} />
                <div className="card-body">
                    <div className="card-title">
                        <h2>{props.cardTitle}</h2>
                    </div>
                    <div className="card-text">
                        <p>{props.cardDescription}</p>
                    </div>
                </div>
            </div>
    );
}

export default Card;