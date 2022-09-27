import React from 'react';
import './Guide.css'

const Guide = (props) => {
    let guideMessage;
    switch(props.stage){
        case 1:
            guideMessage = 'Paste in the entire URL to see your recipe with no extra fluff or adverts';
            break;
        case 2:
            guideMessage = 'Select the boxes that have relevant information for the recipe, like ingredients and the method. (Please note you may not see all of the information you need in the small boxes, but don’t worry, on the next page you will!)';
            break;
        case 3:
            guideMessage = 'Here’s your recipe! Ad and fluff free - enjoy!';
            break;
        default:
            guideMessage = '';
            break;

    }
    return (
        <div className='Guide'>{guideMessage}</div>
    );
};

export default Guide;