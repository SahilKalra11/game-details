import React from "react"
import "./style.css"
import RaceSection from "./RaceSection"

function Table({ data }) {
  return (
    <div className='table'>
      {data.races.map(race => (
        <RaceSection key={race.id} race={race} />
      ))}
    </div>
  )
}

export default Table
