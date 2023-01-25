import "../../Stylesheets/SummonerPage/RankedGame.css"
import { useState } from "react";

const RankedGame = ({win, kills, deaths, assists, champion, spell1, spell2, playerItems, gameStats}) => {
  let [moreGameInfo, setMoreGameInfo] = useState(false);

  const showMoreInfo = () => {
    if(moreGameInfo) setMoreGameInfo(false);
    else setMoreGameInfo(true);
  }

  return (
    <div className={`game-container ${win ? "won-game" : "lost-game"}`} style={moreGameInfo ? {"--ranked-game-display-height": "50%"} : {}} >
      <div className="ranked-game">
        <div className="champ-sums-container">
          <div className="champ-img-wrapper">
            <img src={`http://ddragon.leagueoflegends.com/cdn/13.1.1/img/champion/${champion}.png`} alt=""/>
          </div>
          <div className="spells-wrapper">
            <img src= {`http://ddragon.leagueoflegends.com/cdn/8.11.1/img/spell/Summoner${spell1}.png`} alt=""/>
            <img src= {`http://ddragon.leagueoflegends.com/cdn/8.11.1/img/spell/Summoner${spell2}.png`} alt=""/>
          </div>
        </div>
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
        <button onClick={showMoreInfo} className="ranked-game-button" style={moreGameInfo ? {transform: "rotate(-3.142rad)"} : {}}>
          ˅
        </button>
      </div>
      <div className={`more-info-box ${win ? "won-game" : "lost-game"}`}>
        {
          Object.keys(gameStats).map(key => <div className="more-info-stat">{`${key}\u00A0 : \u00A0${gameStats[key]}`}</div>)
        }
      </div>
    </div>
    
  )
}

RankedGame.defaultProps = {
  win: false,
  kills: 0,
  deaths: 0,
  assists: 0,
  champion: "Aatrox",
  playerItems: new Array(7).fill(1),
  gameStats: {"test": 7, "test1": 8, "test2": 7, "test3": 7, "test4": 7, "test5": 7, "test6": 6},
  spell1: "Flash",
  spell2: "Smite",
}

export default RankedGame