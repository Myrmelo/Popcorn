import React, {useState} from 'react';
import './style.css'
import Delete_modal from '../Delete_modal';
import axios from 'axios';


const Movie_card = (data) => {

const Release = data.data.Release
let OrderedDate = Release.split('-').reverse().join('-')

const [openModal, setOpenModal] = useState(false)
const [isDelete, setIsDelete] = useState(false)
function deleteMovie () {
    console.log(data.data.Id)
        axios.delete(`http://localhost:5000/deleteMovie/${data.data.Id}`)

        .then(response => {
            console.log("Status: ", response.status);
            console.log("Data: ", response.data);
            console.log(data.movieId)
          }).catch(error => {
            console.error('Something went wrong!', error);
          });
          setOpenModal(false)
          setIsDelete(true)

    }
console.log(OrderedDate)
    console.log(data)
    return (

        <>
        <div className={isDelete ? 'Hidden' : 'Card'} >
            <img id="Poster" src={`https://image.tmdb.org/t/p/original/${data.data.Poster}`} />
            <div id="Movie_infos">
                  <p id="Movie_genres"> {data.data.Genres.map(genre => genre.name).join(', ')}</p>
                  <p id="Movie_release">{OrderedDate} </p>
            <p id="Movie_overview"> {data.data.Overview}</p>
            <button id ="Delete" onClick= {() => {setOpenModal(true)}}>Supprimer</button>
            </div>
  
        </div>
        {openModal && <Delete_modal closeModal= {setOpenModal} data= {data}>
        <button id= "Delete_ok" onClick={() => deleteMovie()}>Oui</button>
                    <button id= "Dont_delete">Non</button>
            </Delete_modal>}
    </>
    )
    
}




export default Movie_card