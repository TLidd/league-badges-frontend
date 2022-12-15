import "../Stylesheets/Badge.css"

const Badge = ({badgeName, showBadgeText, level, earned}) => {

    let badgeLevels = {
        1 : "Good1",
        2 : "Great1",
        3 : "Excellent1",
    }

  return (
    <div className={`badge-container ${badgeLevels[level]} ${!earned ? "badge-unearned" : ""}`}>
        <img src={require(`../assets/badgeIcons/${badgeName}.png`)}></img>
        {
            showBadgeText &&
            <div className="badge-name">Wards Placed</div>
        }
    </div>
  )
}

Badge.defaultProps = {
    badgeName : "visionScore",
    showBadgeText : true,
    level : 0,
    earned : false,
}

export default Badge