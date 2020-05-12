import React, { useEffect,useContext } from 'react';
import './App.css';
import Search from './components/Search';
import axios from 'axios';
import MovieList from './components/MovieList';
import Info from './Info';
import {MyContext} from './Context'


function App() {
  const { state, dispatch } = useContext(MyContext);

  const API_URL = 'http://www.omdbapi.com/?apikey=690435ab';
  useEffect(() => {
    fetchResults();
  }, []);

  const fetchResults = () => {
    axios(API_URL + '&s=' + 'Batman')
      .then(({ data }) => {
        let results = data.Search;

        dispatch({ type: 'FETCH_SUCCESS', payload: results });
      })
      .catch((err) => {
        dispatch({ type: 'FETCH_ERROR' });
      });
  };

  const search = (e) => {
    if (e.key === 'Enter') {
      axios(API_URL + '&s=' + state.query)
        .then(({ data }) => {
          let results = data.Search;

          dispatch({ type: 'FETCH_ID', payload: results });
        })
        .catch((err) => {
          dispatch({ type: 'FETCH_ERROR' });
        });
    }
  };

  const handleInput = (e) => {
    let search = e.target.value;

    dispatch({ type: 'SET_QUERY', payload: search });
  };

  const open = (id) => {
    axios(API_URL + '&i=' + id)
      .then(({ data }) => {
        let result = data;

        dispatch({ type: 'SET_SELECTED', payload: result });
      })
      .catch((err) => {
        dispatch({ type: 'FETCH_ERROR' });
      });
  };

  const close = () => {
    dispatch({ type: 'CLOSE' });
  };

  return (
    <div className='App'>
      <header>
        <h1>Movie Database</h1>
      </header>
      <main>
        {state.loading ? (
          <p
            style={{
              fontSize: '3rem',
              textAlign: 'center',
              marginTop: '2rem',
              color: 'orange',
            }}
          >
            Loading....
          </p>
        ) : (
          <>
            <Search
              handleInput={handleInput}
              search={search}
              query={state.query}
            />

            {state.error ? (
              <p
                style={{
                  textAlign: 'center',
                  marginTop: '3rem',
                  fontSize: '2rem',
                  fontStyle: 'italic',
                }}
              >
                Something went wrong
              </p>
            ) : (
              <>
                <MovieList results={state.results} open={open} />
                {typeof state.selected.Title !== 'undefined' ? (
                  <Info selected={state.selected} close={close} />
                ) : (
                  false
                )}
              </>
            )}
          </>
        )}
      </main>
    </div>
  );
}

export default App;
