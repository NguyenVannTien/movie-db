import React, { useContext } from 'react'
import { AppContext } from './context'
const SearchForm = () => {

  const context = useContext(AppContext)
  console.log('context',context)

  return (
    <form className='search-form'>
      <h2>search movies</h2>
      <input 
        type='text' 
        className='form-input' 
        value={context.searchMovie}
        onChange={context.handleSearchMovieChange}
      />
    </form>
  )
}

export default SearchForm
