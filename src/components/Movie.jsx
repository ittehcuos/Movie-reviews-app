import React from 'react';
import {Link} from 'react-router-dom'
import "../css/home.css"

export default function Movie({movie}) {
    return <article className='movie'>
        {/* Bloque contenedor */}
        <Link to={"/details/"+movie._id}><h2 className='movie__title'>{movie.name}</h2></Link>
        <div className='movie__stars'>{isNaN(movie.rating/movie.numberOfReviews)?0:movie.rating/movie.numberOfReviews}</div>
        <img className='movie__image' src={movie.banner} alt={movie.title}></img>
    </article>
}