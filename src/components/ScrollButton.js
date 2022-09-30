import React, { useRef } from 'react'
import './ScrollButton.css'
import 'animate.css'

const ScrollButton = (props) => {
  const buttonRef = useRef()

  const getCssProp = (direction) => {
    if (direction === 'up') return 'scroll-up'
    if (direction === 'down') return 'scroll-down'
  }
  const getIcon = (direction) => {
    if (direction === 'up') return 'fa-chevron-up'
    if (direction === 'down') return 'fa-chevron-down'
  }

  window.addEventListener('scroll', () => {
    if (props.direction === 'down') {
      if (document.body.scrollHeight > window.innerHeight + 200) {
        buttonRef.current?.classList.remove('hidden')
      }
      if (window.scrollY + window.innerHeight > document.body.scrollHeight) {
        buttonRef.current?.classList.add('hidden')
      }
    }
    if (props.direction === 'up') {
      if (window.scrollY < 200) {
        buttonRef.current?.classList.add('hidden')
      }
      if (window.scrollY > 200) {
        buttonRef.current?.classList.remove('hidden')
      }
    }
  })

  return (
    <div
      ref={buttonRef}
      className="hidden scroll-button animate__animated animate__fadeIn"
    >
      <button onClick={props.onClick} className={getCssProp(props.direction)}>
        <i className={'fa-solid ' + getIcon(props.direction)}></i>
      </button>
    </div>
  )
}

export default ScrollButton
