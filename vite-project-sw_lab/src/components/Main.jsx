import { Route, Routes } from "react-router-dom"
import Home from "./Home"
import StarshipList from "./Starshiplist"
import PropTypes from "prop-types"

const Main = (props) => {
  const { ships } = props
  return (
    <div className="routes-container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Starship" element={<StarshipList ships={ships} />} />
      </Routes>
    </div>
  )
}

Main.propTypes = {
  ships: PropTypes.array.isRequired,
}

export default Main
