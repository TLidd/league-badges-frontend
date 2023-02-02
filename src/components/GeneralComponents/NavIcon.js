import { Link } from "react-router-dom"
import "../../Stylesheets/GeneralStyles/NavIcon.css"

const NavIcon = ({path, icon, description}) => {
  return (
    <div className="navigation">
      <Link data-tooltip={description} className="navicon-link" to={path}>{icon}</Link>
      <Link className="navicon-link-mobile" to={path}>{description}</Link>
    </div>
  )
}

NavIcon.defaultProps = {
  path: '/',
  icon: '🔎︎',
  description: 'Search'
}

export default NavIcon