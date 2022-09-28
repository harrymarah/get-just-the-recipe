import React from 'react'
import './ScrollButton.css'
import 'animate.css'

const ScrollButton = (props) => {
  const getCssProp = (direction) => {
    if (direction === 'up') return 'scroll-up'
    if (direction === 'down') return 'scroll-down'
  }
  const getIcon = (direction) => {
    if (direction === 'up') return 'fa-chevron-up'
    if (direction === 'down') return 'fa-chevron-down'
  }
  return (
    <div className="scroll-button animate__animated animate__fadeIn">
      <button onClick={props.onClick} className={getCssProp(props.direction)}>
        <i className={'fa-solid ' + getIcon(props.direction)}></i>
      </button>
    </div>
  )
}

export default ScrollButton
