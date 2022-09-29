import React, { useRef } from 'react'
import { v4 as uuidv4 } from 'uuid'
import './ShowSelectedUls.css'
import 'animate.css'

const ShowSelectedUls = (props) => {
  const headingRef = useRef()
  const inputRef = useRef()

  const editHeading = () => {
    headingRef.current.classList.add('hidden')
    inputRef.current.classList.remove('hidden')
  }

  const submitHeading = (e) => {
    e.preventDefault()
    headingRef.current.innerText = inputRef.current.value
    inputRef.current.classList.add('hidden')
    headingRef.current.classList.remove('hidden')
  }

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
      <button className="save-button">
        Save <i class="fa-solid fa-plus"></i>
      </button>
      <h1 ref={headingRef} onClick={editHeading}>
        Your recipe...
      </h1>
      <form onSubmit={submitHeading}>
        <input
          ref={inputRef}
          className="hidden"
          type="text"
          defaultValue={headingRef.current?.innerText}
        />
      </form>
      <small>Click the heading to edit the name then press enter</small>
      {selectedUls}
      <button className="reset-button" onClick={props.resetUI}>
        Reset <i className="fa-solid fa-arrow-rotate-left"></i>
      </button>
    </div>
  )
}

export default ShowSelectedUls
