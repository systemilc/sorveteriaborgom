import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import imagem1 from '../../img/banner/1.jpg'

function Banner() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={imagem1}
          alt="Bem vindo. Sorveteria Borgom"
        />
        <Carousel.Caption>
          <h3>Bem-vindo à Sorveteria Borgom</h3>
          <p>Descubra os sabores mais deliciosos da cidade.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Banner;
