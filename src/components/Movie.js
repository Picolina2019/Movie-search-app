import React from 'react';
import '../App.css';
const Movie =({result,open})=>{

    return(
        <div className='result' onClick={()=>open(result.imdbID)}>
          <img src={result.Poster}/>
          <h3>{result.Title}</h3>  
        </div>
    )
    
}
export default Movie;