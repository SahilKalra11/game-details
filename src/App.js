import React, {useState} from 'react'
import "./App.css"
import GameData from "./components/GameData"
import InputContainer from "./components/InputContainer"


const AVAILABLE_GAME_TYPES = ["V75", "V65", "V64", "V4"]

function App() {

  const [gameType, setGameType] = useState("");
  const [gameData, setGameData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchAndUpdateGameData = (id,type) => {
    const fetchUrl = `https://www.atg.se/services/racinginfo/v1/api/games/${id}`
    
    fetch(fetchUrl).then(res => 
      res.json().then(data => {
        setIsLoading(false)
        setGameData({...data,type})
      })
    )
  }

  const sortByStartTime = (a,b) => new Date(b.startTime) - new Date(a.startTime)

  const handleSetGameData = data => {
    if(data.upcoming.length){
      const game = data.upcoming.sort(sortByStartTime)[0]
      return fetchAndUpdateGameData(game.id,"upcoming") 
    }
    else if(data.results.length){
      const game = data.results.sort(sortByStartTime)[0]
      return fetchAndUpdateGameData(game.id,"result")
    }
    setGameData({type: "nodata"})
  }

  const handleChange = e => {
    const value = e.target.value.toUpperCase()
    setGameType(value)

    if(AVAILABLE_GAME_TYPES.includes(value)){
      setIsLoading(true)
      const fetchUrl = `https://www.atg.se/services/racinginfo/v1/api/products/${value}`

      return fetch(fetchUrl).then(res => 
          res.json().then(data => handleSetGameData(data))
        )
    }
    setGameData(null);
  }

  return (
    <main className = 'appContainer'>
      <InputContainer onChange = {handleChange} />
      <GameData gameType={gameType} data={gameData} isLoading={isLoading} />
    </main>
  );
}

export default App;
