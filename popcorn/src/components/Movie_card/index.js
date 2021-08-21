import React from 'react';
import './style.css'

const Movie_card = (data) => {


    console.log(data)
    return (
        <div id="Card">
            <img id="Poster" src= {`https://image.tmdb.org/t/p/original/${data.data.Poster}`} />
        </div>
    )

}




export default Movie_card