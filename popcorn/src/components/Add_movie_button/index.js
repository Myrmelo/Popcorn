import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios'
import './style.css'

const Add_movie_button = () => {
    const [openModal, setOpenModal] = useState(false)
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
        setOpenModal(false)
        window.location.reload();
    }
    return (
        <>
            <button id="Add_Movie_button" onClick={() => { setOpenModal(true) }}>Ajouter un film</button>

            {openModal &&
                <div id="ModalBackground">
                    <div id="ModalContainer">
                        <button id="closeModal" onClick={() => { setOpenModal(false) }}>X</button>
                        <h1 id="formTitle">Numéro du film</h1>
                        <form onSubmit={handleSubmit(onSubmit)} id="addMovieForm">
                            <input type="text" id="movieId" {...register("movieId")} required></input>
                            <input id="submit" type="submit" value="Ajouter !"/>
                            
                        </form>
                     
                    </div>
                </div>
            }
        </>

    )

}




export default Add_movie_button