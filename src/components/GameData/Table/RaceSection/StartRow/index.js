import React from "react"
import styles from "./style.css"
import ExpandableContent from "./ExpandableContent"
import cx from "classnames"
import BaseRow from "./BaseRow"
import posed from "react-pose"

const PosedContainer = posed.div({
  enter: {
    height: "auto",
    staggerChildren: 50,
    delayChildren: 100,
    transition: { duration: 150 },
  },
  exit: {
    height: 0,
    delay: 150,
    staggerChildren: 50,
    transition: { duration: 150 },
  },
})

function StartRow({ start, onClick, isExpanded }) {
  return (
    <div
      onClick={() => onClick(start.number)}
      className={cx(styles.startRow, { [styles.expanded]: isExpanded })}
    >
      <BaseRow start={start} />
      <PosedContainer
        pose={isExpanded ? "enter" : "exit"}
        withParent={false}
        className={styles.posed}
      >
        <ExpandableContent horse={start.horse} />
      </PosedContainer>
    </div>
  )
}

export default StartRow
