import React from "react"
import "./style.css"
import { DateTime } from "luxon"

function RaceInformationRow({ race }) {
  const date = DateTime.fromISO(race.startTime).toFormat("yyyy-MM-dd H:mm")

  return (
    <div className='raceInformation'>
      <span>#{race.number}</span>
      <span>{race.name ? race.name : "No name available"}</span>
      <span>{date}</span>
    </div>
  )
}

export default RaceInformationRow
