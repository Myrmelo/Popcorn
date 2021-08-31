import React, { useState } from 'react';
import './style.css'


const Random_movie_button = (data) => {

    const [openModal, setOpenModal] = useState(false)
    
 
let randomMovie = data.data[Math.floor(Math.random()*data.data.length)]

 console.log(randomMovie)

    return (
        <>
            <button id="Random_movie_button" onClick={() => setOpenModal(true)}>Film au hasard !</button>

            {openModal &&
                <div id="ModalBackground">
                    <div id="ModalContainer">
                        <button id="closeModal" onClick={() => setOpenModal(false)}>X</button>
                        <h1 id="yourMovie">Votre film !</h1>
                        <div className='RandomCard' >
                        
                        <img id="Poster" src={`https://image.tmdb.org/t/p/original/${randomMovie.Poster}`} />
            <div id="Movie_infos">
            <p id="Movie_genres"> {randomMovie.Genres.map(genre => genre.name).join(', ')}</p>
                <p id="Movie_release"> {randomMovie.Release.split('-').reverse().join('-')} </p>
            <p id="Movie_overview"> {randomMovie.Overview}</p>
            <button id ="Delete" onClick= {() => {setOpenModal(true)}}>Supprimer</button>
            </div>

                    </div>
                </div>
                </div>
            }

        </>
    )

}




export default Random_movie_button