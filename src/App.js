import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";


import Navbar from './Components/Nav/Navbar';
import Home from './Components/Pages/Home/Home';
import Create from './Components/Pages/Create/Create';
import Setting from './Components/Pages/Setting/Setting';
import Login from './Components/Pages/Login/Login';
import Register from './Components/Pages/Register/Register';


function App() {
  return (

      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/setting" element={<Setting />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;
