import React from 'react';
import { animateScroll as scroll } from "react-scroll";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import "./buttons.scss"

export const ScrollButton = () => {

  const handleClick = () => {
    scroll.scrollToTop(); 
  }

  return(
    <div className="scrollToTopButton">
      <button onClick={handleClick}><FontAwesomeIcon icon={faArrowUp} /></button>
    </div>
  )
}
