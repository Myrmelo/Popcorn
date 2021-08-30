import React, {useState} from 'react';
import './style.css'

const Search = (props) => {

    
    //console.log(props)
    return (
        <div className="Search">
            <input
                type="search"
                id="Search_input"
                placeholder="Rechercher un film ..."
                value= {props.searchTitle}
                onChange={e => props.setSearchTitle(e.target.value)} />
        </div>
    )


};



export default Search