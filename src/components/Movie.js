import React from 'react'
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './movie.css';

function Movie({id,year,title,summary,poster,genre}) {
  return (
    <div className='movie'>
        <Link to={'/movie_detail'}
              state={{year,title,summary,poster,genre}}>
            <img src={poster} alt={title} title={title} />
            <div className='movie_data'>
                <h3 className='movie_title' style={{backgroundColor:'#eee'}}>{title}</h3>
                <h4 className='movie_year'>{year}</h4>
                <ul className='movie_genres'>
                    { genre.map((genres,index) => {
                                return(
                                    <li key={index} className="movie_genre">{genres}</li>
                                    )
                                }
                                )
                    }
                </ul>
                <p className='movie_summary'>{summary.slice(0,180)} ...</p>
            </div>
        </Link>
    </div>
  )
}

Movie.propTypes = {
    id : propTypes.number.isRequired,
    year : propTypes.number.isRequired,
    title : propTypes.string.isRequired,
    summary : propTypes.string.isRequired,
    poster : propTypes.string.isRequired,
    genres : propTypes.arrayOf(propTypes.string).isRequired
};

export default Movie