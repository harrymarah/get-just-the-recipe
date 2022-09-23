import React from 'react';
import './SingleUl.css'
import sanitizeHtml from 'sanitize-html';


const SingleUl = (props) => {

    // const selectDiv = (e) => {
    //     e.currentTarget.classList.toggle('selected')
    // }

    return (
        <div className='single-ul' onClick={props.selectDiv}>
            <ul dangerouslySetInnerHTML={{__html: sanitizeHtml(props.ulHtml.innerHTML)}}>
            </ul> 
        </div>
           
    );
};


export default SingleUl;