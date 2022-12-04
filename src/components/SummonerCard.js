import { useParams, Link } from "react-router-dom";
import "../Stylesheets/SummonerCard.css"
import { badgeDescriptions, playerRoles } from "./badgeDescriptions";

const SummonerCard = ({sumName, sumRole, sumBadges, activeGame}) => {
  let {name} = useParams();

  let summonerName = sumName;
  if(sumName === undefined){
    summonerName = name;
  }

  let badgeLevel = ["Good", "Great", "Excellent"];

  //get the searched name and highlight it by taking the route parameter and matching it to the name passed into this component.
  let nameMatch = name.toUpperCase() === summonerName.toUpperCase();
  let highlight = nameMatch ? "highlightSummoner" : "lobbyParticipant";

  return (
    <div className="card">
      <div className="namePlate">
        {activeGame ? 
          <Link to={`/${summonerName}`} className={`name ${highlight}`} style={{textDecoration: 'none'}}>
            {summonerName} 
          </Link>
          :
          summonerName
        }
      </div>
      <div className="played-role">
        <div className="role-text">Most Played Role</div>
        {sumRole && <img title={playerRoles[sumRole]} src={require(`../assets/roleIcons/${sumRole}.png`)} alt="Summoner Role" className="roleIcon"/>}
      </div>
      {sumBadges && 
          <div className="grid-container">
            <div className="badges">
              {
                  Object.keys(sumBadges).map((badge) => {
                    return <div title={`${badgeDescriptions[badge]} ${badgeLevel[sumBadges[badge]]}`} className={`${badgeLevel[sumBadges[badge]]} badge`} key={`${badge}`}>
                                <img src={require(`../assets/badgeIcons/${badge}.png`)} alt=""/>
                            </div>
                  })
              }
            </div>
          </div>
      }
    </div>
  )
}

SummonerCard.defaultProps = {
  activeGame: false,
  sumName: undefined,
}

export default SummonerCard