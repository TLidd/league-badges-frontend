import "../../Stylesheets/SummonerPage/RankedOverview.css"
import RankedGame from "./RankedGame"

const RankedOverview = ({wins, losses, matchHistory}) => {
  return (
  <div className="overview-container">
    <span style={{textDecoration: "underline"}}>Ranked Overview</span>
    <div className="win-loss">
      <div className="win-text">Wins</div>
      <div className="lose-text">Losses</div>
      <div className="win-loss-number">{wins}</div>
      <div className="win-loss-number">{losses}</div>
    </div>
    <div className="recent-games">
      {matchHistory &&
        matchHistory.map((match, index) => {
          return <RankedGame win={match.win} kills={match.kills} deaths={match.deaths} spell1={match.spell1} spell2={match.spell2}
          assists={match.assists} champion={match.champion} playerItems={match.items} gameStats={match.gameStats} key={index}/>
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