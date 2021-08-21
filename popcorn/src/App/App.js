import React, { useState, useEffect } from 'react'
import './App.css';
import Logo from '../components/Logo'
import Search from '../components/Search'
import Add_movie_button from '../components/Add_movie_button'
import Delete_movie_button from '../components/Delete_movie_button'
import Random_movie_button from '../components/Random_movie_button'
import Movie_card from '../components/Movie_card'
import axios from 'axios'

const BASE_URL = 'https://api.themoviedb.org/3/movie/'
const API_KEY = '4bcd155b9b8734cb8559319cdbfaf62f'


function App() {

  
  const [movieinfos, setMovieinfos] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000")
      .then(function (response) {
        const movies = response.data.movies;
        console.log(response.data.movies)
        return Promise.all(
          movies.map((movie) =>
            axios.get(
              `${BASE_URL}${movie.movieid}?api_key=${API_KEY}&language=fr`
            )
          )
        );
      })
      .then((responses) => {
        setMovieinfos(
          responses.map((response) => ({
            Genres: response.data.genres,
            Overview: response.data.overview,
            Poster: response.data.poster_path,
            Company: response.data.production_companies,
            Release: response.data.release_date,
            Title: response.data.title,
          }))
        );
      });
  }, []);

  
  return (
    <div className="App">
      <div className="Header">
        <Logo />
      </div>
      <div className="Menu">
        <Search />
        <Add_movie_button />
        <Delete_movie_button />
        <Random_movie_button />
      </div>
      <div className="Movies">
        {movieinfos.map((movie) => <Movie_card key={movie.Title} data={movie} />)}
      </div>

    </div>
  );
}

export default App;
