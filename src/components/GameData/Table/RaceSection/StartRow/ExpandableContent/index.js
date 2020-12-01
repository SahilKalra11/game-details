import React from "react"
import "./style.css"
import posed from "react-pose"

const PosedRow = posed.span({
  enter: { x: 0, opacity: 1 },
  exit: { x: 10, opacity: 0 },
})

function ExpandableContent({ horse }) {
  const trainer = horse.trainer

  return (
    <div className='expandableContent'>
      <PosedRow>
        <b>Trainer:</b> {trainer.firstName} {trainer.lastName}
      </PosedRow>
      <PosedRow>
        <b>Father's name:</b> {horse.pedigree.father.name}
      </PosedRow>
    </div>
  )
}

export default ExpandableContent
