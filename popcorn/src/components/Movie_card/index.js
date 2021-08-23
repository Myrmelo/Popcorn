import React, {useState} from 'react';
import './style.css'
import Delete_modal from '../Delete_modal';


const Movie_card = (data) => {

const Release = data.data.Release
let OrderedDate = Release.split('-').reverse().join('-')

const [openModal, setOpenModal] = useState(false)

console.log(OrderedDate)
    console.log(data)
    return (

        <>
        <div id="Card">
            <img id="Poster" src={`https://image.tmdb.org/t/p/original/${data.data.Poster}`} />
            <div id="Movie_infos">
                  <p id="Movie_genres"> {data.data.Genres.map(genre => genre.name).join(', ')}</p>
                  <p id="Movie_release">{OrderedDate} </p>
            <p id="Movie_overview"> {data.data.Overview}</p>
            <button id ="Delete" onClick= {() => {setOpenModal(true)}}>Supprimer</button>
            </div>
  
        </div>
        {openModal && <Delete_modal closeModal= {setOpenModal}/>}
    </>
    )
    
}




export default Movie_card