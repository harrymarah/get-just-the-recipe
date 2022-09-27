import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import './ShowSelectedUls.css'

const ShowSelectedUls = (props) => {
    const selectedUls = props.selectedRecipeUls.map(selectedUl => {
        return <div key={uuidv4()} dangerouslySetInnerHTML={{__html: selectedUl}}></div>
    })
    return (
        <div className='ShowSelectedUls'>
            <h1>Your recipe...</h1>
            {selectedUls}
        </div>
    );
};

export default ShowSelectedUls;