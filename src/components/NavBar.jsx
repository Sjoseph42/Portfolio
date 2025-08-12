import { NavLink } from "react-router-dom"
import "./NavBar.css"

function NavBar() {
  return (
    <nav className="NavBar">
      <NavLink to="/" end className="nav-button">
        Bio
      </NavLink>
      <NavLink to="/Projects" className="nav-button">
        Projects
      </NavLink>
      <NavLink to="/Skills" className="nav-button">
        Skills
      </NavLink>
      <NavLink to="/Contact" className="nav-button">
        Contact
      </NavLink>
    </nav>
  )
}

export default NavBar
