import React from 'react';
import '../App.css';

const Search =({handleInput, search,query})=>{
    return(
        <section className='searchbox-wrap'>
         <input type ='text' 
         value={query}
         placeholder='Search...' 
         className='searchbox'
          onChange={handleInput}
          onKeyPress={search}/>
        </section>

    )
}
export default Search;