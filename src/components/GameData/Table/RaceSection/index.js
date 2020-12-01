import React, { useState } from "react"
import styles from "./style.css"
import RaceInformationRow from "./RaceInformationRow"
import StartRow from "./StartRow"

function RaceSection({ race }) {
  const [expandedStartNumbers, setExpandedStartNumbers] = useState([])

  const handleRowClick = startNumber => {
    if (expandedStartNumbers.includes(startNumber))
      setExpandedStartNumbers(
        expandedStartNumbers.filter(number => number !== startNumber)
      )
    else setExpandedStartNumbers([...expandedStartNumbers, startNumber])
  }

  return (
    <div className={styles.raceSection}>
      <RaceInformationRow race={race} />
      <div className={styles.headerRow}>
        <span>Start number</span>
        <span>Horse</span>
        <span>Driver</span>
      </div>
      {race.starts.map(start => (
        <StartRow
          key={start.number}
          start={start}
          onClick={handleRowClick}
          isExpanded={expandedStartNumbers.includes(start.number)}
        />
      ))}
    </div>
  )
}

export default RaceSection
