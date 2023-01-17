import './App.css';
import SkiAreaDropdown from './components/SkiAreaDropdown';
import SkiAreaShow from './components/SkiAreaShow';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'


function App() {

  const [area, setArea] = useState([])

  const handleArea = (props) => {
    setArea(props)
    console.log("h", props)
  }

  return (
    <Router>
      <div className="App">
        <h1>New York Ski Areas:</h1>
      <Routes>

        <Route
          path="/" 
          index 
          element={<SkiAreaDropdown handleArea={handleArea}/>}
        />

        <Route
          path="/show" 
          index 
          element={<SkiAreaShow area={area}/>}
        />

      </Routes>
      </div>
    </Router>
  );
}

export default App;
