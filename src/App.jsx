import HomePage from './pages/homePage'
import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import CreateMongus from './pages/createMongus' // Changed to capital 'C'

function App() {
  return (
    <div className="App">
      <div className="contant">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/crewmate-creator" element={<CreateMongus />} />  // Changed 'route' to 'Route' and 'createMongus' to 'CreateMongus'      
        </Routes>
      </div>
    </div>
  )
}

export default App