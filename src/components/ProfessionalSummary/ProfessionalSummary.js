import React, { useState } from 'react';
import './ProfessionalSummary.css';

function ProfessionalSummary() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section className="professional-resume">
      <h2>Resumo Profissional</h2>
      <div className={`resume-content ${isExpanded ? 'expanded' : 'collapsed'}`}>
        <p>Sou Engenheiro de Garantia de Qualidade com mais de 8 anos de experiência em automação e testes manuais para Web, Mobile e API. Busco garantir que os projetos dos quais participo sejam entregues com alto grau de qualidade, para isso, atuo desde a elaboração de planos e cenários até a execução em pipeline e acompanhamento de bugs.</p>
        <p>Trabalho com as equipes de desenvolvimento, adotando práticas Agile com a metodologia Scrum para criar estratégias de teste eficazes dentro do ciclo de vida de desenvolvimento de software, buscando garantir que os bugs sejam identificados e resolvidos rapidamente.</p>
        <p>Meu objetivo é assegurar que cada release seja entregue com qualidade e agregando cada vez mais valor ao produto final.</p>
        <p>Tenho domínio em ferramentas de gerenciamento de projetos, como Jira e Microsoft Azure, além de experiência em gerenciamento de testes com Qase e TestLink.</p>
        <p>Minha experiência em automação inclui o desenvolvimento e execução de testes utilizando tecnologias como Selenium, Appium, JUnit, Rest Assured, Cypress e Cucumber. Sou especialista em automação de testes com Java e JavaScript, além de possuir experiência em integração contínua com Jenkins e pipelines automatizados que melhoram a eficiência e reduzem o tempo de entrega. Também tenho sólidos conhecimentos em bancos de dados relacionais (SQL, Oracle, PostgreSQL) e não relacionais (NoSQL), além de versionamento de código com Git.</p>
      </div>
      <button onClick={toggleExpand} className="toggle-button">
        {isExpanded ? 'Ver menos' : 'Ver mais'}
      </button>
    </section>
  );
}

export default ProfessionalSummary;
