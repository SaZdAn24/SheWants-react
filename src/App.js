import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; 
import './App.css';

import Header from './components/Header/Header';
import MainHeader from './components/MainHeader/MainHeader';
import AboutUs from './components/aboutUs/AboutUs';
import Tabs from './components/ProcedureСard/Tabs';
import Contact from './components/Contact/Contact';
import ProcedureDetails from './components/ProcedureСard/ProcedureDetails';
import Cennik from './components/Pages/PagesPraice/Cennik';
import Team from './components/Pages/Team/Team';
import Map from './components/Map/Map';
import Footer from './components/Footer/Footer';
import Kontakt from './components/Pages/Kontakt/Kontakt';
import Oferta from './components/Pages/Oferta/Oferta';
import Twarz from './components/Pages/Twarz/Twarz';

function App() {

  const { t, i18n } = useTranslation();
  
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
                <Map /> 
              </>
            }
          />
          <Route path="/procedure/:id" element={<ProcedureDetails />} />
          <Route path="/cennik" element={<Cennik />} />
          <Route path="/team" element={<Team />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/oferta" element={<Oferta />} />
          <Route path="/twarz" element={<Twarz />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
