import PropTypes from "prop-types"
import { useEffect, useState } from "react"
import axios from "axios"

const Characters = (props) => {
  const { characters } = props

  // New state for storing characters along with their homeworld names
  const [charactersWithHomeworlds, setCharactersWithHomeworlds] = useState([])

  // Use effect hook that runs when the characters prop changes.

  // useEffect hook which calls an async function that fetches the homeworld data for each character. This data is then used to replace the homeworld URL in each character object with the name of the homeworld. Once all the data has been fetched, the new characters data is stored in the state which causes the component to re-render with the updated data.
  useEffect(() => {
    const fetchHomeworlds = async () => {
      // For each character, we fetch the homeworld data.
      // This gives us an array of promises that we will resolve later.
      const promises = characters.map(async (character) => {
        // Fetch the homeworld data for this character
        const response = await axios.get(character.homeworld)

        // Return a new object that contains all the original character data,
        // but replace the homeworld with the fetched homeworld name
        return {
          ...character,
          homeworld: response.data.name,
        }
      })

      // Resolve all promises.
      // Promise.all will wait until all promises are resolved and then return an array with the results.
      // The order of the results in the array will be the same as the order of the promises.
      const newCharacters = await Promise.all(promises)

      // Set the new characters data to our state.
      // This will cause the component to re-render with the new data.
      setCharactersWithHomeworlds(newCharacters)
    }

    // Call our async function
    fetchHomeworlds()

    // Dependence array for useEffect, it will rerun the effect when the characters prop changes
  }, [characters])

  console.log(charactersWithHomeworlds)

  // Render the characters. Now the homeworld is the name, not the URL.
  return (
    <div className="pplList">
      {charactersWithHomeworlds.map((person) => (
        <div key={person.created} className="pplCard">
          <h3>Name: {person.name}</h3>
          <h3>Homeworld: {person.homeworld}</h3>
        </div>
      ))}
    </div>
  )
}

Characters.propTypes = {
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      homeworld: PropTypes.string.isRequired,
    })
  ).isRequired,
}

export default Characters
