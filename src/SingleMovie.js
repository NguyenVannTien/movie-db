import React, { useContext } from 'react'
import { useParams, Link } from 'react-router-dom'
import { AppContext } from './context'

const SingleMovie = () => {

  const context = useContext(AppContext)
  const movie = context.data;

  const  param = useParams()

  const checkMovie = movie.filter(item => item.id == param.id)

  return (
    <>
      {checkMovie.map((item)=>(
        <div key={item.id} className='single-movie'>
          <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} className='single-movie' alt={item.original_title}></img>
          <div className='single-movie-info'>
            <h2>{item.title}</h2>
            <p>{item.overview}</p>
            <h4>{item.release_date}</h4>
            <Link to='/' className='btn'>back to movies</Link>
          </div>
        </div>  
      ))}
    </>
  )
}

export default SingleMovie
