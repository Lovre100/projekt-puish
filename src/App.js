import './App.css';
import Ogradu from './Components/Ogradu';
import Povijest from './Components/Povijest';
import Turizam from './Components/Turizam';

import {Route, Routes, BrowserRouter as Router} from 'react-router-dom';
import Header from './Header';

function App() {
  return (
    <div className="App">
      


      <Router>
        <Routes>
          <Route path="/" element={<Header/>}></Route>
          <Route path="/ogradu" element={<Ogradu/>}></Route>
          <Route path="/povijest" element={<Povijest/>}></Route>
          <Route path="/turizam" element={<Turizam/>}></Route>
        </Routes>
      </Router>


      </div>

  )
};

export default App;
