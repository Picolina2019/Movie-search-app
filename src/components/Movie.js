import React from 'react';
import '../App.css';
const Movie =({result,open})=>{

    return(
        <div className='result' onClick={()=>open(result.imdbID)}>
          {result.Poster === 'N/A' ? (<img src='https://kritka.info/uploads/posts/no_poster.jpg' alt='poster'/> ) : (<img src={result.Poster} alt='poster'/>)}
          <h3>{result.Title}</h3>  
        </div>
    )
    
}
export default Movie;