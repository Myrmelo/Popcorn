import React, {useState, useEffect} from 'react'
import './App.css';
import Logo from '../components/Logo'
import Search from '../components/Search'
import Add_movie_button from '../components/Add_movie_button'
import Delete_movie_button from '../components/Delete_movie_button'
import Random_movie_button from '../components/Random_movie_button'
import Movie_card from '../components/Movie_card'
import axios from 'axios'

function App() {

  const [titles, setTitles] = useState([]);

useEffect(() => {
  axios.get('http://localhost:5000')
  .then(function (response) {
    // handle success
    for (let i=0;i<response.data.movies.length;i+=1) {
      setTitles(response.data.movies[i].name)
    }
    

  })

  .catch(function (error) {
    // handle error
    console.log(error);
  })
     
  
}, []);

console.log({titles})

 /* axios.get('http://localhost:5000')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })*/

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
<Movie_card />
<Movie_card />
<Movie_card />
<Movie_card />
<Movie_card />
      </div>
      
    </div>
  );
}

export default App;
