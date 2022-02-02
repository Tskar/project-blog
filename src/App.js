import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";


import Navbar from './Components/Nav/Navbar';
import Home from './Components/Pages/Home/Home';
import Create from './Components/Pages/Create/Create';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
