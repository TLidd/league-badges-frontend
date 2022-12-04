import { useNavigate, useParams } from "react-router-dom"
import {useQuery} from "@tanstack/react-query"
import "../Stylesheets/SummonerPage.css"
import "../Stylesheets/Badge.css"
import { badgeDescriptions } from "./badgeDescriptions"
import ChampionChart from "./ChampionChart"
import NavBar from "./NavBar"

const fetchPlayerData = async (name) => {
    const res = await fetch(`/summonerData/${name}`);
    return res.json();
}

const SummonerPage = () => {
  const navigate = useNavigate();

  let {name} = useParams();

  const {data, isLoading} = useQuery(
      ['summonerBadgeData', name.toLowerCase()],
      () => fetchPlayerData(name),
  );

  let badgeLevel = ["Good", "Great", "Excellent"];

  if(isLoading){
    return <img className="loading-gif" src={require("../assets/loading2.gif")} alt="loading..." />
  }

  return (
    <div>
      <NavBar/>
      { 
        data &&
        <div>
          <div className="player-name">
            {data?.SummonerName}
          </div>
          {
            <div>
              {
                <div className="badgeBar">
                  {/* create a bar with all the badges the user has */}
                  {
                    Object.keys(data?.badges).length > 0  ?
                    Object.keys(data?.badges).map((badge) => {
                      return  <div title={`${badgeDescriptions[badge]} ${badgeLevel[data.badges[badge]]}`} className={`${badgeLevel[data.badges[badge]]} badgeBarBadge`} key={`${badge}`}>
                                <img src={require(`../assets/badgeIcons/${badge}.png`)} alt=""/>
                              </div>
                    })
                    :
                    <div className="emptyBadges"/>
                  }
                </div>
              }
            </div>
          }
          <div>
            <button className="activeGameButton" onClick={() => navigate(`./ActiveGame`)}>Active Game</button>
          </div>
          {
            data && <ChampionChart data={data}/>
          }
        </div>
      }
      {
        !data && 
        <div className="noSummoner">
          <div>
            {`${name} does not exist.`}
          </div>
          <button className="button" onClick={() => navigate(`/`)}>New Search</button>
        </div>
      }
    </div>
  )
}

export default SummonerPage
