import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const ShowSelectedUls = (props) => {
    const selectedUls = props.selectedRecipeUls.map(selectedUl => {
        return <div key={uuidv4()} dangerouslySetInnerHTML={{__html: selectedUl}}></div>
    })
    return (
        <div>
            {selectedUls}
        </div>
    );
};

export default ShowSelectedUls;