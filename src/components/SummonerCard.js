import { useParams, Link } from "react-router-dom";
import "../Stylesheets/SummonerCard.css"
import { badgeDescriptions, playerRoles } from "./badgeDescriptions";
import Badge from "./Badge";

const SummonerCard = ({sumName, sumChamp, sumRole, sumBadges, activeGame}) => {
  let {name} = useParams();

  let summonerName = sumName;
  if(sumName === undefined){
    summonerName = name;
  }

  //get the searched name and highlight it by taking the route parameter and matching it to the name passed into this component.
  let nameMatch = name.toUpperCase() === summonerName.toUpperCase();
  let highlight = nameMatch ? "highlightSummoner" : "lobbyParticipant";

  return (
    <div className="card">
      <div className="namePlate">
        {activeGame ? 
          <Link to={`../account/${summonerName}`} className={`name ${highlight}`} style={{textDecoration: 'none'}}>
            {summonerName} 
          </Link>
          :
          summonerName
        }
        <img className="nameplate-img" src={require(`../assets/tiles/${sumChamp}_0.jpg`)} alt=""></img>
      </div>
      <div className="played-role">
        <div className="role-text">Most Played Role</div>
        {sumRole && <img title={playerRoles[sumRole]} src={require(`../assets/roleIcons/${sumRole}.png`)} alt="Summoner Role" className="roleIcon"/>}
      </div>
      {sumBadges && 
          <div className="grid-container">
            <div className="card-badges">
              {
                  Object.keys(sumBadges).map((badge, index) => {
                    if(index >= 9) return;
                    return <div className="badge-place" title={`${badgeDescriptions[badge]} ${sumBadges[badge]}`} key={badge}>
                            <Badge showBadgeText={false} badgeImage={badge} level={sumBadges[badge]} />
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