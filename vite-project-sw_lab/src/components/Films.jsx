import PropTypes from "prop-types"

// Define the StarfilmList functional component
const Films = (props) => {
  const { films } = props
  // console.log(films)
  // Render a list of film cards. Each card contains a film name, film, starfilm_class

  // Ensure "films" prop is defined and is an array before calling map on it. Did this by providing a default empty array [] when props.films is undefined using the OR || operator:
  return (
    <div className="filmlist">
      {(films || []).map((film) => (
        <div key={film.title} className="filmCard">
          <h3>Title: {film.title}</h3>
          <h3>Episode: {film.episode_id}</h3>
        </div>
      ))}
    </div>
  )
}

Films.propTypes = {
  films: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      episode_id: PropTypes.number.isRequired,
    })
  ).isRequired,
}

export default Films
