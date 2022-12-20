import "../Stylesheets/RankedOverview.css"
import RankedGame from "./RankedGame"

const RankedOverview = ({wins, losses, matchHistory}) => {
  return (
    <div style={{width: "100%", height: "100%"}}>
      <div className="overview-container">
        <div style={{textDecoration: "underline"}}>Ranked Overview</div>
        <div className="win-loss">
          <div>Wins</div>
          <div>Losses</div>
          <div style={{color: "white"}}>{wins}</div>
          <div style={{color: "white"}}>{losses}</div>
        </div>
      </div>
      <div className="recent-games-container">
        <div className="recent-games">
          {matchHistory &&
            matchHistory.map((match, index) => {
              return <div className="recent-game" key={index}>     
                <RankedGame win={match.win} kills={match.kills} deaths={match.deaths} assists={match.assists} champion={match.champion}/>
              </div>
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
      {
        win: true,
        kills: 40,
        deaths: 40,
        assists: 40,
        champion: "Aatrox",
      },
      {
        win: false,
        kills: 0,
        deaths: 0,
        assists: 0,
        champion: "Ahri",
      },
      {
        win: false,
        kills: 0,
        deaths: 0,
        assists: 0,
        champion: "Talon",
      },
      {
        win: false,
        kills: 0,
        deaths: 0,
        assists: 0,
        champion: "Ahri",
      },
      {
        win: false,
        kills: 0,
        deaths: 0,
        assists: 0,
        champion: "Talon",
      },
      {
        win: false,
        kills: 0,
        deaths: 0,
        assists: 0,
        champion: "Ahri",
      },
      {
        win: false,
        kills: 0,
        deaths: 0,
        assists: 0,
        champion: "Talon",
      }
    ]
}

export default RankedOverview