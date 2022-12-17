import "../Stylesheets/RankImage.css"

const RankImage = ({tier, rank}) => {
  return (
    <>
    {tier && 
        <div title={tier != "CHALLENGER" && tier != "MASTER" && tier != "GRANDMASTER" ? `${tier} ${rank}` : `${tier}` } className="rank-container">
            <img src={require(`../assets/ranked-emblems/${tier}.png`)} alt={`${tier} ${rank}`} />
            {/* {
            tier != "CHALLENGER" && tier != "MASTER" && tier != "GRANDMASTER" && 
            <div className="rank-number">
                {rank}
            </div>
            } */}
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