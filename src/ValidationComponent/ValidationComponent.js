import React, { Component } from 'react';

const validationComponent = (props) => {

    let textCritera = "Text is too short"
    if (props.wordLength >= 5) {
        textCritera = "Text is long enough"
    }

    return (
        <div>
            <p>{textCritera}</p>
        </div>
    )

}

export default validationComponent;