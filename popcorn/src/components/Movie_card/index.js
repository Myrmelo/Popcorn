import React from 'react';
import './style.css'

const Movie_card = (data) => {


    console.log(data)
    return (


        <div id="Card">
            <img id="Poster" src={`https://image.tmdb.org/t/p/original/${data.data.Poster}`} />
            <div id="Movie_infos">
                  <p id="Movie_genres"> {data.data.Genres.map(genre => genre.name).join(', ')}</p>
            <p id="Movie_overview"> {data.data.Overview}</p>
            </div>
  
        </div>
    )

}




export default Movie_card