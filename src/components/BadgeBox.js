import "../Stylesheets/BadgeBox.css"
import Badge from "./Badge"

import {badgeNames} from "../components/badgeDescriptions.js"

const BadgeBox = () => {
  return (
    <div className="badge-box-container">
        <div className="box-scroll">
            {
                Object.keys(badgeNames).map(imageName => {
                    return <div className="box-scroll-item" key={badgeNames[imageName]}>
                            <Badge badgeImage={imageName} badgeName={badgeNames[imageName]} showBadgeText={true} level={1}/>
                        </div>
                })
            }
        </div>
    </div>
  )
}

export default BadgeBox