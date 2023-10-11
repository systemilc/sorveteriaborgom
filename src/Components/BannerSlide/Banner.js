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
      {/* <Carousel.Item>
        <img
          className="d-block w-100"
          src="imagem2.jpg"
          alt="Segundo slide"
        />
        <Carousel.Caption>
          <h3>Variedade de Sabores</h3>
          <p>Escolha entre uma ampla gama de sabores de sorvetes deliciosos.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="imagem3.jpg"
          alt="Terceiro slide"
        />
        <Carousel.Caption>
          <h3>Promoção Especial</h3>
          <p>Confira nossa oferta do dia e economize em sua sobremesa favorita.</p>
        </Carousel.Caption>
      </Carousel.Item>  */}
    </Carousel>
  );
}

export default Banner;
