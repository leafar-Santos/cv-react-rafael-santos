import React, { useState } from 'react';
import "./Certifications.css";

import Udemy from '../../assets/Udemy.png'; 
import TreinaWeb from '../../assets/TreinaWeb.jpg'; 
import Impacta from '../../assets/Impacta.jpg'; 
import Allura from '../../assets/Allura.jpg'; 

function Certifications() {
  const [isExpanded, setIsExpanded] = useState(false);

  const certifications = [
    {
      title: "Teste de Software Avançado",
      icon: TreinaWeb,
      link: "https://www.treinaweb.com.br/certificado/0SEEXFMANSHO"
    },
    {
      title: "Teste de Software Intermediário",
      icon: TreinaWeb,
      link: "https://www.treinaweb.com.br/certificado/OO4AZB5Y1UIM"
    },
    {
      title: "Teste de Softwre Básico",
      icon: TreinaWeb,
      link: "https://www.treinaweb.com.br/certificado/I0QQ4BID88F6"
    },
    {
      title: "Fomação Tester Júnior ",
      icon: TreinaWeb,
      link: "https://www.treinaweb.com.br/certificado/YMUIDPO2RGKH"
    },

    {
      title: "Oracle - Introdução SQL",
      icon: Impacta,
      link: "https://www.impacta.com.br/certificado/ak1MQVpxNzlPZjVyeloyOTRBLzlhQT09H"
    },
    {
      title: "BDD com Cucumber em JAVA",
      icon: Udemy,
      link: "https://www.udemy.com/certificate/UC-ae9dce33-268f-4878-8308-61781c6d797f/"
    },
    
    {
      title: "KPIs de qualidade de software",
      icon: Udemy,
      link: "https://www.udemy.com/certificate/UC-1ecc4afc-6a4c-4a5c-9621-a5adb3a64c3b/"
    },
    {
      title: "Junit Jupter em Testes de Software",
      icon: Udemy,
      link: "https://www.udemy.com/certificate/UC-62bb4f7f-be6f-429e-a16a-831ed7228c73/"
    },
    {
      title: " OKR na Prática | O Guia Completo ",
      icon: Udemy,
      link: "https://www.udemy.com/certificate/UC-3609bf0a-3459-4fb0-a7ef-4e14721301b1/"
    },
    {
      title: "Scrum: agilidade em seu projeto",
      icon: Udemy,
      link: "https://cursos.alura.com.br/certificate/b3853fbd-eeba-46d5-8770-9cd5d679f57c"
    },
    {
      title: "Agilidade: promovendo a transformação ágil",
      icon: Allura,
      link: "https://cursos.alura.com.br/certificate/0beb271e-d5b8-449f-9437-b9eb446f7b06"
    },
    {
      title: "Quality Assurance: plano de testes e gestão de bugs",
      icon: Allura,
      link: "https://cursos.alura.com.br/certificate/3317619f-acfe-45cf-81ea-4db63d71d0f7"
    },
    {
      title: "Fundamentos Quality Assurance: TestPlan e boas práticas",
      icon: Allura,
      link: "https://cursos.alura.com.br/certificate/114afd4e-bb2b-4813-8dae-c329fc1aa9c1"
    },
    {
      title: "Integração contínua com testes, utilizando Jenkins",
      icon: Udemy,
      link: "https://www.udemy.com/certificate/UC-3cb67de8-4a0a-481f-901d-81002404db56/"
    },
    {
      title: "Testando API Rest com REST-assured",
      icon: Udemy,
      link: "https://www.udemy.com/certificate/UC-ecddb687-e77c-406b-bc27-9073796c4f14/"
    },
    {
      title: "Testes funcionais com Selenium WebDriver: Do básico ao GRID",
      icon:Udemy ,
      link: "https://www.udemy.com/certificate/UC-f10e4209-eec9-4286-9735-518735df17a8/"
    },
    {
      title: "Spring Boot 2.x - Minha Primeira API",
      icon: Udemy,
      link: "https://www.udemy.com/certificate/UC-7f047edf-6243-4786-9b20-82be2f223b3c/"
    },
    {
      title: "Requisitos de Software",
      icon: Udemy,
      link: "https://www.udemy.com/certificate/UC-7f047edf-6243-4786-9b20-82be2f223b3c/"
    },
    {
      title: "JMeter - Testes de performance",
      icon: Udemy,
      link: "https://www.udemy.com/certificate/UC-b4a2d88c-958b-47ef-b171-3af148b71c2c/"
    },
    {
      title: "Java OO: entendendo a Orientação a Objetos",
      icon: Allura,
      link: "https://cursos.alura.com.br/certificate/f79e898a-d612-40ac-9c4e-a007228e0fa2"
    },
    {
      title: "Gerenciamento de qualidade de software parte 1: o documento MDS",
      icon: Allura,
      link: "https://cursos.alura.com.br/certificate/871edc9b-431c-4415-a218-e1d7a32a7282"
    },

    
  ];

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section className="certification-card-container">
      <h3>Certificações</h3>
      <ul>
        {certifications.slice(0, isExpanded ? certifications.length : 5).map((cert, index) => (
          <CertificationItem key={index} {...cert} />
        ))}
      </ul>
      {certifications.length > 2 && (
        <button onClick={toggleExpand} className="toggle-button">
          {isExpanded ? "Ver Menos" : "Ver Mais"}
        </button>
      )}
    </section>
  );
}

function CertificationItem({ title, icon, link }) {
  return (
    <li className="certification-item">
      <div className="certification-card">
        <img src={icon} alt={`${title} Ícone`} className="certification-icon" />
        <span>{title}</span>
        <a href={link} target="_blank" rel="noopener noreferrer" className="certification-button">
          Ver Certificado
        </a>
      </div>
    </li>
  );
}

export default Certifications;
