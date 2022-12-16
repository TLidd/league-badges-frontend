import "../Stylesheets/BadgeBox.css"
import Badge from "./Badge"

import {badgeNames} from "../components/badgeDescriptions.js"

const BadgeBox = ({badges}) => {

    let badgeValues = [];

    //insert the values for the badges in the badge box and order it by highest badges
    Object.keys(badgeNames).map((key, index) => {
        if(key in badges){
            badgeValues[index] = [key, badges[key]];
        }else{
            badgeValues[index] = [key, -1];
        }
    })

    badgeValues.sort((a, b) => {
        if(a[1] > b[1]) return -1;
        else if(a[1] < b[1]) return 1;
        
        return 0;
    })
    
  return (
    <div className="badge-box-container">
        <div className="badge-box-scroll-container">
            <div className="box-scroll">
                {
                    badgeValues.map(badge => {
                        return <div className="box-scroll-item" key={badgeNames[badge[0]]}>
                                <Badge badgeImage={badge[0]} badgeName={badgeNames[badge[0]]} showBadgeText={true} level={badge[1]}/>
                            </div>
                    })
                }
            </div>
        </div>
        {/* a legend for the box so users understand the values of the badges */}
        <div className="badge-box-legend">
            <div className="legend-item">
                <div className="level-square Excellent1" />
                <div className="level-name">Excellent</div>
            </div>
            <div className="legend-item">
                <div className="level-square Great1" />
                <div className="level-name">Great</div>
            </div>
            <div className="legend-item">
                <div className="level-square Good1" />
                <div className="level-name">Good</div>
            </div>
        </div>
    </div>
  )
}

export default BadgeBox