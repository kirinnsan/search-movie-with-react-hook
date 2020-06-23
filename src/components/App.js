import React, { useEffect, useReducer } from 'react';
import '../App.css';
import Header from './Header';
import Movie from './Movie';
import Search from './Search';
import reducer from '../reducers/index'
import {
  SEARCH_MOVIES_REQUEST,
  SEARCH_MOVIES_SUCCESS,
  SEARCH_MOVIES_FAILURE
} from '../actions/index'

const MOVIE_API_KEY = 'http://www.omdbapi.com/?i=tt3896198&apikey=XXXXX';

function App() {
  const intialState = {
    loading: true,
    movies: [],
    errorMessage: null
  }

  const [state, dispatch] = useReducer(reducer, intialState);

  // 初回render後のみ実行されるよう、2つ目の引数に
  // 空配列を渡す
  useEffect(() => {
    fetch(MOVIE_API_KEY)
      .then(response => (response.json))
      .then(jsonResponse => {
        dispatch({
          type: SEARCH_MOVIES_SUCCESS,
          payload: jsonResponse.Search
        })
      })
  }, []);

  const search = searchValue => {
    dispatch({
      type: SEARCH_MOVIES_REQUEST,
    })

    fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=XXXXX`)
      .then(response => response.json())
      .then(jsonResponse => {
        if (jsonResponse.Response === "True") {
          dispatch({
            type: SEARCH_MOVIES_SUCCESS,
            payload: jsonResponse.Search
          });
        } else {
          dispatch({
            type: SEARCH_MOVIES_FAILURE,
            error: jsonResponse.Error
          });
        }
      })
  }

  const { movies, errorMessage, loading } = state;

  const movieaaa = loading && !errorMessage ? (<span className="load">loading...</span>) : errorMessage ? (
    <div className="errorMessage">{errorMessage}</div>) : movies ? (
      movies.map((movie, index) => (
        <Movie key={`${index}-${movie.Title}`} movie={movie} />
      ))
    ) : []

  return (
    <div className="App">
      <Header text="Search Movie" />
      <Search search={search} />
      <p className="App-intro">気になる映画を検索しましょう</p>
      <div className="movies">
      {movieaaa}
      </div>
    </div>
  );
}

export default App;
