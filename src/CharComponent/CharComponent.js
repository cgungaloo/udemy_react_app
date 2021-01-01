import React, { Component } from 'react';
import './CharCompent.css'

const CharComponent = (props) => {
    return(
        <div className='charComponent'>
        <p onClick={props.delete}>{props.char}</p>
        </div>
    )
}

export default CharComponent;