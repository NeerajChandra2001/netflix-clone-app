import React from 'react'
import { useState,useEffect } from 'react'
import instance from '../baseUrl'
import './Banner.css'

function Banner({fetchUrl}) {
    const base_url = "https://image.tmdb.org/t/p/original/";

     //movie state
     const [movie, setMovies] = useState([])

     async function fetchData() {
         const result = await instance.get(fetchUrl)
         console.log(result.data.results);  //array(20) of data
         setMovies(result.data.results[Math.floor(Math.random()*result.data.results.length-1)])
     }
     useEffect(() => {
         fetchData();
     }, [])
console.log(movie);

//truncate
function truncate(str,n){
  return str?.length>n?str.substr(0,n-1)+'...':str
}
     


  return (
  <div className='banner' 
  style={{backgroundImage:`url(${base_url}${movie.backdrop_path})`,
backgroundSize:"cover",
backgroundPosition:"center"
}}
  >
    <div className='banner-content'>
      <h1 className='banner-title'>{movie.name}</h1>
      <h3 className='banner-overview'> {truncate(movie.overview,150)}</h3>
    </div>
  </div>

    
  )
}

export default Banner