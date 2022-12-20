import "../Stylesheets/RankedGame.css"

const RankedGame = ({win, kills, deaths, assists, champion}) => {
  return (
    <div className={`ranked-game ${win ? "won-game" : "lost-game"}`}>
      <img src={require(`../assets/tiles/${champion}_0.jpg`)} alt="" />
      <div className="kda">{`${kills}/${deaths}/${assists}`}</div>
    </div>
  )
}

RankedGame.defaultProps = {
  win: false,
  kills: 0,
  deaths: 0,
  assists: 0,
  champion: "Aatrox"
}

export default RankedGame