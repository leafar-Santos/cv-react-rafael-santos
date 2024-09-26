import React from 'react';

import Email from    "../../assets/Email.png"
import Telefone from "../../assets/Telefone.png"
import Linkedin from "../../assets/Linkedin.png"
import GitHub from "../../assets/GitHub.png"


import './Header.css'; 

const Header = () => {
  return (
    <div>
      <header className="header">
        <div className="header-left">
          <img
            src="./perfil.jpg"
            alt="Foto de Rafael Santos"
          />
          <div>
            <h1>Rafael Santos</h1>
            <h2>QA Automation Engineer</h2>
          </div>
        </div>

        {/* Informações de contato alinhadas à direita */}
        <div className="contact-info">
          <h4>Informações de Contato</h4>
          <p>
            <img src={Email}
             alt="Email" className="icon" /> 
            <a href="leafarccomputacao@gmail.com">leafarccomputacao@gmail.com</a>
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
  )
}

export default Header;
