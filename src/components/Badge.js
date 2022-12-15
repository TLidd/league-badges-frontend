import "../Stylesheets/Badge.css"

const Badge = ({badgeName, badgeImage, showBadgeText, level}) => {

    let badgeLevels = {
        0 : "Good1",
        1 : "Great1",
        2 : "Excellent1",
    }

  return (
    <div className={`badge-container ${badgeLevels[level]} ${level == -1 ? "badge-unearned" : ""}`}>
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
    level : -1,
    badgeImage: "visionScore",
}

export default Badge