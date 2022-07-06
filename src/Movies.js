import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from './context'
// const url =  'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png'  

const Movies = () => {

  const context = useContext(AppContext);
  const movies = context.data;
  const moviesSearch = context.dataSearch;

  return (
    <section className='movies'>
      {moviesSearch.length === 0 ? movies.map((item)=>(
        <Link to={`/movies/${item.id}`} key={item.id} className='movie'>
          <div>
            <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt={item.original_title}></img>
            <div className='movie-info'>
              <h4 className='title'>{item.title}</h4>
              <p>{item.release_date}</p>
            </div>
          </div>
        </Link>
      )) : moviesSearch.map((item)=>(
        <Link to={`/movies/${item.id}`} key={item.id} className='movie'>
          <div>
            <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt={item.original_title}></img>
            <div className='movie-info'>
              <h4 className='title'>{item.title}</h4>
              <p>{item.release_date}</p>
            </div>
          </div>
        </Link>
      ))}
    </section>
  )
}

export default Movies
