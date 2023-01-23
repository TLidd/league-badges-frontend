import "../../Stylesheets/SummonerPage/RankedOverview.css"
import RankedGame from "./RankedGame"

const RankedOverview = ({wins, losses, matchHistory}) => {
  return (
    <div style={{width: "100%", height: "100%"}}>
      <div className="overview-container">
        <div style={{textDecoration: "underline"}}>Ranked Overview</div>
        <div className="win-loss">
          <div className="win-text">Wins</div>
          <div className="lose-text">Losses</div>
          <div className="win-loss-number">{wins}</div>
          <div className="win-loss-number">{losses}</div>
        </div>
      </div>
      <div className="recent-games-container">
        <div className="recent-games">
          {matchHistory &&
            matchHistory.map((match, index) => {
              return <RankedGame win={match.win} kills={match.kills} deaths={match.deaths} assists={match.assists} champion={match.champion} playerItems={match.items} key={index}/>
            })
          }
        </div>
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