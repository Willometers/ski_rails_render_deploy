import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SkiAreaDropdown from './components/SkiAreaDropdown';
import NavBar from './components/NavBar';
import SkiAreaMapShow from './components/SkiAreaMapShow';
import Login from './components/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import WeatherTestComponent from './components/WeatherTestComponent';

function App() {

  const [area, setArea] = useState()
  // area set as area.id 
  const [user, setUser] = useState([])
  // user found with /me route

  useEffect(() => { 
    fetch("/me")
    .then((res) => res.json())
    .then((res) => setUser(res))
    .then(console.log("App user", user))
    }, [])

  const handleArea = (props) => {
    setArea(props)
  }

  return (
    <Router>
      <WeatherTestComponent />
      <div className="App">
     <NavBar user={user}/>
      <br/>
      <Routes>

        <Route
          path="/" 
          index 
          element={<SkiAreaDropdown handleArea={handleArea}/>}
        />

        <Route
          path="/show" 
          index 
          element={<SkiAreaMapShow area={area}/>}
        />

        <Route
          path="/loginpage" 
          index 
          element={<Login/>}
        />  

      </Routes>
      </div>
    </Router>
  );
}

export default App;
