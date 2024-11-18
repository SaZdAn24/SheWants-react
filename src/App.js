import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Header from './components/Header/Header';
import MainHeader from './components/MainHeader/MainHeader';
import AboutUs from './components/aboutUs/AboutUs';
import Tabs from './components/ProcedureСard/Tabs';
import Contact from './components/Contact/Contact';
import ProcedureDetails from './components/ProcedureСard/ProcedureDetails';
import Cennik from './components/Pages/PagesPraice/Cennik';

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
                <Contact />
              </>
            }
          />
          <Route path="/procedure/:id" element={<ProcedureDetails />} />
          <Route path="/cennik" element={<Cennik />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
