import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Header from './components/Header/Header';
import MainHeader from './components/MainHeader/MainHeader';
import AboutUs from './components/aboutUs/AboutUs';
import Tabs from './components/ProcedureСard/Tabs';
import Contact from './components/Contact/Contact';
import ProcedureDetails from './components/ProcedureСard/ProcedureDetails'; 

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <MainHeader />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <AboutUs />
                <Tabs />
              </>
            }
          />
          <Route path="/procedure/:id" element={<ProcedureDetails />} />
        </Routes>
      </div>
      <Contact/>.
    </Router>
  );
}

export default App;
