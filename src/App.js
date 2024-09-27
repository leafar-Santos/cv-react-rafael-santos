import './App.css';

import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'

import React from 'react';
import Header from './components/Header/Header';
import ContactInfo from './components/ContactInfo/ContactInfo'
import ProfessionalSummary from './components/ProfessionalSummary/ProfessionalSummary';
import Experience from './components/Experience/Experience'
import Education from './components/Education/Education';
import Certifications from './components/Certifications/Certifications';
import Skills from './components/Skills/Skills';
import Languages from './components/Languages/Languages';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="container">
      <Header>
        <ContactInfo></ContactInfo>
      </Header>
      
      <ProfessionalSummary></ProfessionalSummary>
      <Experience></Experience>
      <Education></Education>
      <Certifications></Certifications>
      <Skills></Skills>
      <Languages></Languages>

      <Footer></Footer>
      
    </div>
  );
}

export default App;
