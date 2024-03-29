import { useState } from "react";
import "../../Stylesheets/GeneralStyles/Badge.css"
import { badgeDescriptions } from "../badgeDescriptions";

//badgeImage is passed as the text name of the image not an actual html image
const Badge = ({badgeName, badgeImage, showBadgeText, level}) => {

    let [hoverText, setHoverText] = useState(false);

    let badgeLevels = {
        0 : "Good",
        1 : "Great",
        2 : "Excellent",
    }

    const displayBadgeDescription = () => {
        setHoverText(true);
    }

    const removeBadgeDescription = () => {
        setHoverText(false);
    }

  return (
    <div onMouseOver={displayBadgeDescription} onMouseOut={removeBadgeDescription} className={`badge-container ${badgeLevels[level]} ${level === -1 ? "badge-unearned" : ""}`}>
        <img style={!showBadgeText ? {width: '95%'} : {}} className="img-container" src={require(`../../assets/badgeIcons/${badgeImage}.png`)} alt=""></img>
        {
            showBadgeText &&
            <div className="badge-name">{badgeName}</div>
        }
        {   //hides the hoverText until hover and won't display if the badge text is set to show
            !showBadgeText &&
            <div className={`hoverText ${hoverText ? "reveal" : "hide"}`}> {`${badgeDescriptions[badgeImage]}`} <div className={`${badgeLevels[level]}Text`}> {`${badgeLevels[level]}`} </div> </div>
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