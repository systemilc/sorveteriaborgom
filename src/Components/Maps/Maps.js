import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Maps() {
  const containerStyles = {
    height: '587px', // Define a altura desejada em pixels
  };

  return (
    <Container fluid style={containerStyles}>
      <h1 className='mt-3 mb-3'>Como nos encontrar?</h1>
      <Row>
        <Col className="d-flex align-items-center justify-content-center">
          <div>
            <h3>Estamos localizados no coração do bairro Santa Mônica na divisa com Rio Branco.</h3>
            <p><strong>Endereço</strong></p>
            <p>Praça João Vianna, 187, Santa Branca, Belo Horizonte</p>
          </div>
        </Col>
        <Col>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3753.4417708709047!2d-43.983000324775645!3d-19.82125218154281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa69b339539099f%3A0x88839c74a0573acd!2sSorveteria%20Borgom!5e0!3m2!1spt-BR!2sbr!4v1696993838853!5m2!1spt-BR!2sbr"
            width="600"
            height="450"
            style={{ border: '0' }} // Use um objeto para o estilo
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </Col>
      </Row>
    </Container>
  );
}

export default Maps;
