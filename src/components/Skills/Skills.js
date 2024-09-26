import React from 'react';
import './Skills.css';

import Java from '../../assets/skills/Java.png';
import JUnit from '../../assets/skills/Junit.jpg';
import RestAssured from '../../assets/skills/Rest.png';
import Cucumber from '../../assets/skills/Cucumber.png';
import Selenium from '../../assets/skills/Selenium.png';
import JavaScript from '../../assets/skills/JavaScript.png';
import Cypress from '../../assets/skills/Cypress.jpg';
import Allure from '../../assets/skills/Allure.jpg';
import SQL from '../../assets/skills/SQL.png';
import NOSQL from '../../assets/skills/NoSQL.jpg';
import IntegracaoContiua from '../../assets/skills/Jenkins.jpg';
import Docker from '../../assets/skills/Docker.png';
import JMeter from '../../assets/skills/Jmeter.jpg';
import GitActions from '../../assets/skills/GitActions.png';
import Postman from '../../assets/skills/Postman.png';
import TestAPIRest from '../../assets/skills/API.png';
import Scrum from '../../assets/skills/Scrum.png';
import Kamban from '../../assets/skills/Kamban.png';
import OKR from '../../assets/skills/OKR.png';
import KPI from '../../assets/skills/KPI.png';
import Jira from '../../assets/skills/Jira.jpg';


function Skills() {
  const skills = [
    { title: "Java", icon: Java},
    { title: "JUnit", icon: JUnit },
    { title: "RestAssured", icon: RestAssured },
    { title: "Cucumber", icon: Cucumber },
    { title: "Selenium", icon: Selenium},
    { title: "JavaScript", icon: JavaScript },
    { title: "Cypress", icon: Cypress },
    { title: "Allure", icon: Allure},
    { title: "SQL", icon: SQL},
    { title: "NOSQL", icon: NOSQL },
    { title: "Integração Contínua", icon: IntegracaoContiua },
    { title: "Docker", icon: Docker},
    { title: "JMeter", icon: JMeter },
    { title: "Git Actions", icon: GitActions },
    { title: "Postman", icon: Postman},
    { title: "Testes em API Rest", icon: TestAPIRest },
    { title: "Scrum", icon: Scrum },
    { title: "Kanban", icon: Kamban},
    { title: "OKR", icon: OKR},
    { title: "KPI", icon: KPI},
    { title: "Jira", icon: Jira},
  
  ];

  return (
    <section className="skills-grid-container">
      <h3>Principais Habilidades</h3>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <SkillItem key={index} {...skill} />
        ))}
      </div>
    </section>
  );
}

function SkillItem({ title, icon }) {
  return (
    <div className="skill-card-grid">
      <img src={icon} alt={title} className="skill-icon" />
      <span>{title}</span>
    </div>
  );
}

export default Skills;
