import { useNavigate, useParams } from "react-router-dom"
import {useQuery} from "@tanstack/react-query"
import "../../Stylesheets/SummonerPage/SummonerPage.css"
import ChampionChart from "./ChampionChart"
import NavIcon from "../GeneralComponents/NavIcon"
import BadgeBox from "./BadgeBox"
import RankImage from "../GeneralComponents/RankImage"
import RankedOverview from "./RankedOverview"

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
    return <img className="loading-gif" src={require("../../assets/loading2.gif")} alt="loading..." />
  }

  return (
    <div style={{height: "100%"}}>
      <NavIcon/>
      {
        data &&
        <div style={{height: "100%"}}>

          <div className="player-name">
            {data?.SummonerName}
          </div>

          <div className="player-rank-piece">
                <RankImage tier={data?.tier} rank={data?.rank}/>
          </div>

          <div className="player-container">

            <div className="player-piece">
              <BadgeBox badges={data?.badges}/>
            </div>

            <div className="player-piece" style={{"border" : "none"}}>
              <div>
                <button className="activeGameButton" onClick={() => navigate(`./ActiveGame`)}>Active Game</button>
              </div>
              {
                data && 
                <div style={{"marginTop" : "25%"}}>
                  <ChampionChart data={data}/>
                </div>
              }
            </div>
            {
              data &&
              <div className="player-piece">
                <RankedOverview wins={data?.matchHistory.wins} losses={data?.matchHistory.losses} matchHistory={data?.matchHistory.games}/>
              </div>
            }
          </div>
        </div>
      }
      
      { //if summoner does not exist send them to main page.
        !data && !isLoading &&
        <div className="no-summoner">
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
