import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios'
import './style.css';


function Modal({closeModal}) {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
       console.log(data)
        axios.post("http://localhost:5000/addMovie", data.movieId)

        .then(response => {
            console.log("Status: ", response.status);
            console.log("Data: ", response.data);
            console.log(data.movieId)
          }).catch(error => {
            console.error('Something went wrong!', error);
          });

    }
    return (
        <div id="ModalBackground">
            <div id="ModalContainer">
                <button id= "closeModal" onClick= {() => {closeModal(false)}}>X</button>
                <h1 id= "formTitle">Numéro du film</h1>
                <form onSubmit={handleSubmit(onSubmit)} id="addMovieForm">
                    <input type="text" id="movieId" {...register("movieId")} required></input>
                    <input id= "submit" type="submit" value="Ajouter !"></input>
                </form>
            </div>
        </div>


    );
}


export default Modal