import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './pages/Hero';
import Speakers from './pages/Speakers';
import Uperheader from './components/Uperheader';
import Navbar from './components/Navbar';
import Committee from './pages/Committee';
import Sponsorship from './pages/Sponsorship';
import Awards from './pages/Awards';
import Contact from './pages/Contact';
import Registration from './pages/Registration'
import Foot from './components/Foot'
import './styles/App.css'

let conId = '647f315f62cdb3a26174fc38';

function App() {
  return (
    <div className="maindiv">
      
      <Router>
      <Uperheader />
      <Navbar />

        <Routes>
          <Route path="/" element={<Hero con={conId} />} />
          <Route path="/speakers" element={<Speakers con={conId} />} />
          <Route path="/committee" element={<Committee con={conId} />} />
          <Route path="/sponsorship" element={<Sponsorship con={conId} />} />
          <Route path="/awards" element={<Awards con={conId} />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/contact" element={<Contact con={conId} />} />
        </Routes>

<Foot con={conId} />
      </Router>
      
    </div>
  );
}

export default App;
