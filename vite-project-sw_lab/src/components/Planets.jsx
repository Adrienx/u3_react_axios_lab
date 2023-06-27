import PropTypes from "prop-types"

const Planets = (props) => {
  const { planets } = props
  // console.log(planets)

  return (
    <div className="planetList">
      {(planets || []).map((planet) => (
        <div key={planet.name} className="planetCard">
          <h3>Planet Name: {planet.name}</h3>
          <h3>Planet Population: {planet.population}</h3>
        </div>
      ))}
    </div>
  )
}

Planets.propTypes = {
  planets: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      population: PropTypes.string.isRequired,
    })
  ).isRequired,
}

export default Planets
