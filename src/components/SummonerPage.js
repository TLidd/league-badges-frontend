import { useNavigate, useParams } from "react-router-dom"
import {useQuery} from "@tanstack/react-query"
import "../Stylesheets/SummonerPage.css"
import { badgeDescriptions } from "./badgeDescriptions"
import ChampionChart from "./ChampionChart"
import NavIcon from "./NavIcon"
import BadgeBox from "./BadgeBox"
import RankImage from "./RankImage"

const fetchPlayerData = async (name) => {
    const res = await fetch(`${process.env.REACT_APP_ROUTE_PATH}/summonerData/${name}`);
    return res.json();
}

const SummonerPage = () => {
  const navigate = useNavigate();

  let {name} = useParams();

  const {data, isLoading} = useQuery(
      ['summonerBadgeData', name.toLowerCase()],
      () => fetchPlayerData(name),
  );

  if(isLoading){
    return <img className="loading-gif" src={require("../assets/loading2.gif")} alt="loading..." />
  }

  return (
    <div style={{"height" : "100%"}}>
      <NavIcon/>
      { 
        // data &&
        // <div>
        <div className="player-name">
          {data?.SummonerName}
        </div>
        //   {
        //     <div>
        //       {
        //         <div className="badgeBar">
        //           {/* create a bar with all the badges the user has */}
        //           {
        //             Object.keys(data?.badges).length > 0  ?
        //             Object.keys(data?.badges).map((badge) => {
        //               return  <div title={`${badgeDescriptions[badge]} ${badgeLevel[data.badges[badge]]}`} className={`${badgeLevel[data.badges[badge]]} badgeBarBadge`} key={`${badge}`}>
        //                         <img src={require(`../assets/badgeIcons/${badge}.png`)} alt=""/>
        //                       </div>
        //             })
        //             :
        //             <div className="emptyBadges"/>
        //           }
        //         </div>
        //       }
        //     </div>
        //   }
        //   <div>
        //     <button className="activeGameButton" onClick={() => navigate(`./ActiveGame`)}>Active Game</button>
        //   </div>
        //   {
        //     data && <ChampionChart data={data}/>
        //   }
        // </div>
      }
      {
        // !data && 
        // <div className="noSummoner">
        //   <div>
        //     {`${name} does not exist.`}
        //   </div>
        //   <button className="button" onClick={() => navigate(`/`)}>New Search</button>
        // </div>
      }
      <div className="player-rank-piece">
            <RankImage tier={data?.tier} rank={data?.rank}/>
      </div>
      <div className="player-container">
        <div className="player-piece">
          <BadgeBox badges={data?.badges}/>
        </div>
        <div className="player-piece" style={{"border" : "none"}}>
          {
            data && 
            <div style={{"margin-top" : "25%"}}>
              <ChampionChart data={data}/>
            </div>
          }
        </div>
        <div className="player-piece">
        </div>
      </div>
    </div>
  )
}

export default SummonerPage
