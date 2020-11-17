import React from 'react'
import PropTypes from 'prop-types'
import "./Movie.css";

//state가 필요 없으므로, class component일 필요는 없음.

function Movie({id,year, title, summary, poster, genres}) {
    return ( 
    <div className="movie">
        <img src={poster} alt={title} title={title} />
        <div className="movies__data">
            <h3 className="movie__title">{title}</h3>
            <h5 className="movie__year">{year}</h5>
            <ul className="movie__genres">{genres.map((genre,index) => <li key={index} className="genres__genre">{genre}</li> )}</ul>
            <p className="movie__summary">{summary.slice(0,180)}...</p>
        </div>
    </div>
    );
}
 
//id는 num, 
Movie.propTypes = {
    id : PropTypes.number.isRequired,
    year : PropTypes.number.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired, 
    genres : PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;