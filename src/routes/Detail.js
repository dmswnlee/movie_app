import React from 'react'
import {useLocation} from 'react-router-dom';
import './Detail.css';

function Detail() {
  const location = useLocation();
  const {poster,title,year,genre,summary} = location.state;

  return (
    <div className="detail">
        <img src={poster} alt={title} title={title} />
        <div className='detail_data'>
            <h3 className='detail_title' style={{backgroundColor:'#eee'}}>{title}</h3>
            <h4 className='detail_year'>{year}</h4>
            <ul className='detail_genres'>
                { genre.map((genres,index) => {
                            return(
                                <li key={index} className="detail_genre">{genres}</li>
                                );
                            }
                            )
                }
            </ul>
            <p className='detail_summary'>{summary.slice(0,180)} ...</p>
        </div>
    </div>
  )
}

export default Detail