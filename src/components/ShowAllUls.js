import React from 'react'
import './ShowAllUls.css'
import SingleUl from './SingleUl'
import { v4 as uuidv4 } from 'uuid'
import 'animate.css'

const ShowAllUls = (props) => {
  const uls = props.allRecipeUls.map((ul) => {
    return <SingleUl key={uuidv4()} ulHtml={ul} selectDiv={props.selectDiv} />
  })

  return (
    <div className="ShowAllUls animate__animated animate__fadeInUp">
      <div className="ul-group">{uls}</div>
      {props.allRecipeUls.length ? (
        <button className="next-button" onClick={props.showSelectedUls}>
          Next <i className="fa-solid fa-angles-right"></i>
        </button>
      ) : (
        ''
      )}
    </div>
  )
}

export default ShowAllUls
