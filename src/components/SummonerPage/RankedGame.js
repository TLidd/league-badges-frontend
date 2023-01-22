import "../../Stylesheets/SummonerPage/RankedGame.css"
import { useState } from "react";

const RankedGame = ({win, kills, deaths, assists, champion, playerItems}) => {
  let [moreGameInfo, setMoreGameInfo] = useState(false);

  const showMoreInfo = () => {
    if(moreGameInfo) setMoreGameInfo(false);
    else setMoreGameInfo(true);
  }

  return (
    <div style={moreGameInfo ? {"--ranked-game-display": "250%"} : {}} className={`ranked-game ${win ? "won-game" : "lost-game"}`}>
      <img className="champ-img" src={`http://ddragon.leagueoflegends.com/cdn/13.1.1/img/champion/${champion}.png`} alt="" />
      <div className="kda">{`${kills}/${deaths}/${assists}`}</div>
      <div className="player-items">
      {
        playerItems.map((itemId, index) => {
            if(index === 6) return null;
            return  <div className="player-item" key={index}>
                      {itemId !== 0 && 
                        <img className="item-img" src={`http://ddragon.leagueoflegends.com/cdn/13.1.1/img/item/${itemId}.png`} alt=""/>
                      }
                    </div>
        })
      }
      </div>
      <button onClick={showMoreInfo} className="ranked-game-button">
        ˅
      </button>
    </div>
  )
}

RankedGame.defaultProps = {
  win: false,
  kills: 0,
  deaths: 0,
  assists: 0,
  champion: "Aatrox",
  playerItems: new Array(7).fill(1)
}

export default RankedGame