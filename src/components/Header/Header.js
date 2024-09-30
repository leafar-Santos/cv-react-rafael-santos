import React from 'react'; 

import Email from "../../assets/Email.png";
import Telefone from "../../assets/Telefone.png";
import Linkedin from "../../assets/Linkedin.png";
import GitHub from "../../assets/GitHub.png";
import Perfil from "../../assets/perfil.jpg";

import './Header.css'; 

const Header = () => {
  const imprimirPagina = () => {
    window.print();
  };

  return (
    <div>
      <header className="header">
        <div className="header-left">
          <img
            src={Perfil}
            alt="Foto de Rafael Santos"
          />
          <div style={{ textAlign: 'center', margin: '20px 0' }}>
       
       </div>
          <div>
            <h1>Rafael S Santos</h1>
            <h2>QA Automation Engineer</h2>
          </div>
        </div>

        {/* Informações de contato alinhadas à direita */}
        <div className="contact-info">
          <h4>Informações de Contato</h4>
          <p>
            <img src={Email} alt="Email" className="icon" /> 
            <a href="mailto:leafarccomputacao@gmail.com">Envie um e-mail</a>
          </p>
          <p>
            <img src={Telefone} alt="Telefone" className="icon" /> 
            <a href="https://wa.me/5511913339841">(11) 91333-9841</a>
          </p>
          <p>
            <img src={Linkedin} alt="LinkedIn" className="icon"/>
            <a href='https://www.linkedin.com/in/rafael-santos-47a000298/'>LinkedIn</a>
          </p>
          <p>
            <img src={GitHub} alt="GitHub" className="icon"/>
            <a href='https://github.com/leafar-Santos'>GitHub</a>
          </p>
        </div>

      </header>

   
      
    </div>
  );
};

export default Header;
