import React from "react"
import "./style.css"

function BaseRow({ start }) {
  return (
    <div className='baseRow'>
      <span>#{start.number}</span>
      <span>{start.horse.name}</span>
      <span>
        {start.driver.firstName} {start.driver.lastName}
      </span>
    </div>
  )
}

export default BaseRow
