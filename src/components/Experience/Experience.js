import React, { useState } from 'react';
import "./Experience.css";
// Importando os ícones
import Intelipost from "../../assets/Intelipost.jpg" 
import Telematica from "../../assets/Telematica.jpg"
import Metaxix from "../../assets/Metasix.png"
import PedePronto from "../../assets/PedePronto.jpg"
import Claro from "../../assets/Claro.png"

function Experience() {
  const [isExpanded, setIsExpanded] = useState(false);

  const experiences = [
    {
      company: "Pede Pronto",
      icon: PedePronto,
      role: "Engenheiro QA",
      period: "Agosto de 2021 - Dezembro 2024",
      location: "São Paulo", 
      responsibilities: [
        'Fui responsável pela elaboração dos planos de testes das features da equipe da qual faço parte, responsável pela criação e aplicação dos cenários de testes.',
        'Atuei com testes funcionais, teste de API, testes de usabilidade, testes de regressão, testes de aceitação, testes de manutenção e testes unitários, testes regressivos.',
        'Fui responsável pelo lavantamento de cenários e pela automação de testes de API e de testes Web e teste Mobile.',
        'Realizei automação de testes com Java, JUnit5, RestAssured, Cypress, Appium e Cucumber',
        'Atuei utilizando ativamente o framework Scrum. Tenho experiência com as ferramentas Jira e Azure.',
        'Realizei validação de dados em base de dados relacional e Não relacional.'
      ],
    },
    {
      company: "Claro SA",
      icon: Claro,
      role: "Engenheiro QA",
      period: "Abril de 2022 - Fevereiro 2023",
      location: "São Paulo",
      responsibilities: [
        'Criei e executei testes manuais para garantir a qualidade de aplicativos mobile (Android e iOS).',
        'Desenvolvi e mantive testes automatizados com Java e Appium, assegurando a estabilidade e performance do app.',
        'Realizei testes de experiência do usuário, testando a usabilidade, compatibilidade e desempenho do aplicativo em diferentes dispositivos.',
        'Gerei relatórios detalhados sobre a execução dos testes, com ferramenta Xray',
        'Atuei utilizando metodologias ágeis buscando contribuir para a melhoria contínua do processo de desenvolvimento e testes.',
        'Realizei testes de aquisição de contas, validando tipos de plano disponíveis para cada perfil de usuário',
        'Testei APIs de forma manual com postman e automatizada, utilizando RestAssured e Java, para garantir a comunicação eficiente entre os sistemas.',
        'Colaborei de perto com desenvolvedores, designers e gerentes de produto para identificar e corrigir possíveis problemas.',
       
      ],
    },
    {
      company: "Intelipost",
      icon: Intelipost,
      role: "Analista de qualidade de sistemas Sênior",
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
      company: "Metasix Tecnologia",
      icon: Metaxix,
      role: "Quality Assurance Team Lead",
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
      company: "Metasix Tecnologia",
      icon: Metaxix,
      role: "Analista de Qualidade",
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
      role: "Analista de Qualidade",
      period: "Fevereiro de 2014 - Março 2017",
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

function ExperienceItem({ company, icon, role, period, location, product, description, responsibilities }) {
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
