import React from 'react';

import "./ContactInfo.css"

function ContactInfo() {
  return (  
    <section className="contact-info">
      <h4>Informações de Contato</h4>
        <p>Email: exemplo@dominio.com</p>
        <p>Telefone: (XX) XXXX-XXXX</p>
        <p>LinkedIn: linkedin.com/in/exemplo</p>
    </section>
  );
}

export default ContactInfo;