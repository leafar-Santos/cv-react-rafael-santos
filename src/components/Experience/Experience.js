import React, { useState } from 'react';
import "./Experience.css";
// Importando os ícones
import Intelipost from "../../assets/Intelipost.jpg" 
import Telematica from "../../assets/Telematica.jpg"
import Metaxix from "../../assets/Metaxix.jpg"
import PedePronto from "../../assets/PedePronto.jpg"

function Experience() {
  const [isExpanded, setIsExpanded] = useState(false);

  const experiences = [
    {
      company: "Pede Pronto",
      icon: PedePronto,
      role: "Engenheiro QA",
      period: "Agosto de 2021 - Presente",
      location: "São Paulo",
      responsibilities: [
        'Sou responsável pela elaboração dos planos de testes das features da equipe da qual faço parte, responsável pela criação e aplicação dos cenários de testes.',
        'Atuo com testes funcionais, teste de API, testes de usabilidade, testes de regressão, testes de aceitação, testes de manutenção e testes unitários, testes regressivos.',
        'Fui responsável pelo lavantamento de cenários e pela automação de testes de API e de testes Web e teste Mobile.',
        'Realizei automação de testes com Java, JUnit5, RestAssured, Cypress, Appium e Cucumber',
        'Atuo utilizando ativamente o framework Scrum. Tenho experiência com as ferramentas Jira e Azure.',
        'Realizo validação de dados em base de dados relacional e Não relacional.'
      ],
    },
    {
      company: "Intelipost",
      icon: Intelipost,
      role: "Senior Software QA Engineer",
      period: "Novembro de 2020 - Agosto de 2021",
      location: "São Paulo",
      responsibilities: [
        'Atuei com metodologias ágeis utilizando framework Scrum e para monitoramento de tarefas e gerenciamento de projetos, o Jira.',
        'Fui responsável pela criaçao de planos de testes, criação e aplicação de roteiros de testes.',
        'Atuei com a elabaração de documentos de Release.',
        'Implementei testes funcionais em API, e em aplicações WEB, apliquei teste de strees com acompanhamento do time de SRE, criei e impĺementei testes de regressão, testes de aceitação, testes de manutenção no sistema da empresa.',
        'Realizei autromação de testes com Java, JUnit4, RestAssured, Selenium, e Cucumber',
        'Teste de Strees com JMeter',
        'Intregração contínua com Jenkins',
        
      ],
    },
    {
      company: "Quality Assurance Team Lead",
      icon: Metaxix,
      role: "Senior Software QA Engineer",
      period: "Junho de 2020 - Novembro de 2020",
      location: "São Paulo",
      responsibilities: [
        'Atuei na criação e desenvolvimento de uma equipe de qualidade de software voltada para o planejamento e execução de testes em diversas equipes e em diferentes produtos.',
        'Realizei o gerenciamento da equipe para garantir a execução dos testes dentro do prazo estimado.',
        'Atuei com levantamento de relatórios de execução de testes.',
        'Criei documentação de release.',
        'Acompanhei a entrega da release junto ao cliente.',
        'Atuei na criação OKRs relacionados à qualidade.',
      ],
    },
    {
      company: "Analista de Qualidade",
      icon: Metaxix,
      role: "Senior Software QA Engineer",
      period: "Março de 2019 -Junho de 2020",
      location: "São Paulo",
      responsibilities: [
        'Atuei junto ao P.O com o levantamento requisitos junto ao cliente externo.',
        'Fui responsável pela criação e aplicação de planos de teste no sistema da empresa.',
        'Elaboração de documentos de Release',
        'Atuei com a aplicação de testes funcionais, usabilidade, regressão, aceitação, manutenção em aplicativos para Android e para IOS e para aplicações WEB',
        'Atuei com automação de testes WEB utilizando Selenium, API Utilzando Java e RestAssures e Mobile utilizando Java e Appium',
      ],
    },
    {
      company: "Telemática Sistemas Inteligentes",
      icon: Telematica,
      role: "Estagiário de garantia de qualidade",
      period: "Fevereiro de 2014 - Fevereiro 2015",
      location: "São Paulo",
      responsibilities: [
        'Junto ao time de engenharia de Produto atuei apoiando na criação de testes em novos produtos. Realizei testes funcionais de softwares e equipamentos construídos / adquiridos pela empresa.',
        'Atuei com tests funcinais no sosftware VEKTRA no qual eu realizei os seguites tipos de testes:',
        'Atuei com testes funcionais;',
        'Atuei com testes de configuração;',
        'Atuei com testes de instalação;',
        'Atuei com testes de envio de mensagens curtas para destinatários pré definidos;',
        'Atuei com testes de monitoramento;',
        'Atuei com testes de valores limites;',
        'Teste de recuperação;',
      ],
    },
  ];

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section className="professional-experience">
      <h3>Experiência Profissional</h3>
      {experiences.slice(0, isExpanded ? experiences.length : 2).map((exp, index) => (
        <ExperienceItem key={index} {...exp} />
      ))}
      {experiences.length > 2 && (
        <button onClick={toggleExpand} className="toggle-button">
          {isExpanded ? "Ver Menos" : "Ver Mais"}
        </button>
      )}
    </section>
  );
}

function ExperienceItem({ company, icon, role, period, location, responsibilities }) {
  return (
    <div className="experience-item">
      <h4>
        <img src={icon} alt={`${company} logo`} className="company-icon" /> {company}
      </h4>
      <span>
      <strong>{role}</strong> | {period} | {location}
      </span>
      <ul>
        {responsibilities.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Experience;
