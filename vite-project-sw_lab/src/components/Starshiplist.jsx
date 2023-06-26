import PropTypes from "prop-types"

// Define the StarshipList functional component
const StarshipList = (props) => {
  const { ships } = props
  console.log(ships)
  // Render a list of ship cards. Each card contains a ship name, film, starship_class

  // Ensure "ships" prop is defined and is an array before calling map on it. Did this by providing a default empty array [] when props.ships is undefined using the OR || operator:
  return (
    <div className="shiplist">
      {(ships || []).map((ship) => (
        <div key={ship.name} className="shipCard">
          <h3>Ship Name: {ship.name}</h3>
          <h3>Ship Class: {ship.starship_class}</h3>
        </div>
      ))}
    </div>
  )
}

StarshipList.propTypes = {
  ships: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      starship_class: PropTypes.string.isRequired,
    })
  ).isRequired,
}

export default StarshipList
