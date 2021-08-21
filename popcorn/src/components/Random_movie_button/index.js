import axios from 'axios';
import React, {useState, useEffect} from 'react';
import './style.css'

/*const BASE_URL = 'https://api.themoviedb.org/3/movie/'
const API_KEY = '4bcd155b9b8734cb8559319cdbfaf62f'

function Random () {
    const [movieId, setMovieId] = useState('')
    const [movieInfos, setMovieInfos] = useState('')
    useEffect(() => {
      axios
        .get("http://localhost:5000")
        .then(function (response) {
          const movies = response.data.movies;
          console.log(response.data.movies)
          setMovieId(response.data.movies)
          console.log(movieId)
          return Promise.all(
            
              axios.get(
                `${BASE_URL}${movieId}?api_key=${API_KEY}&language=fr`
              )
            )
          
        })
    .then(response => {
       
        setMovieInfos(response.data.movieId);
        console.log(movieId)
      }).catch(error => {
        console.error('Something went wrong!', error);
      });
    

    }, []);
}*/

const Random_movie_button = () => (
<button id= "Random_movie_button" /*onClick={Random()}*/>Film au hasard !</button>
)

export default Random_movie_button