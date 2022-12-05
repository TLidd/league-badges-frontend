import { Link } from "react-router-dom"
import "../Stylesheets/NavIcon.css"
const NavIcon = ({path, icon, description}) => {
  return (
    <div className="icon">
      <Link className="link" to={path}>{icon}</Link>
      <div className="icon-return">{description}</div>
    </div>
  )
}

NavIcon.defaultProps = {
  path: '/',
  icon: '🔎︎',
  description: 'Search'
}

export default NavIcon