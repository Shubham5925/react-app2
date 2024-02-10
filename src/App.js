import './App.css';
import Home from './components/Home';
import About from './components/About';

import {BrowserRouter as Router, Routes, Route,Link} from 'react-router-dom'; 

function App() {
  
  return (
    <>
    <h1>MY WEBPAGE</h1>
    
    <div className="div_1">
        <Router>
          <Link to=" "> HOME</Link>
          <Link to="/about">ABOUT</Link>
          
          <Routes>
            <Route path='' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            
          </Routes>
        </Router>
    </div>
    </>
  );
}

export default App;
