import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const ShowAllUls = (props) => {
    const html = props.allRecipeUls[33]
    console.log(props.allRecipeUls[33])
    // const returnHtml = () => {
    //     return {__html: html}
    // }    
    return (
        <div dangerouslySetInnerHTML={{__html: props.allRecipeUls[33].outerHTML}} >
        
        </div>
    );
};

export default ShowAllUls;