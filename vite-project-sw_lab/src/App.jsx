import { useState, useEffect } from "react"
import "./App.css"
import axios from "axios"
import { BASE_URL } from "./globals"
import Header from "./components/Header"
import Main from "./components/Main"

const App = () => {
  // Declare the starship state variable. It's an empty array by default.
  const [ships, setShips] = useState([])
  const [loading, setLoading] = useState(true) // Add loading state

  // Use the useEffect hook to ship data when the component mounts
  useEffect(() => {
    // Define the async function getShips to fetch data
    const getShips = async () => {
      // Make a GET request to the API
      const response = await axios.get(`${BASE_URL}`)
      // Set the fetched data to the ships state variable
      setShips(response.data.results)
      setLoading(false) // Set loading to false after data is fetched
      console.log(response.data.results)
    }
    // Call the getMovies function
    getShips()
  }, []) // The empty array means the useEffect hook will run once when the component mounts and not on subsequent re-renders

  // Render the StarshipList component and pass down the ships state variable as a prop
  if (loading) {
    // If it's loading, render a loading message instead of the component
    return <div>Loading!...</div>
  }

  return (
    <div className="app">
      <div className="app-header">
        <header>
          <Header />
        </header>
      </div>

      <main>
        <Main ships={ships} />
      </main>
    </div>
  )
}

export default App
