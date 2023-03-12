import "../../Stylesheets/SummonerPage/RankedGame.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const RankedGame = ({win, kills, deaths, assists, champion, spell1, spell2, playerItems, gameStats, gameKey}) => {
  const navigate = useNavigate();

  let [moreGameInfo, setMoreGameInfo] = useState(false);

  const showMoreInfo = () => {
    if(moreGameInfo) setMoreGameInfo(false);
    else setMoreGameInfo(true);
  }

  const showGame = () => {
    navigate(`./gameView/${gameKey}`, {
      state: {
        "test": 0
      }
    });
  }

  if(champion === 'FiddleSticks') champion = 'Fiddlesticks';

  return (
    <div className='game-container' >
      <div className={`ranked-game ${win ? "won-game" : "lost-game"}`}>
        <div className="champ-sums-container">
          <div className="champ-img-wrapper">
            <img src={`http://ddragon.leagueoflegends.com/cdn/13.1.1/img/champion/${champion}.png`} alt=""/>
          </div>
          <div className="spells-wrapper">
            <div className="spell"><img src= {`http://ddragon.leagueoflegends.com/cdn/8.11.1/img/spell/Summoner${spell1}.png`} alt=""/></div>
            <div className="spell"><img src= {`http://ddragon.leagueoflegends.com/cdn/8.11.1/img/spell/Summoner${spell2}.png`} alt=""/></div>
          </div>
        </div>
        <span className="kda">{`${kills} / ${deaths} / ${assists}`}</span>
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
      <div className={`more-info-box ${win ? "won-game" : "lost-game"}`} 
      style={moreGameInfo ? {maxHeight: "500px", padding: "1em 0", borderColor: win ? "green" : "red"} : 
      {border: "0px solid", transition: "border 0s 1s linear, max-height 1s ease-in-out, padding 1s ease-in-out"}}>
        <button onClick={showGame}>More Game Info</button>
        {
          Object.keys(gameStats).map(key => 
          <div className="more-info-stat" key={`${key} + ${gameStats[key]}`}>
            {`${key}\u00A0: `}
            <span className="stat">{`\u00A0${gameStats[key]}`}</span>
          </div>)
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
  gameKey: 0,
}

export default RankedGame