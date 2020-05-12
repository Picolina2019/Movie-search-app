import React from 'react';
import Movie from './Movie';
import '../App.css';
const MovieList =({results,open})=>{

    return(
        <>
        {!results ? <p style={{fontSize:'2rem', color:'green', textAlign:'center', marginTop:'2rem'}}>
            Please,enter value properly </p> :
        <section className='results'>

            {results.map(result =>(
                <Movie key={result.imdbID} result={result} open={open} />
            ))}
        </section>}
        </>
    )}
export default MovieList;