import './canvas.css';

import Navbar from '../Navbar/Navbar'
import Home from '../Pages/Home/Home';
import Profile from '../Pages/Profile/Profile';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function Canvas() {
  return (
    <div className='canvas'>
      <Navbar />
      <Home />
    </div>

  );
}

export default Canvas;



