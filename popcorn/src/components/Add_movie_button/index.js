import React, { useState } from 'react';
import Modal from '../Modal';
import './style.css'

const Add_movie_button = () => {
const [openModal, setOpenModal] = useState(false)

    return (
 <>
<button id= "Add_Movie_button" onClick= {() => {setOpenModal(true)}}>Ajouter un film</button>

{openModal && <Modal closeModal= {setOpenModal}/>}
</>

    )
 
}
    
  


export default Add_movie_button