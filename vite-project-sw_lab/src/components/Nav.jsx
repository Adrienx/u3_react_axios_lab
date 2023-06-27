import { Link } from "react-router-dom"

const Nav = () => {
  return (
    <div className="nav-links">
      <Link to="/" className="nav-item">
        {" "}
        Home
      </Link>
      <Link to="/starships" className="nav-item">
        {" "}
        Starship
      </Link>
      <Link to="/films" className="nav-item">
        {" "}
        Films
      </Link>
      <Link to="/planets" className="nav-item">
        {" "}
        Planets
      </Link>
      <Link to="/characters" className="nav-item">
        {" "}
        Characters
      </Link>
    </div>
  )
}

export default Nav
