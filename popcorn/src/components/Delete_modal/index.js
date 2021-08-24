import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios'
import './style.css';


function Delete_modal({closeModal, data}) {

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
          closeModal(false)
    }

    return (
        <div id="ModalBackground">
            <div id="ModalContainer">
                <button id="closeModal" onClick={() => closeModal(false)}>X</button>
                <h1 id="formTitle">Supprimer le film ?</h1>
                <div id = "Delete_buttons">
                    <button id= "Delete_ok" onClick={() => deleteMovie()}>Oui</button>
                    <button id= "Dont_delete">Non</button>
                </div>

            </div>
        </div>


    );
}


export default Delete_modal