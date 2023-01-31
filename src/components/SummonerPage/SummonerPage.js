import { useNavigate, useParams } from "react-router-dom"
import {useQuery} from "@tanstack/react-query"
import "../../Stylesheets/SummonerPage/SummonerPage.css"
import ChampionChart from "./ChampionChart"
import NavIcon from "../GeneralComponents/NavIcon"
import BadgeBox from "./BadgeBox"
import RankImage from "../GeneralComponents/RankImage"
import RankedOverview from "./RankedOverview"

const fetchPlayerData = async (name, region) => {
    const res = await fetch(`${process.env.REACT_APP_ROUTE_PATH}/summonerData/${name}/${region}`);

    if(res.ok){
      return res.json();
    }else{
      return {status_code: 404}
    }
}

const SummonerPage = () => {
  const navigate = useNavigate();

  let {name, region} = useParams();

  const {data, isLoading} = useQuery(
      ['summonerBadgeData', name.toLowerCase()],
      () => fetchPlayerData(name, region),
  );

  if(isLoading){
    return <img className="loading-gif" src={require("../../assets/loading2.gif")} alt="loading..." />
  }

  //if summoner does not exist
  if(data?.status_code === 404){
    return <div className="no-summoner">
              <div>
                {`${name} does not exist.`}
              </div>
              <button className="button" onClick={() => navigate(`/`)}>New Search</button>
            </div>
  }

  return (
    <div>
      {/* <NavIcon/> */}

      <div className="player-name">
        {data?.SummonerName}
      </div>

      <div className="player-rank-piece">
        <RankImage tier={data?.tier} rank={data?.rank}/>
      </div>

      <div className="player-container">
        <div className="player-section">
          <BadgeBox badges={data?.badges}/>
        </div>
        {/* <div className="player-section">
          <ChampionChart data={data}/>
        </div>
        <div className="player-section">
          <RankedOverview wins={data?.matchHistory.wins} losses={data?.matchHistory.losses} matchHistory={data?.matchHistory.games}/>
        </div> */}
      </div>
    </div>
  )
}

export default SummonerPage
