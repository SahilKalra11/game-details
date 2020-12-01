import React from "react"
import "./style.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function Spinner() {
  return (
    <div className='spinnerContainer'>
      <FontAwesomeIcon icon="spinner" className='spinner' />
    </div>
  )
}

export default Spinner
