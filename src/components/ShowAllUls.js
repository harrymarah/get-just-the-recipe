import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import './ShowAllUls.css'

const ShowAllUls = (props) => {
    const uls = props.allRecipeUls.map(ul => {
        return <div key={uuidv4()}>
            <ul className='single-ul' dangerouslySetInnerHTML={{__html: ul.innerHTML}}></ul>
        </div>
    })
    return (
        <div className='ul-group'>
            {uls}
            {props.allRecipeUls.length ? <button>Next</button> : ''}
        </div>
    );
};

export default ShowAllUls;