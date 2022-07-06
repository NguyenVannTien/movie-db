import React, { useState, createContext,useEffect, useRef } from 'react'

const AppContext = createContext()

const AppProvider = ({ children }) => {
  // make sure to use https

  const [data, setData] = useState([]);
  const [dataSearch, setDataSearch] = useState([]);
  
  const [searchMovie, setSearchMovie] = useState('')
  
  const api = 'https://api.themoviedb.org/3/movie/now_playing?api_key=928837958e8384f75361800f452613ba&language=en-US&page=1'

  const handleSearchMovieChange = (e) =>{
    const value = e.target.value;
    setSearchMovie(value);
  }

  useEffect(()=>{
    const getFetchApi = async () => {
      try{
        
        const response = await fetch(api)
        const responseJson = await response.json();
        setData(responseJson.results)
        
      }catch{
        console.log('Looi!!')
      }
    }
    
    getFetchApi();
  },[])

  useEffect(() => {
    if(searchMovie !== '') {
      const dataSearchFunc = data.filter(item => item.title.includes(searchMovie));
      setDataSearch(dataSearchFunc);
    }
    else {
      setDataSearch([])
    }
  }, [searchMovie])

  const value = {
    data,
    dataSearch,
    searchMovie,
    handleSearchMovieChange,
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}


export { AppContext, AppProvider }
