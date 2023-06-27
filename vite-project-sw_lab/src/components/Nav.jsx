import { Link } from "react-router-dom"

const Nav = () => {
  return (
    <div className="nav-links">
      <Link to="/"> Home </Link>
      <Link to="/starships"> Starship </Link>
      <Link to="/films"> Films </Link>
      <Link to="/planets"> Planets </Link>
      <Link to="/characters"> Characters </Link>
    </div>
  )
}

export default Nav
