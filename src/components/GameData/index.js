import React from "react"
import "./style.css"
import Table from "./Table"
import Spinner from "../Spinner"
import posed, { PoseGroup } from "react-pose"

const PosedContainer = posed.div({
    enter : { y:0, opacity:1 },
    exit: { y:-50, opacity:0 },
})

function GameData({data, gameType, isLoading}) {
    return(
        <section className="Container">
            <PoseGroup>
                {data && (
                    <PosedContainer key="content">
                        {data.type === "nodata" ? (
                            <h2 className='emptyState'>
                                There are no upcoming games or latest results to show.
                            </h2>
                        ):(
                        <React.Fragment>
                            <h2 className='searchResult'>
                                Showing closest {data.type} game for {gameType}
                            </h2>
                            <Table data={data} />
                        </React.Fragment>
                        )}
                    </PosedContainer>
                )}
            </PoseGroup>
            {isLoading && <Spinner />}
        </section>
    )
}

export default GameData