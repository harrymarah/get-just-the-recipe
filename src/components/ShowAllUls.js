import React from 'react';
import './ShowAllUls.css'
import SingleUl from './SingleUl'
import { v4 as uuidv4 } from 'uuid';


const ShowAllUls = (props) => {
    const uls = props.allRecipeUls.map(ul => {
        return <SingleUl key={uuidv4()} ulHtml={ul} selectDiv={props.selectDiv}/>
    })

    return (
        <div>
            <div className='ul-group'>
                {uls}
            </div>
            {props.allRecipeUls.length ? <button>Next</button> : ''}
        </div>
        
    );
};

export default ShowAllUls;