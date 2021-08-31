import React, { useState, useEffect } from 'react'
import './App.css';
import Logo from '../components/Logo'
import Search from '../components/Search'
import Add_movie_button from '../components/Add_movie_button'
import Random_movie_button from '../components/Random_movie_button'
import Movie_card from '../components/Movie_card'
import axios from 'axios'

const BASE_URL = 'https://api.themoviedb.org/3/movie/'
const API_KEY = '4bcd155b9b8734cb8559319cdbfaf62f'


function App() {


  const [movieinfos, setMovieinfos] = useState([]);
  const [searchTitle, setSearchTitle] = useState('');
 // console.log(movieinfos)

  useEffect(() => {

    axios
      .get("http://localhost:5000")
      .then(function (response) {
        const movies = response.data.movies;
       // console.log(response.data.movies)
        return Promise.all(
          movies.map((movie) =>
            axios.get(
              `${BASE_URL}${movie.movieid}?api_key=${API_KEY}&language=fr`
            )
          ),
        );
      })
      .then((responses) => {
       // console.log(responses)
        setMovieinfos(
          responses.map((response) => ({
            Genres: response.data.genres,
            Overview: response.data.overview,
            Poster: response.data.poster_path,
            Company: response.data.production_companies,
            Release: response.data.release_date,
            Title: response.data.title,
            Id: response.data.id
          }))
        );
      });
  }, []);


console.log(searchTitle)
  return (
    <div className="App">
      <div className="Header">
        <Logo />
      </div>
      <div className="Menu">
        <Search
          searchTitle={searchTitle}
          setSearchTitle={setSearchTitle}
        />
        <Add_movie_button />
        <Random_movie_button data={movieinfos} />
      </div>
      <div className="Movies">
      
         {searchTitle ? movieinfos.filter(movie => movie.Title.includes(searchTitle)).map(movie => (<Movie_card key={movie.Title} data={movie} />))
          :
          movieinfos.map(movie => <Movie_card key={movie.Title} data={movie} />)} 
          

      </div>

    </div>
  );
}

export default App;
