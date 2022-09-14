import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const ShowAllUls = (props) => {
    console.log(props.allRecipeUls)
    console.log(typeof props.allRecipeUls)
    const allUlsInDivs = props.allRecipeUls.map(ul => {
        return <div key={uuidv4()}> {ul} </div>
    })

    return (
        <div>
            {allUlsInDivs}
        </div>
    );
};

export default ShowAllUls;