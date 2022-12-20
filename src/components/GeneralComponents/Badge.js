import "../../Stylesheets/GeneralStyles/Badge.css"

//badgeImage is passed as the text name of the image not an actual html image
const Badge = ({badgeName, badgeImage, showBadgeText, level}) => {

    let badgeLevels = {
        0 : "Good",
        1 : "Great",
        2 : "Excellent",
    }

  return (
    <div className={`badge-container ${badgeLevels[level]} ${level == -1 ? "badge-unearned" : ""}`}>
        <img style={!showBadgeText ? {width: '95%'} : {}} className="img-container" src={require(`../../assets/badgeIcons/${badgeImage}.png`)}></img>
        {
            showBadgeText &&
            <div className="badge-name">{badgeName}</div>
        }
    </div>
  )
}

Badge.defaultProps = {
    badgeName : null,
    showBadgeText : true,
    level : -1,
    badgeImage: null,
}

export default Badge