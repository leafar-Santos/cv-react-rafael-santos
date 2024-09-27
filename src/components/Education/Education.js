import React from 'react';
import "./Education.css"; 

import Unip from '../../assets/Unip.jpg'; 


function Education() {

  const educations = [
    {
      institution: "Universidade Paulista",
      degree: "Pós-graduação em Engenharia de Software",
      period: "Maio de 2022 - Junho de 2023",
      icon: Unip 
    },
    {
      institution: "Universidade Paulista",
      degree: "Bacharelado em Ciência da Computação",
      period: "Fevereiro de 2011 - Janeiro de 2015",
      icon: Unip 
    },
    
  ];

  return (
    <section className="education-section">
      <h3>Formação Acadêmica</h3>
      {educations.map((edu, index) => (
        <EducationItem key={index} {...edu} />
      ))}
    </section>
  );
}

function EducationItem({ institution, degree, period, icon }) {
  return (
    <div className="education-item">
      <div className="education-header">
        <img src={icon} alt="Ícone da Instituição" className="education-icon" />
        <h4>{institution}</h4>
      </div>
      <span>
        <p> {degree} | {period}</p>
      </span>
    </div>
  );
}

export default Education;
