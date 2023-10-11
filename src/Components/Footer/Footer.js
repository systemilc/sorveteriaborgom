import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top footer">
      <p>© 2023 Company, Sorveteria Borgom - Todos os Direitos Reservados.</p>
      <ul className="list-unstyled d-flex">
        <li className="ms-3">
          <a className="link-body-emphasis" href="https://www.instagram.com/seu_perfil">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </li>
        <li className="ms-3">
          <a className="link-body-emphasis" href="https://www.facebook.com/seu_perfil">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
