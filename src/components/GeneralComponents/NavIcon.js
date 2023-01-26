import { Link } from "react-router-dom"
import "../../Stylesheets/GeneralStyles/NavIcon.css"

const NavIcon = ({path, icon, description}) => {
  return (
    <Link data-tooltip={description} className="navicon-link" to={path}>{icon}</Link>
  )
}

NavIcon.defaultProps = {
  path: '/',
  icon: '🔎︎',
  description: 'Search'
}

export default NavIcon