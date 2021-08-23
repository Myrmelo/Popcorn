import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios'
import './style.css';


function Delete_modal({ closeModal }) {


    return (
        <div id="ModalBackground">
            <div id="ModalContainer">
                <button id="closeModal" onClick={() => { closeModal(false) }}>X</button>
                <h1 id="formTitle">Supprimer le film ?</h1>
                <div id = "Delete_buttons">
                    <button id= "Delete_ok">Oui</button>
                    <button id= "Dont_delete">Non</button>
                </div>

            </div>
        </div>


    );
}


export default Delete_modal