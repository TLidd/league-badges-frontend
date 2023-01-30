import "../../Stylesheets/GeneralStyles/RankImage.css"

const RankImage = ({tier, rank}) => {
  return (
    <>
    {tier && 
        <div title={tier !== "CHALLENGER" && tier !== "MASTER" && tier !== "GRANDMASTER" && rank !== null ? `${tier} ${rank}` : `${tier}` } className="rank-container">
            <img src={require(`../../assets/ranked-emblems/${tier}.png`)} alt={`${tier} ${rank}`} />
        </div>
    }
    </>
  )
}

RankImage.defaultProps = {
    tier: null,
    rank: null,
}

export default RankImage