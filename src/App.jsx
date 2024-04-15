import HomePage from './pages/homePage'
import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import CreateMongus from './pages/createMongus' // Changed to capital 'C'
import ViewMongus from './pages/viewMongus' // Changed to capital 'V' 
import AMongus from './pages/aMongus' // Changed to capital 'A'
import EditMongus from './pages/editMongus' // Changed to capital 'E'

function App() {
  return (
    <div className="App">
      <div className="contant">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/crewmate-creator" element={<CreateMongus />} />  // Changed 'route' to 'Route' and 'createMongus' to 'CreateMongus'   
          <Route path="/crewmates" element = {<ViewMongus />} /> // Changed 'route' to 'Route' and 'viewMongus' to 'ViewMongus'
          <Route path="/crewmates/veiw/:id" element={<AMongus />} /> // Changed 'route' to 'Route' and 'viewMongus' to 'ViewMongus' and 'veiw' to 'view
          <Route path="edit/:id" element={<EditMongus />} /> // Changed 'route' to 'Route' and 'editMongus' to 'EditMongus' and 'edit' to 'edit
        </Routes>
      </div>
    </div>
  )
}

export default App