import { Navigate, useLocation, useParams } from "react-router";
import { useState } from "react";
import { Link } from "react-router-dom";
import RankedGame from "./RankedGame";

import "../../Stylesheets/SummonerPage/SummonerGameView.css"
import NavIcon from "../GeneralComponents/NavIcon";

function SummonerGameView() {

  let {name, region} = useParams();

  let [firstPlayerIndex, setFirstPlayerIndex] = useState(null);
  let [secondPlayerIndex, setSecondPlayerIndex] = useState(null);

  const { state } = useLocation();

  if(!state){
    return <Navigate to={`/account/${region}/${name}`}/>
  }

  if(state && !secondPlayerIndex && !firstPlayerIndex){
    Object.keys(state.matchData).map((playerName, index) => {
      if(name.toLowerCase() === playerName.toLowerCase()){
        if(index < 5){
          setFirstPlayerIndex(index);
          setSecondPlayerIndex(index + 5);
        }
        else{
          setFirstPlayerIndex(index - 5);
          setSecondPlayerIndex(index);
        }
      }
    })
  }

  const selectPlayer = (e) => {
    let targetIndex = parseInt(e.currentTarget.id);
    if(targetIndex < 5) setFirstPlayerIndex(targetIndex);
    else setSecondPlayerIndex(targetIndex);
  }

  return (
    <>
      <NavIcon path={`./../..`} description="Back" icon={'<'}/>
      <div className="game-view-container">
        <div className="game-view-team">
          {
            Object.keys(state.matchData).map((player, index) => {
              if(index < 5){
                return <div className="game-view-player" key={`${player}${index}`} id={index} onClick={selectPlayer}>
                <span className={name.toLowerCase() === player.toLowerCase() ? "searched-player" : ""} to={`../account/${region}/${player}`}>{player}</span>
                <div className={`player-game-wrapper ${firstPlayerIndex === index ? "selected-player" : ""}`}>
                    <RankedGame win={state.matchData[player].win} kills={state.matchData[player].kills} 
                    deaths={state.matchData[player].deaths} spell1={state.matchData[player].spell1} spell2={state.matchData[player].spell2}
                    assists={state.matchData[player].assists} champion={state.matchData[player].champion} 
                    playerItems={state.matchData[player].items} gameStats={state.matchData[player].gameStats} moreInfoButton={false}/>
                </div>
              </div>
              } 
            })
          }
        </div>

        <div className="compare-box">
          {
            Object.keys(state.matchData).map((player, index) => {
              if(index === firstPlayerIndex || index === secondPlayerIndex){
                return <div className="compare-player" key={`compare${player}`}>
                        <img src={`http://ddragon.leagueoflegends.com/cdn/13.1.1/img/champion/${state.matchData[player].champion}.png`} />
                        <Link to={`/account/${region}/${player}`} className={`${name.toLowerCase() === player.toLowerCase() ? "searched-player" : "compare-player-name"}`}>{player}</Link>
                        <div className="compare-stats-container">
                        {
                          Object.keys(state.matchData[player].gameStats).map(statName => {
                            return <div className="compare-stats">
                                    <div className="stat-name">{statName}</div>
                                    <div className="stat-number">{state.matchData[player].gameStats[statName]}</div>
                                  </div>
                          })
                        }
                        </div>
                      </div>
              }
            })
          }
        </div>

        <div className="game-view-team">
          {
            Object.keys(state.matchData).map((player, index) => {
              if(index >= 5){
                return <div className="game-view-player" key={`${player}${index}`} id={index} onClick={selectPlayer}>
                  <span className={name.toLowerCase() === player.toLowerCase() ? "searched-player" : ""} to={`../account/${region}/${player}`}>{player}</span>
                  <div className={`player-game-wrapper ${secondPlayerIndex === index ? "selected-player" : ""}`}>
                    <RankedGame win={state.matchData[player].win} kills={state.matchData[player].kills} 
                    deaths={state.matchData[player].deaths} spell1={state.matchData[player].spell1} spell2={state.matchData[player].spell2}
                    assists={state.matchData[player].assists} champion={state.matchData[player].champion} 
                    playerItems={state.matchData[player].items} gameStats={state.matchData[player].gameStats} moreInfoButton={false}/>
                  </div>
                </div>
              }  
            })
          }
        </div>
      </div>
    </>
  )
}

export default SummonerGameView

