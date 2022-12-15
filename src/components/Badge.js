import "../Stylesheets/Badge.css"

const Badge = ({badgeName, badgeImage, showBadgeText, level}) => {

    let badgeLevels = {
        1 : "Good1",
        2 : "Great1",
        3 : "Excellent1",
    }

  return (
    <div className={`badge-container ${badgeLevels[level]} ${level == 0 ? "badge-unearned" : ""}`}>
        {console.log(badgeImage)}
        <img className="img-container" src={require(`../assets/badgeIcons/${badgeImage}.png`)}></img>
        {
            showBadgeText &&
            <div className="badge-name">{badgeName}</div>
        }
    </div>
  )
}

Badge.defaultProps = {
    badgeName : "Vision Score",
    showBadgeText : true,
    level : 0,
    badgeImage: "visionScore",
}

export default Badge