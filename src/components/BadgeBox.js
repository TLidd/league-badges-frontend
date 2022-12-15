import "../Stylesheets/BadgeBox.css"
import Badge from "./Badge"

import {badgeNames} from "../components/badgeDescriptions.js"

const BadgeBox = ({badges}) => {

    let badgeValues = [];

    Object.keys(badgeNames).map((key, index) => {
        if(key in badges){
            badgeValues[index] = [key, badges[key]];
        }else{
            badgeValues[index] = [key, -1];
        }
    })

    console.log(badgeValues);

    badgeValues.sort((a, b) => {
        if(a[1] > b[1]) return -1;
        else if(a[1] < b[1]) return 1;
        
        return 0;
    })
    
  return (
    <div className="badge-box-container">
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
  )
}

export default BadgeBox