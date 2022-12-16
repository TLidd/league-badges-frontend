import "../Stylesheets/RankImage.css"

const RankImage = ({tier, rank}) => {
  return (
    <>
    {tier && 
        <div className="rank-container">
            <img src={require(`../assets/ranked-emblems/${tier}.png`)} alt={`${tier} ${rank}`} />
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