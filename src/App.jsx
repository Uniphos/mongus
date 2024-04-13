import HomePage from './pages/homePage'
import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import CreateMongus from './pages/createMongus' // Changed to capital 'C'
import ViewMongus from './pages/viewMongus' // Changed to capital 'V' 

function App() {
  return (
    <div className="App">
      <div className="contant">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/crewmate-creator" element={<CreateMongus />} />  // Changed 'route' to 'Route' and 'createMongus' to 'CreateMongus'   
          <Route path="/crewmates" element = {<ViewMongus />} /> // Changed 'route' to 'Route' and 'viewMongus' to 'ViewMongus'   
        </Routes>
      </div>
    </div>
  )
}

export default App