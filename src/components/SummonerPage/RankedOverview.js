import "../../Stylesheets/SummonerPage/RankedOverview.css"
import RankedGame from "./RankedGame"

const RankedOverview = ({wins, losses, matchHistory, playerName}) => {
  return (
  <div className="overview-container">
    <span className="ranked-overview-text">Ranked Overview</span>
    <div className="win-loss">
      <div className="win-text">Wins</div>
      <div className="lose-text">Losses</div>
      <div className="win-loss-number">{wins}</div>
      <div className="win-loss-number">{losses}</div>
    </div>
    <div className="recent-games">
      {matchHistory &&
        matchHistory.map((match, index) => {
          return <RankedGame win={match[playerName].win} kills={match[playerName].kills} 
          deaths={match[playerName].deaths} spell1={match[playerName].spell1} spell2={match[playerName].spell2}
          assists={match[playerName].assists} champion={match[playerName].champion} 
          playerItems={match[playerName].items} gameStats={match[playerName].gameStats} key={index} gameKey={index} matchData={match} moreInfoButton={true}/>
        })
      }
    </div>
  </div>
  )
}

RankedOverview.defaultProps = {
    wins: 0,
    losses: 0,
    matchHistory: [
    ]
}

export default RankedOverview