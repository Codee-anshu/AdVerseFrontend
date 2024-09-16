import React from 'react'
import "./Button.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'



function Button(props) {

  const { title, width, height, onClick } = props
  return (
    <div className='buttonMainContainer' style={{ width: width, height: height }} onClick={onClick}>
      <text className='buttonText' color='white'>{title}</text>
      <FontAwesomeIcon icon={faArrowRight} className="icon" color='white' />

    </div>
  )
}

export default Button