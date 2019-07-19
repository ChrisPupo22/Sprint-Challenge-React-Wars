import React from 'react';
import './cards.scss';

export default function Cards(props){

    return(
        <div className='card-container'>
            <h2 className= 'character-name'>{ props.charName }</h2>
                <div>
                    <p className= 'character-gender'>{ props.charGender }</p>
                    <p className= 'birth-year'>{ props.charYear }</p>
                </div>
        </div>
    )
}