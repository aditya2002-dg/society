import './App.css';
import Header from './components/Header';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Career from './pages/Career';
import Maintenance from './pages/Maintenace';
import Residential from './pages/Residential';
import Commercial from './pages/Commercial';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />}></Route>
            <Route path='/career' element={<Career/>}></Route>
            <Route path='/check-maintenance' element={<Maintenance/>}></Route>
            <Route path='/residential' element={<Residential/>}></Route>
            <Route path='/commercial' element={<Commercial/>}></Route>
            <Route path='/contact' element={<Contact />}></Route>
            <Route path='/*' element={<Navigate to='/' />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
