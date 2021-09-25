import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ShowCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'

const ShowCard = ({ show }) => {
    // const {name, type, language, status} =props.show;
    return (
        <div className="col-lg-4 col-md-4 col-sm-6 col-12">
            <div className="card_info">
                <h4>{show.name}</h4>
                <p ><strong>Show Type:</strong> {show.type}</p>
                <p><strong>Language</strong> {show.language}</p>
                <p><strong>Genre:</strong> {show.genres[0]} {show.genres[1]} {show.genres[2]}</p>
                <button className="btn"><Link to={`/shows/${show.id}`}>Explore<FontAwesomeIcon className="font_icon" icon={faLongArrowAltRight} /></Link></button>
            </div>
        </div>
    );
};

export default ShowCard;