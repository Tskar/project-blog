import './App.css';

import Login from './Components/Login/Login'
import Register from './Components/Register/Register'
import Canvas from './Components/Canvas/Canvas'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';

function App() {

  const user = false

  return (
    <div className="App">
      <Router>
        <Routes>
            <Route path="/" element={user ? <Canvas /> :<Login />} />
            <Route path="/login" element={user ? <Canvas /> :<Login />} /> 
            <Route path="/register" element={user ? <Canvas /> :<Register />} /> 
            <Route path="/canvas" element={user ? <Canvas /> :<Login />} />
        </Routes>
      </Router>
    </div>

  );
}

export default App;
