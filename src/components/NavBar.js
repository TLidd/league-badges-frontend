import { Link } from "react-router-dom"
import "../Stylesheets/NavBar.css"
const NavBar = () => {
  return (
    <div className="NavContainer">
        <Link className="link" to='/'>Search</Link>
    </div>
  )
}

export default NavBar