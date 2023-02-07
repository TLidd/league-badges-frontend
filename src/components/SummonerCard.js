import { useParams, Link } from "react-router-dom";
import "../Stylesheets/SummonerCard.css"
import { playerRoles } from "./badgeDescriptions";
import Badge from "./GeneralComponents/Badge";
import RankImage from "./GeneralComponents/RankImage";

const SummonerCard = ({sumName, sumChamp, sumRole, sumBadges, activeGame, sumTier, sumRank, team}) => {
  let {name, region} = useParams();

  let summonerName = sumName;
  if(sumName === undefined){
    summonerName = name;
  }

  //get the searched name and highlight it by taking the route parameter and matching it to the name passed into this component.
  let nameMatch = name.toUpperCase() === summonerName.toUpperCase();
  let highlight = nameMatch ? "highlight" : "";

  if(sumChamp === 'FiddleSticks') sumChamp = 'Fiddlesticks';
  if(sumChamp === 'Ksante') sumChamp = 'KSante';

  return (
    <div className={`card ${team}-team`}>
      <div className="namePlate">
        {activeGame ? 
          <Link to={`../account/${region}/${summonerName}`} className={`name ${highlight}`}>
            {summonerName} 
          </Link>
          :
          summonerName
        }
        <img className="namePlate-img" src={`http://ddragon.leagueoflegends.com/cdn/13.1.1/img/champion/${sumChamp}.png`} alt=""></img>
        <div className="card-rank">
          <RankImage tier={sumTier} rank={sumRank}/>
        </div>
      </div>
      <div className="played-role">
        <div className="role-text">Main Role</div>
        {sumRole && <img title={playerRoles[sumRole]} src={require(`../assets/roleIcons/${sumRole}.png`)} alt="Summoner Role" className="roleIcon"/>}
      </div>
      {Object.keys(sumBadges).length > 0 ?
          <div className="card-badge-container">
              {
                  Object.keys(sumBadges).map((badge, index) => {
                    if(index >= 9) return null;
                    return <div className="card-badge" key={badge}>
                            <Badge showBadgeText={false} badgeImage={badge} level={sumBadges[badge]} />
                          </div>  
                  })
              }
          </div>
          :
          //if there are no badges still fill grid container
          <div className="card-badge-container"><div className="card-badge"></div></div>
      }
    </div>
  )
}

SummonerCard.defaultProps = {
  activeGame: false,
  sumName: undefined,
}

export default SummonerCard