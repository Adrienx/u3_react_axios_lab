import { Link } from "react-router-dom"

const Nav = () => {
  return (
    <div className="nav-links">
      <Link to="/"> Home </Link>
      <Link to="/Starship"> Starship </Link>
    </div>
  )
}

export default Nav
