import { Route, Routes } from "react-router-dom"
import Home from "./Home"
import StarshipList from "./Starshiplist"
import Films from "./Films"
import Characters from "./Characters"
import Planets from "./Planets"
import PropTypes from "prop-types"

const Main = ({ ships, ppl, films, planets }) => {
  return (
    <div className="routes-container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/starships" element={<StarshipList ships={ships} />} />
        <Route path="/films" element={<Films films={films} />} />
        <Route path="/planets" element={<Planets planets={planets} />} />
        <Route path="/characters" element={<Characters ppl={ppl} />} />
      </Routes>
    </div>
  )
}

Main.propTypes = {
  ships: PropTypes.array.isRequired,
  films: PropTypes.array.isRequired,
  ppl: PropTypes.array.isRequired,
  planets: PropTypes.array.isRequired,
}

export default Main
