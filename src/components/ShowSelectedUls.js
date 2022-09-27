import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import './ShowSelectedUls.css'
import 'animate.css'

const ShowSelectedUls = (props) => {
  const selectedUls = props.selectedRecipeUls.map((selectedUl) => {
    return (
      <div
        key={uuidv4()}
        dangerouslySetInnerHTML={{ __html: selectedUl }}
      ></div>
    )
  })
  return (
    <div className="ShowSelectedUls animate__animated animate__fadeInUp">
      <h1>Your recipe...</h1>
      {selectedUls}
      <button className="reset-button" onClick={props.resetUI}>
        Reset <i className="fa-solid fa-arrow-rotate-left"></i>
      </button>
    </div>
  )
}

export default ShowSelectedUls
