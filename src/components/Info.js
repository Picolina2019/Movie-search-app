import React from 'react';
import '../App.css';

const Info=({selected,close})=>{
    return(
        <section className='popup'>
            <div className='content'>
             <h2>{selected.Title}<span>({selected.Year})</span></h2>
             <p className='rating'>Rating:{selected.imdbRating}</p>
             <div className='plot'>
                {selected.Poster ==='N/A' ? (<img src='https://kritka.info/uploads/posts/no_poster.jpg' alt='poster'/> ):  (<img src={selected.Poster} alt='poster'/>)}
                 <p>{selected.Plot}</p>
             </div>
             <button className='close' onClick={close}>Close</button>
            </div>

        </section>
    )
}
export default Info;