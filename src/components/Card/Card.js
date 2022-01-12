import React from 'react';
import "./Card.css";
import { Link } from "react-router-dom";

function Card({movie}) {
    return (
        <div className="card">
            <img src={movie.posterUrl} alt=""  />
            <div className="card__info">
                <h2> 
                   <Link to={`/movies/id/${movie.id}`}>{movie.title} </Link> 
                </h2>
                <h4>{movie.plot}</h4>
                <h3>{movie.runtime} min</h3>
            </div>
        </div>
    )
}

export default Card
