import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"

import { BrowserRouter } from "react-router-dom" //import the React Router Dom package, which we will call BrowserRouter

ReactDOM.createRoot(document.getElementById("root")).render(
  //then we will wrap up our App component inside of it.
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
