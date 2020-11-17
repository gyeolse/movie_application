import React from 'react'
import PropTypes from 'prop-types'
import "./Movie.css";

import {Link} from 'react-router-dom';

//state가 필요 없으므로, class component일 필요는 없음.

function Movie({id,year, title, summary, poster, genres}) {
    return ( 
        //추가. route 설정
        <div className="movie">
            <img src={poster} alt={title} title={title} />
            <div className="movies__data">
            <Link to={{
                pathname:`/movie/${id}`,
                state:{
                    year:year, //ES6에서는 year만 쳐줘도 됨
                    title,
                    summary,
                    poster,
                    genres
                }
            }} >
            <h3 className="movie__title">{title}</h3>
            </Link>                            
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